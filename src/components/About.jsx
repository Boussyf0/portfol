import React, { useRef } from 'react';
import { Box, Container, Typography, Grid, Button, Avatar, Card, CardContent, useTheme, alpha, Stack, Tooltip, Divider } from '@mui/material';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import SectionTitle from './UI/SectionTitle';
import Timeline from './Timeline';

// Icons
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import StorageIcon from '@mui/icons-material/Storage';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BoltIcon from '@mui/icons-material/Bolt';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';

// Import profile image properly
import PROFILE_IMAGE from '/assets/IMG_4589.JPG';

// Constants
const RESUME_PATH = '/assets/CV_Abderrahim_Boussyf_Data.pdf';

const About = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const profileRef = useRef(null);
  const isProfileInView = useInView(profileRef, { once: false, amount: 0.2 });
  
  // Parallax effect for scrolling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.6, 1, 1, 0.6]);

  // Floating shapes
  const shapes = [
    { x: -120, y: -80, size: 60, color: alpha(theme.palette.primary.main, 0.2), delay: 0 },
    { x: 150, y: 100, size: 40, color: alpha(theme.palette.secondary.main, 0.15), delay: 0.5 },
    { x: -180, y: 150, size: 50, color: alpha(theme.palette.primary.light, 0.1), delay: 1 },
    { x: 100, y: -120, size: 30, color: alpha(theme.palette.secondary.light, 0.2), delay: 1.5 },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  // 3D Image Tilt effect
  const handleMouseMove = (e) => {
    if (!profileRef.current) return;
    
    const rect = profileRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    profileRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const handleMouseLeave = () => {
    if (!profileRef.current) return;
    profileRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const focusAreas = [
    { 
      title: 'AI & Machine Learning', 
      icon: <SmartToyIcon sx={{ color: 'primary.main' }} />,
      description: 'I implement AI systems from concept to deployment, with expertise in designing machine learning pipelines and optimizing model performance for production environments.' 
    },
    { 
      title: 'Predictive Analytics', 
      icon: <AutoGraphIcon sx={{ color: 'primary.main' }} />,
      description: 'I develop data-driven solutions to extract insights from complex datasets, using statistical methods and machine learning algorithms to deliver actionable intelligence.' 
    },
    { 
      title: 'Big Data & Cloud', 
      icon: <StorageIcon sx={{ color: 'primary.main' }} />,
      description: 'I architect scalable systems for processing large datasets, utilizing distributed computing frameworks and cloud infrastructure for efficient big data solutions.' 
    },
    { 
      title: 'Software Engineering', 
      icon: <CodeIcon sx={{ color: 'primary.main' }} />,
      description: 'I build robust applications following best practices in software development, from architecture design to code quality and testing methodologies.' 
    },
    { 
      title: 'Vector Database for Embedding Storage and Search', 
      icon: <SearchIcon sx={{ color: 'primary.main' }} />,
      description: 'I developed vector databases to store and retrieve high-dimensional embeddings for fast similarity searches, optimized for semantic search, recommendation systems, and image retrieval.' 
    },
  ];

  const skills = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn", "SQL", "JavaScript", 
    "React", "Node.js", "Docker", "AWS", "GCP", "Git", "MLOps", 
    "Computer Vision", "NLP", "Recommendation Systems"
  ];

  return (
    <Box 
      component="section" 
      id="about" 
      sx={{ 
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
      ref={containerRef}
    >
      {/* Background elements */}
      <Box 
        sx={{ 
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: theme => theme.palette.mode === 'dark' 
            ? 'radial-gradient(circle at 15% 50%, rgba(67, 97, 238, 0.15), transparent 25%), radial-gradient(circle at 85% 30%, rgba(247, 37, 133, 0.1), transparent 25%)'
            : 'radial-gradient(circle at 15% 50%, rgba(67, 97, 238, 0.1), transparent 25%), radial-gradient(circle at 85% 30%, rgba(247, 37, 133, 0.07), transparent 25%)',
          zIndex: -1,
        }}
      />
      
      {/* Floating animated shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: [shape.x - 10, shape.x + 10, shape.x - 10],
            y: [shape.y - 10, shape.y + 10, shape.y - 10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            delay: shape.delay,
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: shape.size,
            height: shape.size,
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: shape.color,
            filter: 'blur(8px)',
            zIndex: 0,
            left: '50%',
            top: '50%',
          }}
        />
      ))}
      
      <Container maxWidth="lg">
        <SectionTitle title="About Me" />
        
        <Grid 
          container 
          spacing={6} 
          alignItems="center"
          component={motion.div}
          style={{ opacity, y }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Profile Image Column */}
          <Grid 
            item 
            xs={12} 
            md={5} 
            component={motion.div} 
            variants={itemVariants}
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: { xs: '280px', sm: '340px', md: '380px' },
                aspectRatio: '3/4',
                perspective: '1000px'
              }}
            >
              <motion.div
                ref={profileRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isProfileInView ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" } 
                } : {}}
                style={{ 
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Decorative elements behind the image */}
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: -15,
                    left: -15,
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    border: '2px solid',
                    borderColor: theme.palette.primary.main,
                    zIndex: 0,
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(-10px)',
                  }}
                />
                <Box 
                  sx={{ 
                    position: 'absolute',
                    bottom: -15,
                    right: -15,
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    background: theme.customGradients.primary,
                    opacity: 0.7,
                    zIndex: 0,
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(-20px)',
                  }}
                />
                
                {/* Pulse effect */}
                <motion.div
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  animate={{ 
                    opacity: [0.2, 0.5, 0.2], 
                    scale: [0.98, 1.03, 0.98],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  style={{ 
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    background: theme.customGradients.primaryToSecondary,
                    filter: 'blur(20px)',
                    zIndex: -1,
                  }}
                />
                
                {/* Profile image */}
                <Box
                  component={motion.img}
                  src={PROFILE_IMAGE}
                  alt="Profile"
                  loading="lazy"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '16px',
                    border: '4px solid white',
                    boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)',
                    zIndex: 1,
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(0px)',
                  }}
                />
                
                {/* 3D depth effects */}
                <Box 
                  sx={{ 
                    position: 'absolute',
                    top: '5%',
                    right: '-8%',
                    width: { xs: '50px', sm: '60px' },
                    height: { xs: '50px', sm: '60px' },
                    borderRadius: '50%',
                    background: theme.customGradients.secondary,
                    zIndex: 2,
                    transform: 'translateZ(20px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <SmartToyIcon sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? 'common.white' : 'primary.main',
                    fontSize: { xs: 25, sm: 30 } 
                  }} />
                </Box>
                
                <Box 
                  sx={{ 
                    position: 'absolute',
                    bottom: '10%',
                    left: '-8%',
                    width: { xs: '40px', sm: '50px' },
                    height: { xs: '40px', sm: '50px' },
                    borderRadius: '50%',
                    background: theme.customGradients.primary,
                    zIndex: 2,
                    transform: 'translateZ(15px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CodeIcon sx={{ 
                    color: theme => theme.palette.mode === 'dark' ? 'common.white' : 'primary.main',
                    fontSize: { xs: 20, sm: 25 } 
                  }} />
                </Box>
              </motion.div>
            </Box>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isProfileInView ? { 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.3, duration: 0.5 } 
              } : {}}
            >
              <Button 
                component="a"
                href={RESUME_PATH}
                download
                variant="contained" 
                color="primary" 
                sx={{ 
                  mt: 4,
                  px: 4,
                  py: 1.5,
                  borderRadius: 8,
                  fontSize: '1rem',
                  color: 'primary.contrastText',
                  bgcolor: 'primary.main',
                  boxShadow: theme => `0 10px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                  textTransform: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    transform: 'translateY(-3px)',
                    boxShadow: theme => `0 15px 30px ${alpha(theme.palette.primary.main, 0.4)}`,
                  },
                }}
              >
                Download Resume
              </Button>
            </motion.div>
          </Grid>
          
          {/* About Text Column */}
          <Grid item xs={12} md={7} component={motion.div} variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                Computer Engineering Student
              </Typography>
              
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  mb: 2, 
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'text.primary',
                }}
              >
                I'm a 4th-year Computer Engineering student at EMSI-MARRAKECH with a passion for AI and software development. Throughout my academic journey, I've acquired a solid foundation in programming, algorithms, and system design.
              </Typography>
              
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  mb: 2, 
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'text.primary',
                }}
              >
                My expertise lies in artificial intelligence and machine learning, where I've developed several projects including predictive models, computer vision applications, and natural language processing systems. I'm proficient in Python and have experience with various ML frameworks like TensorFlow and PyTorch.
              </Typography>

              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  mb: 3, 
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'text.primary',
                }}
              >
                I'm continuously expanding my skillset through self-directed learning and practical projects. I believe in creating technology that solves real-world problems and enhances people's lives.
              </Typography>
              
              {/* Skills tags */}
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>Key Skills</Typography>
              <Box sx={{ mb: 4 }}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap gap={1}>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Tooltip title={`${skill} expertise`} arrow>
                        <Box
                          component="span"
                          sx={{
                            display: 'inline-block',
                            px: 2,
                            py: 1,
                            borderRadius: '12px',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            background: theme => alpha(theme.palette.primary.main, 
                              theme.palette.mode === 'dark' ? 0.2 : 0.1),
                            color: 'primary.main',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            border: '1px solid',
                            borderColor: theme => alpha(theme.palette.primary.main, 
                              theme.palette.mode === 'dark' ? 0.3 : 0.2),
                            '&:hover': {
                              background: theme => alpha(theme.palette.primary.main, 
                                theme.palette.mode === 'dark' ? 0.3 : 0.2),
                              transform: 'translateY(-3px)',
                              boxShadow: theme => `0 4px 8px ${alpha(theme.palette.primary.main, 0.2)}`,
                            }
                          }}
                        >
                          {skill}
                        </Box>
                      </Tooltip>
                    </motion.div>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        
        {/* Timeline Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          sx={{ 
            mt: 12, 
            position: 'relative',
          }}
        >
          <Divider 
            sx={{ 
              my: 6,
              '&::before, &::after': {
                borderColor: theme => alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.4 : 0.3),
              },
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '10%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 20,
                height: 20,
                backgroundColor: theme.palette.primary.main,
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                right: '10%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 20,
                height: 20,
                backgroundColor: theme.palette.secondary.main,
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              }
            }}
          >
            <Box 
              component="span" 
              sx={{ 
                px: 3,
                py: 0.75,
                color: 'text.primary',
                fontWeight: 600,
                letterSpacing: 1,
                backgroundColor: theme => alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.2 : 0.1),
                border: '2px solid',
                borderColor: 'primary.main',
                transform: 'rotate(-2deg)',
                display: 'inline-block',
                boxShadow: theme => `3px 3px 0 ${alpha(theme.palette.common.black, theme.palette.mode === 'dark' ? 0.3 : 0.2)}`,
              }}
            >
              TIMELINE
            </Box>
          </Divider>
          
          <Timeline />
        </Box>
        
        {/* Focus Areas Section */}
        <Box sx={{ mt: 10 }}>
          <Typography 
            variant="h5" 
            align="center" 
            gutterBottom 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{ 
              fontWeight: 600,
              mb: 6,
              color: 'text.primary',
            }}
          >
            Areas of Focus
          </Typography>
          
          <Grid 
            container 
            spacing={3}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {focusAreas.map((area, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                key={index}
                component={motion.div}
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    sx={{
                      borderRadius: 4,
                      bgcolor: 'background.paper',
                      color: 'text.primary',
                      boxShadow: theme => `0 10px 20px ${alpha(theme.palette.common.black, theme.palette.mode === 'dark' ? 0.2 : 0.1)}`,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid',
                      borderColor: theme => theme.palette.mode === 'dark' 
                        ? alpha(theme.palette.common.white, 0.1)
                        : alpha(theme.palette.common.black, 0.05),
                      height: '100%',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: theme => `linear-gradient(135deg, ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.15 : 0.1)} 0%, transparent 100%)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: 0,
                      },
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: theme => `0 15px 30px ${alpha(theme.palette.common.black, theme.palette.mode === 'dark' ? 0.2 : 0.1)}`,
                        borderColor: theme => alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.4 : 0.3),
                        '&::before': {
                          opacity: 1,
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3, position: 'relative', zIndex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box 
                          sx={{ 
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 48,
                            height: 48,
                            borderRadius: '12px',
                            background: theme => alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.2 : 0.1),
                            border: '1px solid',
                            borderColor: theme => alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.3 : 0.2),
                            boxShadow: theme => `0 4px 8px ${alpha(theme.palette.primary.main, 0.1)}`,
                          }}
                        >
                          {area.icon}
                        </Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600,
                            color: 'text.primary',
                          }}
                        >
                          {area.title}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          opacity: theme => theme.palette.mode === 'dark' ? 0.9 : 0.8,
                        }}
                      >
                        {area.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 