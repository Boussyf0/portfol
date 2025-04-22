import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, Chip, Divider } from '@mui/material';
import { SKILL_CATEGORIES } from '../data/constants';
import SectionTitle from './UI/SectionTitle';
import { motion } from 'framer-motion';

// Skill icons mapping
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import WebIcon from '@mui/icons-material/Web';
import ScienceIcon from '@mui/icons-material/Science';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CloudIcon from '@mui/icons-material/Cloud';
import DatabaseIcon from '@mui/icons-material/Storage';
import AgilityIcon from '@mui/icons-material/Psychology';

const getCategoryIcon = (category) => {
  const iconMap = {
    'Programming Languages': <CodeIcon fontSize="large" />,
    'AI & Machine Learning': <SmartToyIcon fontSize="large" />,
    'Big Data & Cloud': <CloudIcon fontSize="large" />,
    'Web & Tools': <WebIcon fontSize="large" />,
    'Databases': <DatabaseIcon fontSize="large" />,
    'Methodologies': <AgilityIcon fontSize="large" />,
  };
  
  return iconMap[category] || <ScienceIcon fontSize="large" />;
};

const Skills = () => {
  const theme = useTheme();
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <Box 
      component="section" 
      id="skills" 
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundImage: 'radial-gradient(circle at 90% 30%, rgba(67, 97, 238, 0.07) 0%, transparent 60%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative shapes */}
      <Box 
        component="div"
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: theme.customGradients.primary,
          opacity: 0.03,
          top: -100,
          left: -100,
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg">
        <SectionTitle title="Technical Skills" />
        
        <Typography 
          variant="h6" 
          component="p" 
          align="center" 
          gutterBottom 
          sx={{ 
            mb: 6, 
            maxWidth: '800px', 
            mx: 'auto',
            color: theme.palette.text.secondary
          }}
        >
          With expertise across multiple domains, I combine programming prowess with AI, data science, and software engineering to create innovative solutions.
        </Typography>
        
        <Grid 
          container 
          spacing={4} 
          component={motion.div}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              key={category.category}
              component={motion.div}
              variants={item}
            >
              <Card 
                sx={{ 
                  p: 3,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  borderRadius: 4,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box 
                    sx={{ 
                      mr: 2, 
                      color: theme.palette.primary.main,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      background: 'rgba(67, 97, 238, 0.1)',
                    }}
                  >
                    {getCategoryIcon(category.category)}
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600,
                      background: theme.customGradients.primary,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {category.category}
                  </Typography>
                </Box>
                
                <Divider sx={{ mb: 2, mt: 1 }} />
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        bgcolor: 'rgba(67, 97, 238, 0.05)',
                        border: '1px solid rgba(67, 97, 238, 0.15)',
                        fontWeight: 500,
                        '&:hover': {
                          bgcolor: 'rgba(67, 97, 238, 0.1)',
                        },
                        mb: 1,
                        px: 0.5,
                      }}
                    />
                  ))}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 