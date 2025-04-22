import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(4),
  fontWeight: 700,
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: -12,
    width: '40%',
    height: 4,
    borderRadius: 4,
    background: theme.customGradients.primary,
  }
}));

// Decorative element 
const Accent = styled('span')(({ theme }) => ({
  position: 'absolute',
  right: -15,
  top: -15,
  width: 30,
  height: 30,
  borderRadius: '50%',
  background: theme.customGradients.secondary,
  opacity: 0.5,
  zIndex: -1,
}));

const SectionTitle = ({ title, align = 'left', ...props }) => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        width: '100%', 
        textAlign: align, 
        mb: 5,
        position: 'relative',
        display: 'flex',
        justifyContent: align === 'center' ? 'center' : 'flex-start'
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Accent />
        <StyledTitle variant="h4" align={align} {...props}>
          {title}
        </StyledTitle>
      </Box>
    </Box>
  );
};

export default SectionTitle; 