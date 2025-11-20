import React from 'react';
import { Box, Container, Typography, Grid, useTheme, alpha } from '@mui/material';
import { SKILL_CATEGORIES } from '../data/constants';
import SectionTitle from './UI/SectionTitle';
import { motion } from 'framer-motion';

// Skill icons mapping
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WebIcon from '@mui/icons-material/Web';
import CloudIcon from '@mui/icons-material/Cloud';
import DatabaseIcon from '@mui/icons-material/Storage';
import AgilityIcon from '@mui/icons-material/Psychology';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import DataObjectIcon from '@mui/icons-material/DataObject';

const getCategoryIcon = (category) => {
  const iconMap = {
    'Programming Languages': <CodeIcon />,
    'AI & Machine Learning': <SmartToyIcon />,
    'Big Data & Cloud': <CloudIcon />,
    'Web & Tools': <WebIcon />,
    'Databases': <DatabaseIcon />,
    'Methodologies': <AgilityIcon />,
    'Data Analysis Tools': <AutoGraphIcon />,
    'Vector Databases': <DataObjectIcon />,
  };

  return iconMap[category] || <CodeIcon />;
};

const getCategoryColor = (index, theme) => {
  const colors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.accent?.main || '#d4a574',
  ];
  return colors[index % colors.length];
};

const Skills = () => {
  const theme = useTheme();

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
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
      }}
    >
      {/* Elegant background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.03)}, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle title="Technical Skills" />

        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{
            mb: 8,
            maxWidth: '700px',
            mx: 'auto',
            color: theme.palette.text.secondary,
            fontSize: '1.1rem',
            fontWeight: 400,
            lineHeight: 1.7,
          }}
        >
          A comprehensive toolkit spanning the entire data science and ML engineering pipeline
        </Typography>

        <Box
          component={motion.div}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div key={category.category} variants={item}>
              <Box
                sx={{
                  mb: 6,
                  pb: 5,
                  borderBottom: categoryIndex < SKILL_CATEGORIES.length - 1
                    ? `1px solid ${alpha(theme.palette.divider, 0.1)}`
                    : 'none',
                }}
              >
                {/* Category Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      background: `linear-gradient(135deg, ${alpha(getCategoryColor(categoryIndex, theme), 0.1)}, ${alpha(getCategoryColor(categoryIndex, theme), 0.05)})`,
                      border: `1px solid ${alpha(getCategoryColor(categoryIndex, theme), 0.2)}`,
                      color: getCategoryColor(categoryIndex, theme),
                    }}
                  >
                    {getCategoryIcon(category.category)}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        fontFamily: 'Playfair Display, serif',
                        color: theme.palette.text.primary,
                        fontSize: { xs: '1.3rem', md: '1.5rem' }
                      }}
                    >
                      {category.category}
                    </Typography>
                  </Box>
                </Box>

                {/* Skills as clean badges */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                  {category.skills.map((skill) => (
                    <Box
                      key={skill}
                      sx={{
                        px: 3,
                        py: 1.5,
                        borderRadius: 2,
                        background: alpha(theme.palette.background.paper, 0.6),
                        border: `1px solid ${alpha(getCategoryColor(categoryIndex, theme), 0.15)}`,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          background: alpha(theme.palette.background.paper, 1),
                          border: `1px solid ${getCategoryColor(categoryIndex, theme)}`,
                          transform: 'translateY(-3px)',
                          boxShadow: `0 6px 20px ${alpha(getCategoryColor(categoryIndex, theme), 0.15)}`,
                        }
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          fontSize: '0.95rem',
                          color: theme.palette.text.primary,
                        }}
                      >
                        {skill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;