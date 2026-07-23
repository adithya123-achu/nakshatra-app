import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.4 + 0.3,
        opacity: Math.random() * 0.7 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.08,
        driftY: (Math.random() - 0.5) * 0.08,
      }));
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const twinkle =
          0.5 + 0.5 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const alpha = star.opacity * twinkle;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 248, 220, ${alpha})`;
        ctx.fill();

        star.x += star.driftX;
        star.y += star.driftY;

        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    animationId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07051a] via-cosmic-900 to-[#0a0820]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,125,42,0.12)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(120,80,200,0.08)_0%,transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(214,125,42,0.06)_0%,transparent_45%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-900/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export default StarBackground;
