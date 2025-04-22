import React from 'react';
import { Box, Container, Typography, Grid, Button, Avatar, Card, CardContent, useTheme, alpha, List, ListItem, ListItemText, ListItemIcon, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SectionTitle from './UI/SectionTitle';

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

// Import profile image properly
import profileImageSrc from '../assets/IMG_4589.JPG';
const resumePDF = 'src/assets/CV_Abderrahim_Boussyf_Data.pdf';

const About = () => {
  const theme = useTheme();
  
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

  const focusAreas = [
    { 
      title: 'AI & Machine Learning', 
      icon: <SmartToyIcon color="primary" />,
      description: 'I implement AI systems from concept to deployment, with expertise in designing machine learning pipelines and optimizing model performance for production environments.' 
    },
    { 
      title: 'Predictive Analytics', 
      icon: <AutoGraphIcon color="primary" />,
      description: 'I develop data-driven solutions to extract insights from complex datasets, using statistical methods and machine learning algorithms to deliver actionable intelligence.' 
    },
    { 
      title: 'Big Data & Cloud', 
      icon: <StorageIcon color="primary" />,
      description: 'I architect scalable systems for processing large datasets, utilizing distributed computing frameworks and cloud infrastructure for efficient big data solutions.' 
    },
    { 
      title: 'Software Engineering', 
      icon: <CodeIcon color="primary" />,
      description: 'I build robust applications following best practices in software development, from architecture design to code quality and testing methodologies.' 
    },
    { 
      title: 'Vector Database for Embedding Storage and Search', 
      icon: <SearchIcon color="primary" />,
      description: 'I developed vector databases to store and retrieve high-dimensional embeddings for fast similarity searches, optimized for semantic search, recommendation systems, and image retrieval.' 
    },
  ];

  return (
    <Box 
      component="section" 
      id="about" 
      sx={{ 
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background elements */}
      <Box 
        sx={{ 
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: 'radial-gradient(circle at 15% 50%, rgba(67, 97, 238, 0.1), transparent 25%), radial-gradient(circle at 85% 30%, rgba(247, 37, 133, 0.07), transparent 25%)',
          zIndex: -1,
        }}
      />
      
      <Container maxWidth="lg">
        <SectionTitle title="About Me" />
        
        <Grid 
          container 
          spacing={6} 
          alignItems="center"
          component={motion.div} 
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
                width: { xs: 280, sm: 340, md: 380 },
                height: { xs: 380, sm: 460, md: 520 },
                mb: 2,
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
                }}
              />
              
              {/* Profile image */}
              <Avatar 
                src={profileImageSrc} 
                alt="Abderrahim Boussyf" 
                variant="rounded"
                sx={{ 
                  width: '100%', 
                  height: '100%',
                  borderRadius: '16px',
                  zIndex: 1,
                  position: 'relative',
                  border: '4px solid white',
                  boxShadow: '0 20px 30px rgba(0, 0, 0, 0.1)',
                  '& .MuiAvatar-img': {
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }
                }}
              />
            </Box>
            
            <Button 
              variant="contained" 
              color="primary" 
              href={resumePDF}
              target="_blank"
              sx={{ 
                mt: 4,
                px: 4,
                py: 1.5,
                borderRadius: 8,
                fontSize: '1rem',
                boxShadow: '0 10px 20px rgba(67, 97, 238, 0.3)',
                textTransform: 'none',
              }}
            >
              Download Resume
            </Button>
          </Grid>
          
          {/* About Text Column */}
          <Grid item xs={12} md={7} component={motion.div} variants={itemVariants}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                background: theme.customGradients.primary,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
                color: theme.palette.text.primary,
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
                color: theme.palette.text.primary,
              }}
            >
              My expertise lies in artificial intelligence and machine learning, where I've developed several projects including predictive models, computer vision applications, and natural language processing systems. I'm proficient in Python and have experience with various ML frameworks like TensorFlow and PyTorch.
            </Typography>

            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                mb: 4, 
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: theme.palette.text.primary,
              }}
            >
              I'm continuously expanding my skillset through self-directed learning and practical projects. I believe in creating technology that solves real-world problems and enhances people's lives.
            </Typography>
          </Grid>
        </Grid>
        
        {/* Focus Areas Section */}
        <Box sx={{ mt: 8 }}>
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
                <Card 
                  sx={{
                    borderRadius: 4,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.05)',
                    background: alpha(theme.palette.background.paper, 0.7),
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
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
                          background: 'rgba(67, 97, 238, 0.1)',
                        }}
                      >
                        {area.icon}
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 600,
                          color: theme.palette.primary.dark,
                        }}
                      >
                        {area.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {area.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 