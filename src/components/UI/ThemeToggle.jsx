import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// Variants for animations
const iconVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

const rayVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: (i) => ({ 
    scale: 1, 
    opacity: 0.5, 
    transition: { 
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

const ThemeToggle = ({ setMode, mode }) => {
  const theme = useTheme();
  
  const handleToggle = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };

  // Generate sun rays
  const rays = Array.from({ length: 8 }).map((_, i) => ({
    rotation: i * 45,
    delay: i * 0.05
  }));

  return (
    <Box sx={{ 
      position: 'fixed',
      bottom: '30px',
      left: '30px',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <IconButton
          onClick={handleToggle}
          aria-label="Toggle theme"
          sx={{
            width: 60,
            height: 60,
            border: '3px solid',
            borderColor: 'primary.main',
            borderRadius: 0,
            bgcolor: theme => theme.palette.mode === 'dark' 
              ? 'rgba(30, 30, 30, 0.7)' 
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            boxShadow: '5px 5px 0px rgba(0,0,0,0.2)',
            color: 'text.primary',
            position: 'relative',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: 'rgba(67, 97, 238, 0.1)',
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
            }
          }}
        >
          <Box sx={{ position: 'relative', width: 24, height: 24 }}>
            <AnimatePresence mode="wait" initial={false}>
              {mode === 'dark' ? (
                <motion.div
                  key="dark"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 1,
                    transform: 'none'
                  }}
                >
                  <DarkModeIcon />
                </motion.div>
              ) : (
                <motion.div
                  key="light"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 1,
                    transform: 'none'
                  }}
                >
                  <LightModeIcon />
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Sun rays (only visible in light mode) */}
            {mode === 'light' && rays.map((ray, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={rayVariants}
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
                  opacity: 0.5,
                  transform: `translateX(-10px) translateY(-1px) scale(0.7) rotate(${ray.rotation}deg)`,
                }}
              />
            ))}
          </Box>
        </IconButton>
      </motion.div>
      
      {/* Theme mode label */}
      <Box
        component={motion.div}
        layout
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 5 }}
        sx={{
          position: 'absolute',
          right: -55,
          top: 0,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          pt: 0.5,
          pb: 0.5,
          pl: 1,
          pr: 1,
          fontSize: '0.7rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: 1,
          border: '2px solid',
          borderColor: 'primary.main',
          boxShadow: '2px 2px 0px rgba(0,0,0,0.2)',
          display: { xs: 'none', md: 'block' }
        }}
      >
        {mode}
      </Box>
    </Box>
  );
};

export default ThemeToggle; 