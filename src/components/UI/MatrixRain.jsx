import React, { useEffect, useRef } from 'react';
import { Box, useTheme } from '@mui/material';

/**
 * Matrix Rain Component
 * Creates a matrix-style falling code effect
 * Uses data science and ML related characters
 * Optimized for performance with reduced density and speed throttling
 */
const MatrixRain = ({ opacity = 0.5, speed = 80 }) => {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const dropsRef = useRef([]);
  const animationRef = useRef(null);

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

    // Matrix characters - data science themed (optimized)
    const chars = '01アイエムエルデータサイエンスニューラルネットワーク学習モデルMLAINNDLΣ∑∫∂∇∆λπθ<>/{}[]';
    const fontSize = 16; // Larger font = fewer columns = better performance
    const columns = canvas.width / fontSize;

    // Initialize drops
    dropsRef.current = Array(Math.floor(columns)).fill(1);

    // Animation loop
    let lastTime = 0;
    const animate = (currentTime) => {
      if (currentTime - lastTime < speed) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      // Semi-transparent background for trail effect
      ctx.fillStyle = `rgba(${theme.palette.mode === 'dark' ? '10, 15, 26' : '240, 244, 248'}, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      dropsRef.current.forEach((y, i) => {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;

        // Color gradient based on position
        const gradient = ctx.createLinearGradient(0, y * fontSize - 100, 0, y * fontSize);

        // Use theme colors
        if (Math.random() > 0.98) {
          // Occasionally use accent color
          gradient.addColorStop(0, 'transparent');
          gradient.addColorStop(1, `${theme.palette.accent?.main || '#00ff88'}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        } else {
          gradient.addColorStop(0, 'transparent');
          gradient.addColorStop(0.5, `${theme.palette.primary.main}${Math.floor(opacity * 128).toString(16).padStart(2, '0')}`);
          gradient.addColorStop(1, `${theme.palette.primary.main}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        }

        ctx.fillStyle = gradient;
        ctx.fillText(text, x, y * fontSize);

        // Random reset
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          dropsRef.current[i] = 0;
        }

        // Increment drop position
        dropsRef.current[i]++;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme, opacity, speed]);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
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

export default MatrixRain;
