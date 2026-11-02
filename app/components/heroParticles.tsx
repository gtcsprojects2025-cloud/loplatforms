"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, MousePointer2, RotateCcw, Trophy, Zap } from "lucide-react";

type Particle = { x: number; y: number; vx: number; vy: number; r: number; color: string; dodger: boolean };
type Phase = "intro" | "playing" | "won" | "failed" | "complete";

// Brand blues/indigo plus an occasional red accent (rgb triplets)
const COLORS = ["37,99,235", "79,70,229", "59,130,246"];
const ACCENT = "220,38,38";
const CELEBRATE = ["16,185,129", "37,99,235", "220,38,38", "234,179,8"];

const LINK_DISTANCE = 120;
const GRAB_RADIUS = 190;
const HOLD_RADIUS = 280;
const CAPTURE_RADIUS = 70;

// Each level asks for a bigger share of the network, with less energy and a new twist
const LEVELS = [
  { name: "Warm-up", target: 0.5, energy: 6000, surges: false, dodgers: false, tip: "Drag slowly across the screen — the dots follow your ring." },
  { name: "Turbulence", target: 0.6, energy: 6000, surges: true, dodgers: false, tip: "Every second some dots get knocked away. Keep sweeping to pull them back." },
  { name: "Dodgers", target: 0.7, energy: 7000, surges: false, dodgers: true, tip: "The red dots try to run from you. Push them into a corner to catch them." },
];

// Touch: hold still this long before dragging gathers (so normal swipes still scroll the page)
const TOUCH_HOLD_MS = 220;

