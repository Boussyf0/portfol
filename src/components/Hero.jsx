import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {
  const theme = useTheme();
  const particlesInit = async (engine) => { await loadFull(engine); };
  const [text] = useTypewriter({ 
    words: ['AI Engineer', 'Machine Learning Developer', 'Software Engineer', 'Data Scientist'], 
    loop: 0, 
    typeSpeed: 70, 
    deleteSpeed: 50 
  });

  return (
    <Box 
      component={motion.div} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      sx={{ 
        position: 'relative', 
        width: '100%', 
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Glowing orbs */}
      <Box 
        component={motion.div}
        animate={{ 
          y: [20, 0, 20],
          rotate: [0, 5, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        sx={{ 
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: { xs: 100, sm: 150, md: 200 },
          height: { xs: 100, sm: 150, md: 200 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0) 70%)',
          filter: 'blur(40px)',
          opacity: 0.8,
          zIndex: 0,
        }}
      />
      
      <Box 
        component={motion.div}
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        sx={{ 
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: { xs: 120, sm: 180, md: 250 },
          height: { xs: 120, sm: 180, md: 250 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0) 70%)',
          filter: 'blur(40px)',
          opacity: 0.7,
          zIndex: 0,
        }}
      />

      {/* Glassmorphism effect layer */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          borderRadius: '30px',
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.3) 0%, rgba(15, 23, 42, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          zIndex: 0,
          display: { xs: 'none', md: 'block' },
        }}
      />

      <Particles 
        id="tsparticles" 
        init={particlesInit} 
        options={{
          fpsLimit: 60,
          particles: {
            color: { value: theme.palette.primary.main },
            links: { 
              enable: true, 
              color: 'rgba(99, 102, 241, 0.3)',
              opacity: 0.5,
              width: 1,
              distance: 150,
            },
            move: { 
              enable: true,
              speed: 0.8,
              direction: "none",
              random: false,
              outMode: "out",
            },
            number: { 
              density: { enable: true, area: 1200 },
              value: 60
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          interactivity: { 
            events: { 
              onHover: { 
                enable: true, 
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 20
                }
              },
              onClick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.8
                }
              },
              push: {
                quantity: 4
              }
            }
          },
          detectRetina: true,
          background: {
            color: {
              value: "transparent"
            }
          }
        }} 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          top: 0, 
          left: 0,
          zIndex: 1 
        }} 
      />
      
      <Box 
        sx={{ 
          position: 'relative', 
          zIndex: 2, 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          textAlign: 'center', 
          px: 2 
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 800,
                background: theme.customGradients.primaryToSecondary,
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                textShadow: '0 0 40px rgba(99, 102, 241, 0.2)'
              }}
            >
              {text}<Cursor cursorStyle="_" />
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                color: theme.palette.text.secondary, 
                mb: 5,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.5
              }}
            >
              Building intelligent systems that solve real-world problems
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center' }}
          >
            <Button 
              variant="contained" 
              color="primary" 
              href="#projects"
              size="large"
              sx={{ 
                px: 4, 
                py: 1.5,
                background: theme.customGradients.primary,
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)'
              }}
            >
              Explore Projects
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              href="https://github.com/Boussyf0" 
              target="_blank"
              startIcon={<GitHubIcon />}
              size="large"
              sx={{
                borderColor: 'rgba(99, 102, 241, 0.5)',
                backdropFilter: 'blur(5px)',
                background: 'rgba(99, 102, 241, 0.05)',
                borderRadius: '12px',
                borderWidth: '2px',
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  background: 'rgba(99, 102, 241, 0.1)',
                  borderWidth: '2px'
                }
              }}
            >
              GitHub
            </Button>
          </motion.div>
        </Container>
      </Box>
      
      {/* Scroll down indicator */}
      <Box 
        component={motion.div}
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: "reverse",
        }}
        sx={{ 
          position: 'absolute', 
          bottom: 30, 
          left: '50%', 
          transform: 'translateX(-50%)',
          zIndex: 2,
          textAlign: 'center',
          color: theme.palette.text.secondary,
        }}
      >
        <Typography variant="body2" sx={{ mb: 1, opacity: 0.7 }}>
          Scroll Down
        </Typography>
        <ArrowDownwardIcon color="primary" />
      </Box>
    </Box>
  );
};

export default Hero; 