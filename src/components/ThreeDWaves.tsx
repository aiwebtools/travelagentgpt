
import { useEffect, useRef } from 'react';

const ThreeDWaves = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = 400;
    
    const resizeCanvas = () => {
      width = window.innerWidth;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Wave parameters
    const waves = [
      { y: height / 2, amplitude: 20, frequency: 0.01, speed: 0.02, color: 'rgba(14, 165, 233, 0.3)' },
      { y: height / 2 + 30, amplitude: 15, frequency: 0.02, speed: 0.03, color: 'rgba(14, 165, 233, 0.2)' },
      { y: height / 2 + 60, amplitude: 25, frequency: 0.015, speed: 0.01, color: 'rgba(14, 165, 233, 0.1)' },
    ];
    
    let animationFrameId: number;
    let time = 0;
    
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw waves
      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);
        
        for (let x = 0; x < width; x++) {
          const dx = x * wave.frequency;
          const dy = Math.sin(dx + time * wave.speed) * wave.amplitude;
          ctx.lineTo(x, wave.y + dy);
        }
        
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        
        ctx.fillStyle = wave.color;
        ctx.fill();
      });
      
      time += 0.1;
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full h-[400px] z-0 opacity-60"
    />
  );
};

export default ThreeDWaves;
