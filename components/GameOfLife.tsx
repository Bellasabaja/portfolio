"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Interaktive Game-of-Life-Simulation (Canvas).
 *
 * - läuft nur, wenn sie im sichtbaren Bereich ist (spart Akku/CPU)
 * - respektiert prefers-reduced-motion (startet dann pausiert)
 * - Klick/Tap setzt Zellen, Buttons für Play/Pause und Neustart
 */

const CELL = 9; // Zellgröße in CSS-Pixeln
const INTERVAL = 130; // ms pro Generation
const ACCENT = "#2dd4bf";
const BG = "#111a2e";
const GRID_LINE = "rgba(45, 212, 191, 0.07)";

type Grid = Uint8Array;

function createGrid(cols: number, rows: number, random = true): Grid {
  const g = new Uint8Array(cols * rows);
  if (random) {
    for (let i = 0; i < g.length; i++) {
      g[i] = Math.random() < 0.28 ? 1 : 0;
    }
  }
  return g;
}

/** Ein Schritt Game of Life mit umlaufenden Rändern (Torus). */
function step(grid: Grid, cols: number, rows: number): Grid {
  const next = new Uint8Array(grid.length);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let neighbours = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          const nx = (x + dx + cols) % cols;
          const ny = (y + dy + rows) % rows;
          neighbours += grid[ny * cols + nx];
        }
      }
      const alive = grid[y * cols + x];
      next[y * cols + x] = alive
        ? neighbours === 2 || neighbours === 3
          ? 1
          : 0
        : neighbours === 3
          ? 1
          : 0;
    }
  }
  return next;
}

export default function GameOfLife() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const gridRef = useRef<Grid>(new Uint8Array(0));
  const colsRef = useRef(0);
  const rowsRef = useRef(0);
  const runningRef = useRef(false);
  const visibleRef = useRef(false);

  const [running, setRunning] = useState(true);
  const [generation, setGeneration] = useState(0);
  const [alive, setAlive] = useState(0);

  runningRef.current = running;

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const cols = colsRef.current;
    const rows = rowsRef.current;
    const grid = gridRef.current;

    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, cols * CELL, rows * CELL);

    // dezentes Raster
    ctx.strokeStyle = GRID_LINE;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x <= cols; x++) {
      ctx.moveTo(x * CELL + 0.5, 0);
      ctx.lineTo(x * CELL + 0.5, rows * CELL);
    }
    for (let y = 0; y <= rows; y++) {
      ctx.moveTo(0, y * CELL + 0.5);
      ctx.lineTo(cols * CELL, y * CELL + 0.5);
    }
    ctx.stroke();

    ctx.fillStyle = ACCENT;
    let count = 0;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if (grid[y * cols + x]) {
          count++;
          ctx.fillRect(x * CELL + 1, y * CELL + 1, CELL - 2, CELL - 2);
        }
      }
    }
    setAlive(count);
  }, []);

  /** Canvas an Containergröße anpassen und Gitter neu aufsetzen. */
  const resize = useCallback(
    (reseed: boolean) => {
      const canvas = canvasRef.current;
      const wrap = wrapRef.current;
      if (!canvas || !wrap) return;

      const width = wrap.clientWidth;
      const height = wrap.clientHeight;
      if (width === 0 || height === 0) return;

      const cols = Math.max(8, Math.floor(width / CELL));
      const rows = Math.max(8, Math.floor(height / CELL));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = cols * CELL * dpr;
      canvas.height = rows * CELL * dpr;
      canvas.style.width = `${cols * CELL}px`;
      canvas.style.height = `${rows * CELL}px`;

      const ctx = canvas.getContext("2d");
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (reseed || gridRef.current.length !== cols * rows) {
        gridRef.current = createGrid(cols, rows);
        setGeneration(0);
      }
      colsRef.current = cols;
      rowsRef.current = rows;
      draw();
    },
    [draw]
  );

  // Initialisierung, Resize-Beobachtung, Sichtbarkeit
  useEffect(() => {
    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;
    if (reduced) setRunning(false);

    resize(true);

    const ro = new ResizeObserver(() => resize(false));
    if (wrapRef.current) ro.observe(wrapRef.current);

    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    if (wrapRef.current) io.observe(wrapRef.current);

    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, [resize]);

  // Simulationsschleife
  useEffect(() => {
    const id = window.setInterval(() => {
      if (!runningRef.current || !visibleRef.current) return;
      gridRef.current = step(gridRef.current, colsRef.current, rowsRef.current);
      setGeneration((g) => g + 1);
      draw();
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [draw]);

  /** Klick/Tap setzt oder löscht eine Zelle. */
  const toggleCell = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / CELL);
    const y = Math.floor((event.clientY - rect.top) / CELL);
    if (x < 0 || y < 0 || x >= colsRef.current || y >= rowsRef.current) return;
    const index = y * colsRef.current + x;
    gridRef.current[index] = gridRef.current[index] ? 0 : 1;
    draw();
  };

  return (
    <div className="gol">
      <div className="gol-canvas-wrap" ref={wrapRef}>
        <canvas ref={canvasRef} onClick={toggleCell} role="presentation" />
      </div>
      <p className="sr-only">
        Dekorative Simulation des Spiels des Lebens. Zellen entstehen und
        sterben nach festen Regeln. Die Darstellung ist rein visuell; alle
        Informationen dazu stehen im Text der Case Study.
      </p>
      <div className="gol-bar">
        <div className="gol-stats" aria-live="off">
          <span>
            Generation <strong>{generation}</strong>
          </span>
          <span>
            Lebende Zellen <strong>{alive}</strong>
          </span>
        </div>
        <div className="gol-buttons">
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            aria-pressed={running}
          >
            {running ? "Pause" : "Start"}
          </button>
          <button type="button" onClick={() => resize(true)}>
            Neu
          </button>
        </div>
      </div>
    </div>
  );
}
