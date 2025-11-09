import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, useTheme, Chip, Divider, alpha } from '@mui/material';
import { SKILL_CATEGORIES } from '../data/constants';
import SectionTitle from './UI/SectionTitle';
import { motion } from 'framer-motion';
import DataParticles from './UI/DataParticles';
import VisibilityWrapper from './UI/VisibilityWrapper';

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
    'Data Analysis Tools': <AutoGraphIcon fontSize="large" />,
    'Vector Databases': <DataObjectIcon fontSize="large" />,
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
        position: 'relative',
        overflow: 'hidden',
        background: `radial-gradient(circle at 20% 50%, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 50%),
                     radial-gradient(circle at 80% 80%, ${alpha(theme.palette.secondary.main, 0.05)} 0%, transparent 50%)`,
      }}
    >
      {/* Data Particles Background - Optimized with visibility detection */}
      <VisibilityWrapper>
        <DataParticles particleCount={15} speed={0.2} />
      </VisibilityWrapper>

      {/* Decorative gradient orbs */}
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.08)} 0%, transparent 70%)`,
          top: -100,
          right: -100,
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.06)} 0%, transparent 70%)`,
          bottom: -100,
          left: -100,
          filter: 'blur(80px)',
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
            maxWidth: '850px',
            mx: 'auto',
            color: theme.palette.text.secondary,
            lineHeight: 1.8,
          }}
        >
          Mastering the complete <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>AI/ML pipeline</Box> from
          {' '}<Box component="span" sx={{ color: theme.palette.secondary.main, fontWeight: 600 }}>data engineering</Box> to
          {' '}<Box component="span" sx={{ color: theme.palette.accent?.main || '#00ff88', fontWeight: 600 }}>model deployment</Box>,
          delivering production-ready solutions that drive business value.
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
                  background: `linear-gradient(135deg,
                    ${alpha(theme.palette.background.paper, 0.95)} 0%,
                    ${alpha(theme.palette.background.paper, 0.85)} 100%
                  )`,
                  backdropFilter: 'blur(20px) saturate(1.8)',
                  border: `2px solid transparent`,
                  backgroundImage: `
                    linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}) padding-box,
                    ${theme.customGradients.neural} border-box
                  `,
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  boxShadow: `
                    0 10px 40px ${alpha(theme.palette.primary.main, 0.15)},
                    0 0 0 1px ${alpha(theme.palette.primary.main, 0.05)},
                    inset 0 0 30px ${alpha(theme.palette.primary.main, 0.03)}
                  `,
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&::before': {
                    content: '\"\"',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: theme.customGradients.neural,
                    borderRadius: '4px 4px 0 0',
                    opacity: 0.6,
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: `
                      0 20px 60px ${alpha(theme.palette.primary.main, 0.25)},
                      0 0 0 1px ${alpha(theme.palette.primary.main, 0.15)},
                      inset 0 0 40px ${alpha(theme.palette.primary.main, 0.05)}
                    `,
                    '&::before': {
                      opacity: 1,
                      boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                    }
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 56,
                      height: 56,
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.15)}, ${alpha(theme.palette.secondary.main, 0.15)})`,
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                      boxShadow: `0 4px 16px ${alpha(theme.palette.primary.main, 0.2)}`,
                      color: theme.palette.primary.main,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                        boxShadow: `0 6px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                      }
                    }}
                  >
                    {getCategoryIcon(category.category)}
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        background: theme.customGradients.neural,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 0.5,
                      }}
                    >
                      {category.category}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.text.secondary,
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.7rem',
                      }}
                    >
                      {category.skills.length} skills
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ mb: 3, opacity: 0.3 }} />

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {category.skills.map((skill, index) => {
                    // Alternate between gradient styles for visual interest
                    const isHighlight = index % 3 === 0;

                    return (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          px: 1.5,
                          py: 2.5,
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          bgcolor: isHighlight
                            ? alpha(theme.palette.primary.main, 0.1)
                            : alpha(theme.palette.background.paper, 0.5),
                          border: `1.5px solid ${
                            isHighlight
                              ? alpha(theme.palette.primary.main, 0.3)
                              : alpha(theme.palette.text.secondary, 0.15)
                          }`,
                          color: theme.palette.text.primary,
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            bgcolor: alpha(theme.palette.primary.main, 0.15),
                            borderColor: theme.palette.primary.main,
                            transform: 'translateY(-4px) scale(1.05)',
                            boxShadow: `
                              0 8px 24px ${alpha(theme.palette.primary.main, 0.25)},
                              inset 0 0 20px ${alpha(theme.palette.primary.main, 0.1)}
                            `,
                            color: theme.palette.primary.main,
                            fontWeight: 700,
                          },
                        }}
                      />
                    );
                  })}
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