import React, { useRef } from 'react';
import { Box, Typography, useTheme, alpha } from '@mui/material';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import BoltIcon from '@mui/icons-material/Bolt';

const Timeline = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const BASE = import.meta.env.BASE_URL;

  // Timeline items
  const timelineItems = [
    {
      year: '2025 - Present',
      title: 'AI Engineer',
      company: 'n.synergy',
      description: 'Developing a cognitive healthcare platform integrating Multi-Agent architecture and an advanced RAG pipeline for clinical assistance. Leveraging predictive modeling (XGBoost) and IoT time-series analysis (smartwatches) to optimize patient flows dynamically, adhering to Privacy by Design principles.',
      icon: <AutoGraphIcon />,
      color: theme.palette.secondary.main,
      logo: `${BASE}assets/company_logos/N.synergy_logo.png`,
    },
    {
      year: '2025',
      title: 'Intelligent Web Platform & RAG Intern',
      company: 'Brain Gen Technology',
      description: 'Developed an intelligent web platform integrating a RAG-based chatbot (Llama, Mistral) to optimize lead qualification and customer interaction.',
      icon: <CodeIcon />,
      color: theme.palette.primary.main,
      logo: `${BASE}assets/company_logos/BRAIN logo.png`,
    },
    {
      year: '2024',
      title: 'Technical Loss Analysis Intern',
      company: 'ONEE',
      description: 'Analyzed technical losses in the electrical distribution network at ONEE-DAKHLA, identifying key factors responsible for 40% of losses and proposing reduction strategies.',
      icon: <BoltIcon />,
      color: theme.palette.secondary.main,
      logo: `${BASE}assets/company_logos/onee.png`,
    },
    {
      year: '2023',
      title: 'Process Verification Intern',
      company: 'OCP Group',
      description: 'Monitored NISSAN process parameters at OCP SAFI to optimize phosphoric acid production, studying industrial flows from grinding to storage.',
      icon: <WorkIcon />,
      color: theme.palette.primary.main,
      logo: `${BASE}assets/company_logos/ocp.png`,
    },
    {
      year: '2023 - 2025',
      title: 'Computer Engineering Graduate',
      company: 'EMSI Marrakech',
      description: 'Specialized in Artificial Intelligence and Digital Engineering at Ecole Marocaine des Sciences de l\'Ingenieur.',
      icon: <SchoolIcon />,
      color: theme.palette.secondary.main,
      logo: `${BASE}assets/company_logos/emsi.png`,
    },
    {
      year: '2021 - 2023',
      title: 'Engineering Cycle (GPM)',
      company: 'ENSA Safi',
      description: 'Studied Process and Materials Engineering at Ecole Nationale des Sciences Appliquées de Safi, gaining a strong foundation in industrial processes.',
      icon: <SchoolIcon />,
      color: theme.palette.primary.main,
      logo: `${BASE}assets/company_logos/ensa_safi.png`,
    },
    {
      year: '2018 - 2020',
      title: 'CPGE',
      company: 'Ad Dakhla',
      description: 'Completed Preparatory Classes for Great Engineering Schools, focusing on Mathematics and Physics.',
      icon: <SchoolIcon />,
      color: theme.palette.secondary.main,
      logo: `${BASE}assets/company_logos/CPGE_logo.png`,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Timeline progress line animation based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        my: 8,
        pt: 2,
        pb: 4,
      }}
    >
      <Typography
        variant="h5"
        component={motion.h2}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        sx={{
          fontWeight: 700,
          mb: 6,
          textTransform: 'uppercase',
          display: 'inline-block',
          position: 'relative',
          paddingLeft: '20px',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            width: 10,
            height: '100%',
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        My Journey
      </Typography>

      {/* Timeline vertical line */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 20, md: '50%' },
          transform: { xs: 'none', md: 'translateX(-1px)' },
          top: 80,
          bottom: 0,
          width: '2px',
          backgroundColor: alpha(theme.palette.primary.main, 0.3),
          zIndex: 0,
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: lineHeight,
            background: theme.customGradients.primaryToSecondary,
          }}
        />
      </Box>

      {/* Timeline items */}
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </Box>
    </Box>
  );
};

// Single timeline item component
const TimelineItem = ({ item, index, isLeft }) => {
  const theme = useTheme();
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });

  // Animation variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -50 : 50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        delay: index * 0.1,
      }
    }
  };

  return (
    <Box
      ref={itemRef}
      component={motion.div}
      variants={itemVariants}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: isLeft ? 'row' : 'row-reverse' },
        mb: 6,
        position: 'relative',
      }}
    >
      {/* Timeline item content */}
      <Box
        sx={{
          width: { xs: 'calc(100% - 50px)', md: '45%' },
          ml: { xs: 5, md: isLeft ? 0 : 'auto' },
          mr: { xs: 0, md: isLeft ? 'auto' : 0 },
          position: 'relative',
        }}
      >
        <motion.div
          animate={isInView ? { scale: [0.9, 1], opacity: [0.8, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              border: '3px solid',
              borderColor: item.color,
              background: alpha(theme.palette.background.paper, 0.7),
              backdropFilter: 'blur(5px)',
              p: 3,
              borderRadius: 0,
              boxShadow: `5px 5px 0 rgba(0,0,0,0.2)`,
              transform: 'rotate(-1deg)',
              transition: 'all 0.3s ease',
              position: 'relative',
              '&:hover': {
                transform: 'rotate(0deg) translateY(-5px)',
                boxShadow: `8px 8px 0 rgba(0,0,0,0.2)`,
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 10,
                left: 10,
                width: 20,
                height: 20,
                backgroundColor: item.color,
                zIndex: -1,
              },
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: item.color,
                fontWeight: 800,
                fontSize: '1rem',
                display: 'block',
                mb: 1,
              }}
            >
              {item.year}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 0.5,
                color: theme.palette.text.primary,
              }}
            >
              {item.title}
            </Typography>

            {/* Company with logo */}
            {item.company && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                {item.logo ? (
                  <Box
                    component="img"
                    src={item.logo}
                    alt={item.company}
                    sx={{
                      height: 24,
                      width: 'auto',
                      maxWidth: 80,
                      objectFit: 'contain',
                      filter: theme.palette.mode === 'dark' ? 'brightness(1.2)' : 'none',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '6px',
                      background: `linear-gradient(135deg, ${alpha(item.color, 0.8)}, ${alpha(item.color, 0.4)})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#fff',
                      flexShrink: 0,
                    }}
                  >
                    {item.company.charAt(0)}
                  </Box>
                )}
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: alpha(theme.palette.text.primary, 0.7),
                    fontStyle: 'italic',
                  }}
                >
                  {item.company}
                </Typography>
              </Box>
            )}

            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Timeline dot */}
      <Box
        component={motion.div}
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        sx={{
          position: 'absolute',
          left: { xs: 20, md: '50%' },
          transform: { xs: 'none', md: 'translateX(-50%)' },
          width: 40,
          height: 40,
          borderRadius: '0',
          backgroundColor: 'background.paper',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '3px solid',
          borderColor: item.color,
          color: item.color,
          boxShadow: `3px 3px 0 rgba(0,0,0,0.2)`,
          zIndex: 2,
        }}
      >
        {item.icon}
      </Box>
    </Box>
  );
};

export default Timeline; 