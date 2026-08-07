"use client";

import { useEffect, useRef } from "react";

const CODE_LINES = [
  "const evolui = createApp({",
  '  brand: "EvoluiLab",',
  '  focus: ["sites", "sistemas"],',
  "});",
  "",
  "await evolui.design({",
  '  estilo: "performance",',
  '  conversao: true,',
  "});",
  "",
  "evolui.deploy({",
  '  destino: "produção",',
  "  resultado: () => cresce(),",
  "});",
];

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

export function RealtimeRender() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    const start = performance.now();
    let width = 0;
    let height = 0;
    let dpr = 1;
    let reduced = false;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const syncReduced = () => {
      reduced = prefersReduced.matches;
    };
    syncReduced();
    prefersReduced.addEventListener("change", syncReduced);

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(360, Math.floor(rect.width));
      height = Math.max(320, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const roundRect = (
      x: number,
      y: number,
      w: number,
      h: number,
      r: number
    ) => {
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + w, y, x + w, y + h, radius);
      ctx.arcTo(x + w, y + h, x, y + h, radius);
      ctx.arcTo(x, y + h, x, y, radius);
      ctx.arcTo(x, y, x + w, y, radius);
      ctx.closePath();
    };

    const paint = (now: number) => {
      const elapsed = (now - start) / 1000;
      ctx.clearRect(0, 0, width, height);

      const openT = reduced ? 1 : easeOutCubic(clamp01(elapsed / 1.4));
      // Linear typing — slower and more readable
      const codeT = reduced ? 1 : clamp01((elapsed - 1.35) / 7.5);
      const blink = Math.floor(elapsed * 1.6) % 2 === 0;

      const padTop = 16;
      const padBottom = 20;
      const maxByWidth = Math.min(width * 0.96, 620);
      const maxByHeight = (height - padTop - padBottom) / 0.78;
      const laptopW = Math.min(maxByWidth, maxByHeight);
      const baseH = laptopW * 0.05;
      const screenH = laptopW * 0.58;
      const cx = width / 2;
      const baseY = padTop + screenH + laptopW * 0.015;
      const floatY = reduced ? 0 : Math.sin(elapsed * 0.7) * 2;

      ctx.save();
      ctx.translate(0, floatY);

      const baseX = cx - laptopW / 2;

      // Base
      roundRect(baseX, baseY, laptopW, baseH, 5);
      ctx.fillStyle = "#2a2925";
      ctx.fill();
      roundRect(baseX + laptopW * 0.2, baseY + baseH * 0.35, laptopW * 0.6, 3, 2);
      ctx.fillStyle = "#1a1916";
      ctx.fill();

      // Slim deck line
      roundRect(baseX + 8, baseY - 3, laptopW - 16, 5, 2);
      ctx.fillStyle = "#3a3833";
      ctx.fill();

      const hingeY = baseY - 2;

      // Lid
      ctx.save();
      ctx.translate(cx, hingeY);
      ctx.scale(1, 0.1 + openT * 0.9);
      ctx.translate(-cx, -hingeY);

      const lidX = baseX + laptopW * 0.025;
      const lidW = laptopW * 0.95;
      const lidY = hingeY - screenH;

      roundRect(lidX, lidY, lidW, screenH, 10);
      ctx.fillStyle = "#252420";
      ctx.fill();
      ctx.strokeStyle = "rgba(243,241,236,0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      const pad = laptopW * 0.03;
      const sx = lidX + pad;
      const sy = lidY + pad;
      const sw = lidW - pad * 2;
      const sh = screenH - pad * 2.1;

      roundRect(sx, sy, sw, sh, 6);
      ctx.fillStyle = "#141311";
      ctx.fill();

      // camera
      ctx.beginPath();
      ctx.fillStyle = "rgba(243,241,236,0.18)";
      ctx.arc(cx, sy + 6, 1.8, 0, Math.PI * 2);
      ctx.fill();

      if (openT > 0.35) {
        const contentAlpha = clamp01((openT - 0.35) / 0.4);
        ctx.save();
        roundRect(sx, sy, sw, sh, 6);
        ctx.clip();
        ctx.globalAlpha = contentAlpha;

        // title bar
        ctx.fillStyle = "#1f1e1b";
        ctx.fillRect(sx, sy, sw, sh * 0.1);
        ["#ff5f57", "#febc2e", "#6b6b6b"].forEach((c, i) => {
          ctx.beginPath();
          ctx.fillStyle = c;
          ctx.globalAlpha = contentAlpha * 0.75;
          ctx.arc(sx + 14 + i * 11, sy + sh * 0.05, 3, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.globalAlpha = contentAlpha;
        ctx.fillStyle = "rgba(242,244,245,0.4)";
        ctx.font = `500 ${Math.max(10, sw * 0.028)}px ui-sans-serif, system-ui, sans-serif`;
        ctx.fillText("evoluilab.ts", sx + 55, sy + sh * 0.065);

        const codeX = sx + sw * 0.07;
        const codeY = sy + sh * 0.18;
        const lineH = Math.max(14, sh * 0.058);
        const fontSize = Math.max(11, sw * 0.032);
        ctx.font = `400 ${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;

        const totalChars = CODE_LINES.reduce((n, l) => n + l.length + 1, 0);
        const shownChars = Math.floor(totalChars * codeT);
        let counted = 0;
        let cursorX = codeX;
        let cursorY = codeY;

        CODE_LINES.forEach((line, row) => {
          const y = codeY + row * lineH;
          if (y > sy + sh - lineH) return;

          ctx.fillStyle = "rgba(242,244,245,0.22)";
          ctx.fillText(String(row + 1).padStart(2, " "), sx + sw * 0.02, y);

          let draw = "";
          for (let i = 0; i < line.length; i++) {
            if (counted >= shownChars) break;
            draw += line[i];
            counted++;
          }
          if (counted < shownChars) counted++;

          let x = codeX;
          for (const part of tokenize(draw)) {
            ctx.fillStyle = part.color;
            ctx.fillText(part.text, x, y);
            x += ctx.measureText(part.text).width;
          }

          if (counted >= shownChars) {
            cursorX = codeX + ctx.measureText(draw).width;
            cursorY = y;
          }
        });

        if (codeT < 1 || blink) {
          ctx.fillStyle = "#e8e2d6";
          ctx.fillRect(cursorX + 1, cursorY - fontSize + 2, 2, fontSize + 2);
        }

        ctx.restore();
      }

      ctx.restore();
      ctx.restore();
      raf = requestAnimationFrame(paint);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    raf = requestAnimationFrame(paint);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      prefersReduced.removeEventListener("change", syncReduced);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto aspect-[1/1] w-full max-w-[640px] sm:aspect-[5/4] sm:max-w-[680px]"
      aria-hidden
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}

function tokenize(line: string): { text: string; color: string }[] {
  if (!line) return [];
  const tokens: { text: string; color: string }[] = [];
  const re =
    /(\s+)|("(?:\\.|[^"])*")|(\b(?:const|await|true|false)\b)|(\b(?:createApp|design|deploy|cresce|evolui)\b)|([{}()\[\].,:;=><?]+)|([A-Za-z_][\w]*)|(\d+)/g;
  let m: RegExpExecArray | null;
  let last = 0;
  while ((m = re.exec(line))) {
    if (m.index > last) {
      tokens.push({ text: line.slice(last, m.index), color: "#c8d0d4" });
    }
    const [full, space, str, kw, fn, punct, ident, num] = m;
    if (space) tokens.push({ text: space, color: "#c8d0d4" });
    else if (str) tokens.push({ text: str, color: "#d6cfc0" });
    else if (kw) tokens.push({ text: kw, color: "#e8e2d6" });
    else if (fn) tokens.push({ text: fn, color: "#f3f1ec" });
    else if (punct) tokens.push({ text: punct, color: "#6b6b6b" });
    else if (num) tokens.push({ text: num, color: "#a8a29a" });
    else if (ident) tokens.push({ text: ident, color: "#cfc9bd" });
    else tokens.push({ text: full, color: "#c8c8c8" });
    last = m.index + full.length;
  }
  if (last < line.length) {
    tokens.push({ text: line.slice(last), color: "#c8d0d4" });
  }
  return tokens;
}
