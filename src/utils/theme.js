import { createTheme } from '@mui/material/styles';

// Modern portfolio color palette
const colors = {
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

// Create a theme instance
const theme = createTheme({
  palette: {
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
  components: {
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
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0.05)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
            border: '1px solid rgba(67, 97, 238, 0.3)',
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
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          color: colors.text.primary,
        },
      },
    },
  },
  customGradients: colors.gradient,
});

export default theme; 