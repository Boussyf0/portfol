import React, { useRef } from 'react';
import { Box, Typography, useTheme, alpha } from '@mui/material';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const Timeline = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Timeline items
  const timelineItems = [
    {
      year: '2023',
      title: 'Data Science Internship',
      description: 'Developed machine learning models for predictive analytics at a tech startup, focusing on customer behavior prediction.',
      icon: <AutoGraphIcon />,
      color: theme.palette.secondary.main,
    },
    {
      year: '2022',
      title: 'Started Computer Engineering',
      description: 'Enrolled in Computer Engineering at EMSI-MARRAKECH, focusing on AI, machine learning, and software development.',
      icon: <SchoolIcon />,
      color: theme.palette.primary.main,
    },
    {
      year: '2022',
      title: 'Web Development Project',
      description: 'Built a full-stack web application using React, Node.js, and MongoDB, implementing RESTful API services.',
      icon: <CodeIcon />,
      color: theme.palette.secondary.main,
    },
    {
      year: '2021',
      title: 'Machine Learning Certification',
      description: 'Completed an intensive machine learning course, covering neural networks, computer vision, and NLP techniques.',
      icon: <TerminalIcon />,
      color: theme.palette.primary.main,
    },
    {
      year: '2020',
      title: 'First Programming Project',
      description: 'Developed a data analysis tool in Python, implementing statistical methods and visualization techniques.',
      icon: <WorkIcon />,
      color: theme.palette.secondary.main,
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
                mb: 1,
                color: theme.palette.text.primary,
              }}
            >
              {item.title}
            </Typography>

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