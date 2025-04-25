import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const DevOpsPipeline = () => {
  const theme = useTheme();
  const { MotionDiv, style } = useScrollAnimation({
    start: 0.2,
    end: 0.7,
    yStart: 50,
    yEnd: 0,
  });

  const stages = [
    {
      icon: <GitHubIcon sx={{ fontSize: 40 }} />,
      title: 'Code',
      description: 'Version Control & Collaboration',
      color: theme.palette.primary.main,
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40 }} />,
      title: 'Build',
      description: 'Continuous Integration',
      color: theme.palette.secondary.main,
    },
    {
      icon: <StorageIcon sx={{ fontSize: 40 }} />,
      title: 'Test',
      description: 'Automated Testing',
      color: '#00ff9d',
    },
    {
      icon: <CloudIcon sx={{ fontSize: 40 }} />,
      title: 'Deploy',
      description: 'Containerization & Orchestration',
      color: '#ff6b6b',
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
      title: 'Release',
      description: 'Continuous Deployment',
      color: '#ffd93d',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <MotionDiv style={style}>
      <Box
        sx={{
          p: 3,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '2px',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            opacity: 0.2,
            zIndex: 0,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Orbitron',
            textTransform: 'uppercase',
            textAlign: 'center',
            mb: 4,
            color: theme.palette.primary.main,
          }}
        >
          DevOps Pipeline
        </Typography>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              variants={item}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: theme.customGradients.glass,
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1) rotate(5deg)',
                    boxShadow: `0 0 20px ${stage.color}`,
                    borderColor: stage.color,
                  },
                }}
              >
                {React.cloneElement(stage.icon, {
                  sx: { color: stage.color },
                })}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Orbitron',
                  textTransform: 'uppercase',
                  color: stage.color,
                }}
              >
                {stage.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: 150,
                }}
              >
                {stage.description}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </Box>
    </MotionDiv>
  );
};

export default DevOpsPipeline; 