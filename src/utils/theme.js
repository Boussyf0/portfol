import { createTheme } from '@mui/material/styles';

// Modern portfolio color palette
const lightColors = {
  primary: {
    main: '#4361ee',
    light: '#4895ef',
    dark: '#3a0ca3',
    contrastText: '#fff',
  },
  secondary: {
    main: '#f72585',
    light: '#ff4d6d',
    dark: '#c9184a',
    contrastText: '#fff',
  },
  background: {
    default: '#f8f9fa',
    paper: '#ffffff',
    accent: '#e9ecef',
  },
  text: {
    primary: '#212529',
    secondary: '#6c757d',
    accent: '#4361ee',
  },
  gradient: {
    primary: 'linear-gradient(45deg, #4361ee 0%, #4895ef 100%)',
    secondary: 'linear-gradient(45deg, #f72585 0%, #ff4d6d 100%)',
  }
};

// Dark theme colors
const darkColors = {
  primary: {
    main: '#4361ee',
    light: '#4895ef',
    dark: '#3a0ca3',
    contrastText: '#fff',
  },
  secondary: {
    main: '#f72585',
    light: '#ff4d6d',
    dark: '#c9184a',
    contrastText: '#fff',
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
    accent: '#2c2c2c',
  },
  text: {
    primary: '#f5f5f5',
    secondary: '#b0b0b0',
    accent: '#4895ef',
  },
  gradient: {
    primary: 'linear-gradient(45deg, #4361ee 0%, #4895ef 100%)',
    secondary: 'linear-gradient(45deg, #f72585 0%, #ff4d6d 100%)',
  }
};

// Create themed components based on mode
const createThemeComponents = (mode, colors) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        textTransform: 'none',
        fontWeight: 600,
        padding: '10px 20px',
        boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
        },
      },
      containedPrimary: {
        background: colors.gradient.primary,
      },
      containedSecondary: {
        background: colors.gradient.secondary,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
        boxShadow: mode === 'dark' 
          ? '0 10px 30px rgba(0,0,0,0.3)' 
          : '0 10px 30px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        overflow: 'hidden',
        border: mode === 'dark' 
          ? '1px solid rgba(255,255,255,0.05)' 
          : '1px solid rgba(0,0,0,0.05)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: mode === 'dark'
            ? '0 20px 40px rgba(0,0,0,0.5)'
            : '0 20px 40px rgba(0,0,0,0.08)',
          border: `1px solid rgba(67, 97, 238, ${mode === 'dark' ? 0.4 : 0.3})`,
        },
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: 24,
        paddingRight: 24,
        '@media (min-width: 600px)': {
          paddingLeft: 32,
          paddingRight: 32,
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: mode === 'dark'
          ? '0 4px 20px rgba(0,0,0,0.2)'
          : '0 4px 20px rgba(0,0,0,0.05)',
        backdropFilter: 'blur(10px)',
        backgroundColor: mode === 'dark'
          ? 'rgba(30, 30, 30, 0.8)'
          : 'rgba(255, 255, 255, 0.8)',
        color: mode === 'dark' ? '#f5f5f5' : '#212529',
      },
    },
  },
});

// Function to create theme based on mode
export const createThemeMode = (mode) => {
  const colors = mode === 'dark' ? darkColors : lightColors;
  
  return createTheme({
    palette: {
      mode,
      primary: colors.primary,
      secondary: colors.secondary,
      background: colors.background,
      text: colors.text,
    },
    typography: {
      fontFamily: [
        'Poppins',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h4: {
        fontWeight: 600,
        position: 'relative',
      },
      h6: {
        fontWeight: 600,
      },
      button: {
        fontWeight: 600,
      }
    },
    shape: {
      borderRadius: 12,
    },
    components: createThemeComponents(mode, colors),
    customGradients: colors.gradient,
  });
};

// Default light theme
const theme = createThemeMode('light');

export default theme; 