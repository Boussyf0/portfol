import React, { useEffect, useState } from 'react';
import { Box, LinearProgress, useTheme } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        height: '4px',
        background: 'transparent'
      }}
    >
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          height: '100%',
          background: `linear-gradient(90deg, 
            ${theme.palette.primary.main}, 
            ${theme.palette.secondary.main}
          )`,
          boxShadow: `0 0 10px ${theme.palette.primary.main}`,
        }}
      />
    </Box>
  );
};

export default ScrollProgress;