// Interactive particle network + mini challenge for the hero. Particles are drawn toward
// the cursor, gather while the pointer is held, and burst on release. Gathering enough of
// the network before the energy runs out clears a level.
// Listens on its parent element, so it should be placed inside the hero section.
export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const [level, setLevel] = useState(0);
  const [phase, setPhase] = useState<Phase>("intro");
  const [progress, setProgress] = useState(0);
  const [energy, setEnergy] = useState(100);
  const [lastScore, setLastScore] = useState(0);

  // The animation loop reads these instead of React state
  const levelRef = useRef(0);
  const phaseRef = useRef<Phase>("intro");

  const changePhase = useCallback((next: Phase) => {
    phaseRef.current = next;
    setPhase(next);
  }, []);

  const goToLevel = (next: number) => {
    levelRef.current = next;
    setLevel(next);
    setProgress(0);
    setEnergy(100);
    changePhase("intro");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999, active: false, down: false, downAt: 0 };
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let lastSurge = 0;
    let celebrateUntil = 0;
    let shownProgress = -1;
    let shownEnergy = -1;
    let captured = 0;

    const isScoring = () => phaseRef.current === "intro" || phaseRef.current === "playing" || phaseRef.current === "failed";

    const init = () => {
      const rect = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(110, Math.max(40, (width * height) / 14000)));
      particles = Array.from({ length: count }, () => {
        const dodger = Math.random() < 0.15;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: Math.random() * 2 + 1.2,
          color: dodger ? ACCENT : COLORS[Math.floor(Math.random() * COLORS.length)],
          dodger,
        };
      });
    };

    const burst = (strength: number) => {
      for (const p of particles) {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < HOLD_RADIUS) {
          const force = (1 - dist / HOLD_RADIUS) * strength;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }
    };

    const endRound = (won: boolean, pct: number) => {
      pointer.down = false;
      if (won) {
        burst(16);
        celebrateUntil = performance.now() + 1600;
        changePhase(levelRef.current === LEVELS.length - 1 ? "complete" : "won");
      } else {
        burst(6);
        setLastScore(Math.round(pct * 100));
        changePhase("failed");
      }
    };

    const update = (now: number) => {
      const lvl = LEVELS[levelRef.current];
      const radius = pointer.down ? HOLD_RADIUS : GRAB_RADIUS;

      // Turbulence: every so often a random chunk of the network gets kicked away
      if (lvl.surges && isScoring() && now - lastSurge > 1100) {
        lastSurge = now;
        for (const p of particles) {
          if (Math.random() < 0.25) {
            const angle = Math.random() * Math.PI * 2;
            p.vx += Math.cos(angle) * 3.5;
            p.vy += Math.sin(angle) * 3.5;
          }
        }
      }

      captured = 0;
      for (const p of particles) {
        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < radius) {
            const force = (1 - dist / radius) * (pointer.down ? 0.55 : 0.06);
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
          // Dodgers push back when you get close — catchable, but they put up a fight
          if (lvl.dodgers && p.dodger && dist < 110 && isScoring()) {
            const flee = (1 - dist / 110) * 0.9;
            p.vx -= (dx / dist) * flee;
            p.vy -= (dy / dist) * flee;
          }
          if (pointer.down && dist < CAPTURE_RADIUS) captured++;
        }

        // Friction plus a little wander keeps the field calm but alive
        p.vx = p.vx * 0.97 + (Math.random() - 0.5) * 0.03;
        p.vy = p.vy * 0.97 + (Math.random() - 0.5) * 0.03;
        const speed = Math.hypot(p.vx, p.vy);
        if (speed > 6) {
          p.vx = (p.vx / speed) * 6;
          p.vy = (p.vy / speed) * 6;
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        p.x = Math.max(0, Math.min(width, p.x));
        p.y = Math.max(0, Math.min(height, p.y));
      }

      if (pointer.down && isScoring()) {
        const pct = captured / particles.length;
        const left = Math.max(0, 1 - (now - pointer.downAt) / lvl.energy);

        const progressPct = Math.round(pct * 100);
        const energyPct = Math.round(left * 50) * 2;
        if (progressPct !== shownProgress) setProgress((shownProgress = progressPct));
        if (energyPct !== shownEnergy) setEnergy((shownEnergy = energyPct));

        if (pct >= lvl.target) endRound(true, pct);
        else if (left <= 0) endRound(false, pct);
      }
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      const celebrating = now < celebrateUntil;

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(37,99,235,${(1 - dist / LINK_DISTANCE) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (pointer.active) {
        const radius = pointer.down ? HOLD_RADIUS : GRAB_RADIUS;
        for (const p of particles) {
          const dist = Math.hypot(pointer.x - p.x, pointer.y - p.y);
          if (dist < radius) {
            ctx.strokeStyle = `rgba(79,70,229,${(1 - dist / radius) * 0.55})`;
            ctx.lineWidth = pointer.down ? 1.4 : 1;
            ctx.beginPath();
            ctx.moveTo(pointer.x, pointer.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        }
      }

      const dodgerLevel = LEVELS[levelRef.current].dodgers && isScoring();
      particles.forEach((p, i) => {
        const color = celebrating ? CELEBRATE[i % CELEBRATE.length] : p.color;
        const r = dodgerLevel && p.dodger ? p.r + 1.5 : p.r;
        if (dodgerLevel && p.dodger) {
          ctx.fillStyle = "rgba(220,38,38,0.15)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, r + 5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = `rgba(${color},${celebrating ? 0.95 : 0.75})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Capture ring: outer arc = progress toward the target, inner arc = energy left
      if (pointer.down && isScoring()) {
        const lvl = LEVELS[levelRef.current];
        const pct = captured / particles.length;
        const left = Math.max(0, 1 - (now - pointer.downAt) / lvl.energy);
        const start = -Math.PI / 2;

        ctx.lineWidth = 3;
        ctx.strokeStyle = "rgba(37,99,235,0.12)";
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, CAPTURE_RADIUS, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "rgba(79,70,229,0.9)";
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, CAPTURE_RADIUS, start, start + Math.PI * 2 * Math.min(pct / lvl.target, 1));
        ctx.stroke();

        ctx.lineWidth = 2;
        ctx.strokeStyle = left < 0.3 ? "rgba(220,38,38,0.85)" : "rgba(234,179,8,0.85)";
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, CAPTURE_RADIUS - 8, start, start + Math.PI * 2 * left);
        ctx.stroke();
        ctx.lineCap = "butt";
      }
    };

    const loop = (now: number) => {
      if (visible) {
        update(now);
        draw(now);
      }
      frame = requestAnimationFrame(loop);
    };

    const setPointer = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
      if (glowRef.current) {
        glowRef.current.style.opacity = "1";
        glowRef.current.style.transform = `translate(${pointer.x - 200}px, ${pointer.y - 200}px)`;
      }
    };

    const startHold = () => {
      pointer.down = true;
      pointer.downAt = performance.now();
      shownProgress = shownEnergy = -1;
      if (isScoring()) changePhase("playing");
    };

    // On touch screens the round starts after a short press, then the page stops scrolling
    // so the finger can drag the ring around
    let holdTimer = 0;
    const cancelHoldTimer = () => window.clearTimeout(holdTimer);

    const handleMove = (e: PointerEvent) => setPointer(e);
    const handleDown = (e: PointerEvent) => {
      // Let buttons, links and the challenge panel be clicked normally
      if ((e.target as Element).closest("a, button, [data-hud]")) return;
      setPointer(e);
      if (e.pointerType === "touch") {
        cancelHoldTimer();
        holdTimer = window.setTimeout(() => {
          startHold();
          navigator.vibrate?.(15);
        }, TOUCH_HOLD_MS);
      } else {
        startHold();
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (pointer.down) e.preventDefault();
      else cancelHoldTimer(); // finger moved before the hold registered: it's a scroll
    };
    const handleContextMenu = (e: Event) => {
      if (pointer.down) e.preventDefault();
    };
    const handleUp = () => {
      cancelHoldTimer();
      if (!pointer.down) return;
      pointer.down = false;
      if (phaseRef.current === "playing") {
        // Let go before reaching the target
        endRound(false, captured / particles.length);
      } else {
        const held = Math.min((performance.now() - pointer.downAt) / 1000, 1.5);
        burst(4 + held * 6);
      }
    };
    const handleLeave = () => {
      handleUp();
      pointer.active = false;
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    init();
    if (reduceMotion) {
      draw(0);
      return;
    }

    const resizeObserver = new ResizeObserver(init);
    resizeObserver.observe(host);
    const visibility = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    visibility.observe(host);

    host.addEventListener("pointermove", handleMove);
    host.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);
    host.addEventListener("pointerleave", handleLeave);
    host.addEventListener("pointercancel", handleLeave);
    host.addEventListener("touchmove", handleTouchMove, { passive: false });
    host.addEventListener("contextmenu", handleContextMenu);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      cancelHoldTimer();
      host.removeEventListener("touchmove", handleTouchMove);
      host.removeEventListener("contextmenu", handleContextMenu);
      resizeObserver.disconnect();
      visibility.disconnect();
      host.removeEventListener("pointermove", handleMove);
      host.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      host.removeEventListener("pointerleave", handleLeave);
      host.removeEventListener("pointercancel", handleLeave);
    };
  }, [changePhase]);

  const lvl = LEVELS[level];
  const target = Math.round(lvl.target * 100);

  return (
    <>
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.18),rgba(220,38,38,0.06)_45%,transparent_70%)] opacity-0 transition-opacity duration-500"
      />
      <canvas ref={canvasRef} aria-hidden className="pointer-events-none absolute inset-0 w-full h-full" />

      {/* Challenge panel */}
      <div
        data-hud
        aria-live="polite"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-[calc(100%-2rem)] max-w-md rounded-2xl bg-white/85 backdrop-blur-md border border-slate-200 shadow-lg shadow-blue-900/5 px-4 py-3 text-slate-700 motion-reduce:hidden"
      >
        {/* Level dots */}
        <div className="flex items-center justify-between gap-3 text-xs">
          <span className="font-semibold text-slate-900">
            Level {level + 1}/{LEVELS.length} · <span className="text-blue-600">{lvl.name}</span>
          </span>
          <span className="flex gap-1">
            {LEVELS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-5 rounded-full transition-colors duration-500 ${
                  i < level || phase === "complete" || (i === level && phase === "won") ? "bg-emerald-500" : i === level ? "bg-blue-600" : "bg-slate-200"
                }`}
              />
            ))}
          </span>
        </div>

        {phase === "intro" && (
          <div className="mt-2 text-xs leading-relaxed">
            <p className="flex items-center gap-1.5 font-semibold text-slate-900">
              <MousePointer2 className="w-4 h-4 shrink-0 text-blue-600 animate-pulse" />
              Mini game: catch {target}% of the dots
            </p>
            <ol className="mt-2 grid grid-cols-3 gap-2 text-center text-[11px] text-slate-600">
              <li className="rounded-lg bg-slate-50 px-1.5 py-1.5">
                <span className="block font-bold text-blue-600">1</span>
                <span className="hidden md:inline">Press &amp; hold the mouse</span>
                <span className="md:hidden">Press &amp; hold your finger</span>
              </li>
              <li className="rounded-lg bg-slate-50 px-1.5 py-1.5">
                <span className="block font-bold text-blue-600">2</span>
                Drag over the dots to pull them in
              </li>
              <li className="rounded-lg bg-slate-50 px-1.5 py-1.5">
                <span className="block font-bold text-blue-600">3</span>
                Fill the ring before energy runs out
              </li>
            </ol>
            {level > 0 && <p className="mt-2 text-slate-500">💡 {lvl.tip}</p>}
          </div>
        )}

        {phase === "playing" && (
          <div className="mt-2.5 space-y-2">
            <div className="flex items-center gap-3 text-xs">
              <span className="w-14 text-slate-500">Caught</span>
              <div className="relative flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-[width] duration-150" style={{ width: `${progress}%` }} />
                <div className="absolute top-0 bottom-0 w-0.5 bg-slate-900" style={{ left: `${target}%` }} />
              </div>
              <span className="w-16 text-right font-semibold text-slate-900 tabular-nums">
                {progress}% / {target}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="w-14 text-slate-500 flex items-center gap-1">
                <Zap className="w-3 h-3" /> Energy
              </span>
              <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-[width] duration-150 ${energy < 30 ? "bg-red-500" : "bg-amber-400"}`}
                  style={{ width: `${energy}%` }}
                />
              </div>
              <span className="w-16" />
            </div>
          </div>
        )}

        {phase === "failed" && (
          <p className="mt-2 text-xs leading-relaxed">
            <span className="font-semibold text-red-600">
              {lastScore >= target - 15 ? `So close! ${lastScore}% of ${target}%.` : `You caught ${lastScore}% — you need ${target}%.`}
            </span>{" "}
            <span className="text-slate-500">
              {lastScore < 10 ? "Keep holding while you drag across the dots." : lvl.tip} Hold again to retry.
            </span>
          </p>
        )}

        {phase === "won" && (
          <div className="mt-2">
            <p className="text-xs leading-relaxed">
              <span className="font-semibold text-emerald-600">Level {level + 1} cleared! 🎉</span>{" "}
              <span className="text-slate-500">Next up: {LEVELS[level + 1].name}. Think you can handle it?</span>
            </p>
            <div className="mt-2.5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => goToLevel(level + 1)}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300"
              >
                Next level <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <Link href="/services" className="text-xs font-medium text-blue-600 hover:underline">
                Like how this feels? See what we build →
              </Link>
            </div>
          </div>
        )}

        {phase === "complete" && (
          <div className="mt-2">
            <div className="flex items-start gap-3">
              <span className="grid place-items-center w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md">
                <Trophy className="w-5 h-5" />
              </span>
              <p className="text-xs leading-relaxed">
                <span className="block text-sm font-bold text-slate-900">Network Master 🏆</span>
                You tamed all {LEVELS.length} levels. Now imagine what we can build for your organization.
              </p>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
              >
                Start your project <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                type="button"
                onClick={() => goToLevel(0)}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                <RotateCcw className="w-3 h-3" /> Play again
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
