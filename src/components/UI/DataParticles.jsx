import React, { useEffect, useRef } from 'react';
import { Box, useTheme } from '@mui/material';

/**
 * Data Particles Background Component
 * Creates floating particles representing data points
 * Perfect for data science visualization
 * Optimized for performance with reduced particle count
 */
const DataParticles = ({ particleCount = 40, speed = 0.3 }) => {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const frameCount = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.type = Math.floor(Math.random() * 3); // 0: circle, 1: square, 2: triangle
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * speed + 0.1;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.3;

        // Choose color from theme
        const colors = [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.accent?.main || '#00ff88',
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around horizontally
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;

        // Reset when reaching bottom
        if (this.y > canvas.height) {
          this.reset();
        }

        // Slight horizontal drift
        this.speedX += (Math.random() - 0.5) * 0.01;
        this.speedX = Math.max(-0.5, Math.min(0.5, this.speedX));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;

        switch (this.type) {
          case 0: // Circle
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 1: // Square
            ctx.fillRect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
            break;
          case 2: // Triangle
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - this.size);
            ctx.lineTo(this.x - this.size, this.y + this.size);
            ctx.lineTo(this.x + this.size, this.y + this.size);
            ctx.closePath();
            ctx.fill();
            break;
        }

        // Add glow effect for some particles
        if (Math.random() > 0.7) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color;
        }

        ctx.restore();
      }
    }

    // Create particles
    particlesRef.current = Array.from({ length: particleCount }, () => new Particle());

    // Animation loop - optimized with frame skipping
    const animate = () => {
      frameCount.current++;

      // Clear every frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme, particleCount, speed]);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
};

export default DataParticles;
