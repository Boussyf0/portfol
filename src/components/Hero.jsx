import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, useTheme, alpha } from '@mui/material';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import NeuralNetwork from './UI/NeuralNetwork';
import DataParticles from './UI/DataParticles';

// Use dynamic base URL for assets
const PROFILE_IMAGE = `${import.meta.env.BASE_URL}assets/IMG_4589.JPG`;

const Hero = () => {
  const theme = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animations for smoother mouse follow
  const springConfig = { damping: 15, stiffness: 150 };
  const followX = useSpring(mouseX, springConfig);
  const followY = useSpring(mouseY, springConfig);
  
  // Rotate based on mouse position
  const rotateX = useTransform(followY, [-300, 300], [10, -10]);
  const rotateY = useTransform(followX, [-300, 300], [-10, 10]);

  // Handle mouse move for the entire hero section
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  // Typewriter effect - AI/ML focused
  const [typewriterText] = useTypewriter({
    words: ['Data Scientist', 'ML Engineer', 'AI Developer', 'Deep Learning Specialist', 'MLOps Engineer'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 60,
  });

  // Generate random shape positions
  const generateShapes = (count) => {
    const shapes = [];
    for (let i = 0; i < count; i++) {
      shapes.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 10 + Math.random() * 40,
        rotation: Math.random() * 360,
        shape: Math.floor(Math.random() * 3), // 0: square, 1: circle, 2: triangle
        color: i % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
        delay: i * 0.1,
      });
    }
    return shapes;
  };

  const shapes = generateShapes(8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
      },
    },
  };

  // Neo-brutal elements animations
  const brutalElementVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -1, 1, -1, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 12, md: 8 },
        pb: { xs: 8, md: 8 },
      }}
      onMouseMove={handleMouseMove}
    >
      {/* AI/ML Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        {/* Neural Network Animation - Optimized */}
        <NeuralNetwork nodeCount={20} opacity={0.35} interactive={false} />

        {/* Data Particles - Optimized */}
        <DataParticles particleCount={25} speed={0.3} />

        {/* Gradient Orbs */}
        <Box
          sx={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 70%)`,
            top: '-250px',
            right: '-100px',
            filter: 'blur(60px)',
            animation: 'float 8s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translate(0, 0)' },
              '50%': { transform: 'translate(-30px, 30px)' },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.12)} 0%, transparent 70%)`,
            bottom: '-200px',
            left: '-100px',
            filter: 'blur(60px)',
            animation: 'float2 10s ease-in-out infinite',
            '@keyframes float2': {
              '0%, 100%': { transform: 'translate(0, 0)' },
              '50%': { transform: 'translate(30px, -30px)' },
            },
          }}
        />

        {/* Tech Grid Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              linear-gradient(to right, ${alpha(theme.palette.primary.main, 0.03)} 1px, transparent 1px),
              linear-gradient(to bottom, ${alpha(theme.palette.primary.main, 0.03)} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.6,
          }}
        />
      </Box>

      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            {/* Text Content */}
            <Box sx={{ position: 'relative' }}>
              {/* AI/ML themed decorative elements */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: -30,
                  left: -20,
                  width: 100,
                  height: 5,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  boxShadow: `0 0 20px ${alpha(theme.palette.primary.main, 0.5)}`,
                  zIndex: -1,
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    `0 0 20px ${alpha(theme.palette.primary.main, 0.5)}`,
                    `0 0 30px ${alpha(theme.palette.primary.main, 0.8)}`,
                    `0 0 20px ${alpha(theme.palette.primary.main, 0.5)}`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 100,
                  width: 5,
                  height: 100,
                  background: `linear-gradient(180deg, ${theme.palette.secondary.main}, ${theme.palette.accent?.main || '#00ff88'})`,
                  boxShadow: `0 0 20px ${alpha(theme.palette.secondary.main, 0.5)}`,
                  zIndex: -1,
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  boxShadow: [
                    `0 0 20px ${alpha(theme.palette.secondary.main, 0.5)}`,
                    `0 0 30px ${alpha(theme.palette.secondary.main, 0.8)}`,
                    `0 0 20px ${alpha(theme.palette.secondary.main, 0.5)}`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />

              <motion.div
                variants={childVariants}
                className="neo-brutal-text"
              >
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline',
                      position: 'relative',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: `drop-shadow(0 0 20px ${alpha(theme.palette.primary.main, 0.3)})`,
                    }}
                  >
                    Abderrahim
                  </Box>{' '}
                  <Box
                    component="span"
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.accent?.main || '#00ff88'})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: `drop-shadow(0 0 20px ${alpha(theme.palette.secondary.main, 0.3)})`,
                    }}
                  >
                    Boussyf
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={childVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  <Box component="span" sx={{ color: theme.palette.text.primary }}>I'm a </Box>
                  <Box
                    component="span"
                    sx={{
                      position: 'relative',
                      background: theme.customGradients.neural,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 700,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: '0.15em',
                        zIndex: -1,
                        background: `linear-gradient(90deg, ${alpha(theme.palette.primary.main, 0.3)}, ${alpha(theme.palette.secondary.main, 0.3)})`,
                        filter: `blur(4px)`,
                      }
                    }}
                  >
                    {typewriterText}
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      color: theme.palette.primary.main,
                      animation: 'blink 1s step-end infinite',
                      '@keyframes blink': {
                        '50%': { opacity: 0 },
                      },
                    }}
                  >
                    |
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={childVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    mb: 4,
                    maxWidth: '650px',
                    position: 'relative',
                    pl: 3,
                    py: 2,
                    color: theme.palette.text.secondary,
                    lineHeight: 1.7,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: theme.customGradients.neural,
                      borderRadius: '2px',
                      boxShadow: `0 0 10px ${alpha(theme.palette.primary.main, 0.5)}`,
                    },
                  }}
                >
                  Building intelligent systems that <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>transform data into insights</Box>,
                  {' '}<Box component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 600 }}>automate complex workflows</Box>, and
                  {' '}<Box component="span" sx={{ color: theme.palette.accent?.main || '#00ff88', fontWeight: 600 }}>drive innovation</Box> through AI & Machine Learning.
                </Typography>
              </motion.div>

              <motion.div variants={childVariants} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="#projects"
                    sx={{
                      py: 1.5,
                      px: 4,
                      fontSize: '1rem',
                      position: 'relative',
                      overflow: 'hidden',
                      fontWeight: 600,
                      borderRadius: 3,
                      background: theme.customGradients.primary,
                      border: `2px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                      boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}, inset 0 0 20px ${alpha(theme.palette.primary.main, 0.1)}`,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.common.white, 0.3)}, transparent)`,
                        transition: 'left 0.5s',
                      },
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.5)}, inset 0 0 30px ${alpha(theme.palette.primary.main, 0.2)}`,
                        background: theme.customGradients.secondary,
                        '&::before': {
                          left: '100%',
                        }
                      }
                    }}
                  >
                    Explore Projects
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIcon />}
                    href="#contact"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      fontSize: '1rem',
                      position: 'relative',
                      fontWeight: 600,
                      borderRadius: 3,
                      backgroundColor: 'transparent',
                      border: `2px solid ${theme.palette.secondary.main}`,
                      color: theme.palette.secondary.main,
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: `0 4px 16px ${alpha(theme.palette.secondary.main, 0.2)}`,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                        borderColor: theme.palette.secondary.light,
                        boxShadow: `0 0 30px ${alpha(theme.palette.secondary.main, 0.5)}`,
                        color: theme.palette.secondary.light,
                      }
                    }}
                  >
                    Let's Connect
                  </Button>
                </motion.div>
              </motion.div>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            order={{ xs: 1, md: 2 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* AI/ML themed profile image container */}
            <motion.div
              style={{
                perspective: 1000,
                position: 'relative',
                width: '100%',
                maxWidth: 450,
                height: 450,
              }}
              variants={childVariants}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: '100%',
                  rotateX,
                  rotateY,
                  position: 'relative',
                }}
              >
                {/* AI/ML themed image frame */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: `3px solid`,
                    borderColor: 'transparent',
                    background: `
                      linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}) padding-box,
                      ${theme.customGradients.neural} border-box
                    `,
                    boxShadow: `
                      0 20px 60px ${alpha(theme.palette.primary.main, 0.3)},
                      0 0 0 1px ${alpha(theme.palette.primary.main, 0.1)},
                      inset 0 0 40px ${alpha(theme.palette.primary.main, 0.05)}
                    `,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '100%',
                      background: theme.customGradients.neural,
                      opacity: 0.1,
                      zIndex: 1,
                      mixBlendMode: 'overlay',
                    },
                  }}
                >
                  {/* Main image - Optimized loading */}
                  <Box
                    component="img"
                    src={PROFILE_IMAGE}
                    alt="Abderrahim Boussyf - AI/ML Engineer"
                    loading="eager"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      filter: 'brightness(1.05) contrast(1.05)',
                    }}
                  />

                  {/* Glitch effect layers - AI themed */}
                  <Box
                    component={motion.div}
                    animate={{
                      x: [0, -3, 3, -1, 0],
                      opacity: [0, 0.4, 0.2, 0.5, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 6,
                      repeatDelay: 4,
                    }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${PROFILE_IMAGE})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top',
                      mixBlendMode: 'screen',
                      filter: `hue-rotate(180deg)`,
                      opacity: 0,
                    }}
                  />

                  {/* Scan line effect - Optimized */}
                  <Box
                    component={motion.div}
                    animate={{
                      top: ['0%', '100%'],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: 'linear',
                    }}
                    sx={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
                      boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                      opacity: 0.5,
                      zIndex: 2,
                      willChange: 'top', // Optimize for transform
                    }}
                  />
                </Box>

                {/* Floating tech badges */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: -10,
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: alpha(theme.palette.primary.main, 0.9),
                    backdropFilter: 'blur(10px)',
                    boxShadow: `0 4px 16px ${alpha(theme.palette.primary.main, 0.4)}`,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: theme.palette.mode === 'dark' ? '#000' : '#fff',
                    border: `1px solid ${alpha(theme.palette.primary.light, 0.5)}`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                  }}
                >
                  AI/ML
                </motion.div>

                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: 30,
                    left: -10,
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: alpha(theme.palette.secondary.main, 0.9),
                    backdropFilter: 'blur(10px)',
                    boxShadow: `0 4px 16px ${alpha(theme.palette.secondary.main, 0.4)}`,
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#fff',
                    border: `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
                  }}
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'easeInOut',
                    delay: 1.5,
                  }}
                >
                  Data Science
                </motion.div>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 