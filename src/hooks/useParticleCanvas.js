import { useEffect, useRef } from 'react';

export const useParticleCanvas = ({ color = '#4f6ef7', count = 50, connectLines = false } = {}) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth || 480;
      canvas.height = canvas.offsetHeight || 800;
    };
    resize();

    const colors = connectLines
      ? ['#4f6ef7', '#818cf8', '#c084fc', '#38bdf8']
      : null;

    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.2 + 0.2,
      o: Math.random() * 0.14 + 0.04,
      c: colors ? colors[Math.floor(Math.random() * colors.length)] : color,
    }));

    const animate = () => {
      canvas.width = canvas.offsetWidth || canvas.width;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pts = particlesRef.current;

      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.globalAlpha = p.o;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (connectLines) {
        ctx.globalAlpha = 0.025;
        ctx.strokeStyle = '#818cf8';
        ctx.lineWidth = 0.5;
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const dx = pts[i].x - pts[j].x;
            const dy = pts[i].y - pts[j].y;
            if (dx * dx + dy * dy < 6400) {
              ctx.beginPath();
              ctx.moveTo(pts[i].x, pts[i].y);
              ctx.lineTo(pts[j].x, pts[j].y);
              ctx.stroke();
            }
          }
        }
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [color, count, connectLines]);

  // Update particle colors when color prop changes
  useEffect(() => {
    if (!connectLines) {
      particlesRef.current.forEach(p => { p.c = color; });
    }
  }, [color, connectLines]);

  return canvasRef;
};
