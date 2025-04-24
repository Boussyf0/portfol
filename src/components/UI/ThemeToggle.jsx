import React, { useState } from 'react';
import { Box, IconButton, useTheme, alpha } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled } from '@mui/material/styles';

// Custom styled components for the theme toggle
const ToggleWrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 30,
  left: 30,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ToggleButton = styled(IconButton)(({ theme }) => ({
  width: 60,
  height: 60,
  backgroundColor: alpha(theme.palette.background.paper, 0.7),
  backdropFilter: 'blur(10px)',
  border: '3px solid',
  borderColor: theme.palette.primary.main,
  borderRadius: 0,
  boxShadow: '5px 5px 0px rgba(0,0,0,0.2)',
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    transform: 'translateY(-3px)',
    boxShadow: '7px 7px 0px rgba(0,0,0,0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 20,
    height: 20,
    top: -10,
    left: -10,
    backgroundColor: theme.palette.secondary.main,
    transform: 'rotate(45deg)',
    zIndex: -1,
  },
}));

// Framer motion variants for animations
const iconVariants = {
  initial: { scale: 0, rotate: -180, opacity: 0 },
  animate: { 
    scale: 1, 
    rotate: 0, 
    opacity: 1,
    transition: { duration: 0.5, type: 'spring' }
  },
  exit: { 
    scale: 0, 
    rotate: 180, 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const starVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: (i) => ({ 
    scale: 1, 
    opacity: [0, 1, 0.5, 1, 0],
    transition: { 
      delay: i * 0.1, 
      duration: 1.5, 
      repeat: Infinity, 
      repeatDelay: Math.random() * 5
    }
  })
};

const sunRayVariants = {
  initial: { scale: 0.7, opacity: 0.5 },
  animate: (i) => ({ 
    scale: [0.7, 1, 0.7], 
    opacity: [0.5, 1, 0.5],
    transition: { 
      delay: i * 0.05, 
      duration: 2, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

const ThemeToggle = ({ setMode, mode }) => {
  const theme = useTheme();
  
  // Toggle between light and dark mode
  const toggleTheme = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  // Generate star positions for dark mode icon
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 10; i++) {
      stars.push({
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        size: Math.random() * 3 + 1,
        delay: Math.random(),
      });
    }
    return stars;
  };

  // Generate sun rays for light mode icon
  const generateRays = () => {
    const rays = [];
    for (let i = 0; i < 8; i++) {
      rays.push({
        rotation: i * 45,
        delay: i * 0.05,
      });
    }
    return rays;
  };

  const stars = generateStars();
  const rays = generateRays();

  return (
    <ToggleWrapper>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
          <AnimatePresence mode="wait" initial={false}>
            {mode === 'dark' ? (
              // Moon icon with stars
              <Box key="dark-icon" position="relative" width={24} height={24}>
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  <DarkModeIcon fontSize="medium" />
                </motion.div>
                
                {/* Stars around the moon */}
                {stars.map((star, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={starVariants}
                    initial="initial"
                    animate="animate"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: star.size,
                      height: star.size,
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      x: star.x,
                      y: star.y,
                    }}
                  />
                ))}
              </Box>
            ) : (
              // Sun icon with rays
              <Box key="light-icon" position="relative" width={24} height={24}>
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  <LightModeIcon fontSize="medium" />
                </motion.div>
                
                {/* Rays around the sun */}
                {rays.map((ray, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={sunRayVariants}
                    initial="initial"
                    animate="animate"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: 20,
                      height: 2,
                      backgroundColor: theme.palette.secondary.main,
                      transformOrigin: 'left center',
                      x: -10,
                      y: -1,
                      rotate: ray.rotation,
                    }}
                  />
                ))}
              </Box>
            )}
          </AnimatePresence>
        </ToggleButton>
      </motion.div>
      
      {/* Neo-brutal label */}
      <Box
        component={motion.div}
        layout
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 5 }}
        sx={{
          position: 'absolute',
          right: -55,
          top: 0,
          backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#ffffff',
          color: theme.palette.text.primary,
          py: 0.5,
          px: 1,
          fontSize: '0.7rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: 1,
          border: '2px solid',
          borderColor: theme.palette.primary.main,
          boxShadow: '2px 2px 0px rgba(0,0,0,0.2)',
          display: { xs: 'none', md: 'block' },
        }}
      >
        {mode}
      </Box>
    </ToggleWrapper>
  );
};

export default ThemeToggle; 