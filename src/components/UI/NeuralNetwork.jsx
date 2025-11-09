import React, { useEffect, useRef } from 'react';
import { Box, useTheme } from '@mui/material';

/**
 * Neural Network Background Component
 * Creates an animated neural network visualization with nodes and connections
 * Perfect for AI/ML themed portfolio
 * Optimized for performance with reduced node count and throttled interactions
 */
const NeuralNetwork = ({ nodeCount = 25, opacity = 0.3, interactive = false }) => {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
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

    // Initialize nodes
    class Node {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5
          ? theme.palette.primary.main
          : theme.palette.secondary.main;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create nodes
    nodesRef.current = Array.from({ length: nodeCount }, () => new Node());

    // Mouse interaction
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation loop - optimized with frame skipping
    const animate = () => {
      frameCount.current++;

      // Update every frame but only draw connections every 2 frames for performance
      if (frameCount.current % 2 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw nodes
        nodesRef.current.forEach((node) => {
          node.update();
          node.draw();
        });

        // Draw connections - optimized with limited range
        const maxDistance = 120;
        for (let i = 0; i < nodesRef.current.length; i++) {
          // Only check nearby nodes for connections (optimize loop)
          for (let j = i + 1; j < Math.min(i + 10, nodesRef.current.length); j++) {
            const dx = nodesRef.current[i].x - nodesRef.current[j].x;
            const dy = nodesRef.current[i].y - nodesRef.current[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              const opacityValue = (1 - distance / maxDistance) * opacity;
              ctx.beginPath();
              ctx.strokeStyle = `${theme.palette.primary.main}${Math.floor(opacityValue * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(nodesRef.current[i].x, nodesRef.current[i].y);
              ctx.lineTo(nodesRef.current[j].x, nodesRef.current[j].y);
              ctx.stroke();
            }
          }

          // Connect to mouse if interactive (throttled)
          if (interactive && frameCount.current % 3 === 0) {
            const dx = nodesRef.current[i].x - mouseRef.current.x;
            const dy = nodesRef.current[i].y - mouseRef.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const opacityValue = (1 - distance / 150) * opacity * 1.5;
              ctx.beginPath();
              ctx.strokeStyle = `${theme.palette.secondary.main}${Math.floor(opacityValue * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 1;
              ctx.moveTo(nodesRef.current[i].x, nodesRef.current[i].y);
              ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
              ctx.stroke();
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme, nodeCount, opacity, interactive]);

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

export default NeuralNetwork;
