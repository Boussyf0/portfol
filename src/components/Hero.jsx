import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

  // Typewriter effect
  const [typewriterText] = useTypewriter({
    words: ['Data Scientist', 'ML Engineer', 'AI Developer', 'Tech Enthusiast'],
    loop: true,
    delaySpeed: 2000,
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
      {/* Background Elements */}
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
        {/* Decorative shapes */}
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            initial={{ 
              opacity: 0, 
              x: shape.x + '%', 
              y: shape.y + '%', 
              rotate: shape.rotation 
            }}
            animate={{ 
              opacity: [0, 0.5, 0.3],
              rotate: [shape.rotation, shape.rotation + 10, shape.rotation - 10],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 10 + Math.random() * 10,
              delay: shape.delay,
            }}
            style={{
              position: 'absolute',
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              opacity: 0.3,
              zIndex: -1,
              borderRadius: shape.shape === 1 ? '50%' : shape.shape === 2 ? '0% 50% 50% 50%' : '0%',
              filter: 'blur(2px)',
            }}
          />
        ))}

        {/* Grid overlay for neo-brutal effect */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
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
              {/* Neo-brutal decorative elements */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: -30,
                  left: -20,
                  width: 80,
                  height: 15,
                  background: theme.palette.secondary.main,
                  zIndex: -1,
                }}
                variants={brutalElementVariants}
                whileHover="hover"
              />

              <motion.div
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 100,
                  width: 15,
                  height: 80,
                  background: theme.palette.primary.main,
                  zIndex: -1,
                }}
                variants={brutalElementVariants}
                whileHover="hover"
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
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    lineHeight: 1.1,
                    textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
                    position: 'relative',
                  }}
                >
                  <Box 
                    sx={{ 
                      color: theme.palette.text.primary,
                      display: 'inline',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '0.2em',
                        background: theme.palette.primary.main,
                        left: 0,
                        bottom: '0.1em',
                        zIndex: -1,
                      }
                    }}
                  >
                    Abderrahim
                  </Box>{' '}
                  <Box 
                    component="span" 
                    sx={{ 
                      color: theme.palette.primary.main,
                      textShadow: `2px 2px 0px ${theme.palette.secondary.main}`,
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
                  <Box component="span">I'm a </Box>
                  <Box 
                    component="span" 
                    sx={{ 
                      color: theme.palette.secondary.main,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: '0.3em',
                        zIndex: -1,
                        background: 'rgba(236, 72, 153, 0.3)',
                      }
                    }}
                  >
                    {typewriterText}
                  </Box>
                  <Cursor cursorStyle="_" />
                </Typography>
              </motion.div>

              <motion.div variants={childVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    mb: 4,
                    maxWidth: '600px',
                    position: 'relative',
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    pl: 2,
                    py: 1,
                  }}
                >
                  I build intelligent systems that can understand, learn, and solve complex problems. 
                  Passionate about pushing the boundaries of AI to create meaningful impact.
                </Typography>
              </motion.div>

              <motion.div variants={childVariants} style={{ display: 'flex', gap: '20px' }}>
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
                      boxShadow: '5px 5px 0px rgba(0,0,0,0.2)',
                      border: '3px solid',
                      borderColor: 'primary.dark',
                      transition: 'all 0.2s',
                      transform: 'skew(-3deg)',
                      '&:hover': {
                        transform: 'skew(-3deg) translateY(-5px)',
                        boxShadow: '7px 7px 0px rgba(0,0,0,0.2)',
                      }
                    }}
                  >
                    See My Work
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
                      backgroundColor: 'transparent',
                      border: '3px solid',
                      transition: 'all 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                      }
                    }}
                  >
                    Contact Me
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
            {/* 3D Image Container with Neo-Brutal style */}
            <motion.div
              style={{
                perspective: 800,
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
                {/* Neo-brutal image frame with glitch effect */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '0',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '10px solid',
                    borderColor: 'background.paper',
                    boxShadow: `
                      20px 20px 0px ${theme.palette.primary.main},
                      -20px -20px 0px ${theme.palette.secondary.main}
                    `,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '10%',
                      left: '5%',
                      width: '30%',
                      height: '5px',
                      backgroundColor: theme.palette.primary.main,
                      zIndex: 1,
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '15%',
                      right: '10%',
                      width: '5px',
                      height: '25%',
                      backgroundColor: theme.palette.secondary.main,
                      zIndex: 1,
                    }
                  }}
                >
                  {/* Main image */}
                  <Box
                    component="img"
                    src="/src/assets/IMG_4589.JPG"
                    alt="Abderrahim Boussyf"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      filter: 'grayscale(0.2) contrast(1.1)',
                    }}
                  />
                  
                  {/* Glitch effect layers */}
                  <Box
                    component={motion.div}
                    animate={{
                      x: [0, -5, 5, -2, 0],
                      opacity: [0, 0.5, 0.3, 0.7, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 5,
                      repeatDelay: 3,
                    }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: 'url(/src/assets/IMG_4589.JPG)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top',
                      mixBlendMode: 'color-dodge',
                      filter: 'hue-rotate(90deg) contrast(1.5)',
                      opacity: 0,
                    }}
                  />
                </Box>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 