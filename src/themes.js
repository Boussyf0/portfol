import { createTheme } from '@mui/material/styles';

// Palette commune
const commonPalette = {
  primary: {
    main: '#6366f1', // Indigo technique
    dark: '#4338ca',
    light: '#818cf8'
  },
  secondary: {
    main: '#ec4899', // Rose vif pour les accents
    dark: '#be185d',
    light: '#f472b6'
  },
  success: {
    main: '#22c55e'
  },
  error: {
    main: '#ef4444'
  }
};

// Thème Neo-Brutal pour un look technique
export const createNeoBrutalTheme = (mode) => createTheme({
  palette: {
    mode,
    ...commonPalette,
    background: {
      default: mode === 'dark' ? '#0a0a0a' : '#ffffff',
      paper: mode === 'dark' ? '#121212' : '#f8fafc',
    },
  },
  typography: {
    fontFamily: '"Space Mono", "Roboto Mono", monospace',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    }
  },
  shape: {
    borderRadius: 0
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          fontWeight: 600,
          border: '3px solid',
          boxShadow: mode === 'dark' 
            ? '4px 4px 0 rgba(255,255,255,0.2)'
            : '4px 4px 0 rgba(0,0,0,0.2)',
          '&:hover': {
            transform: 'translate(-2px, -2px)',
            boxShadow: mode === 'dark'
              ? '6px 6px 0 rgba(255,255,255,0.2)'
              : '6px 6px 0 rgba(0,0,0,0.2)',
          }
        }
      }
    }
  }
});

// Thème Glass pour un look moderne
export const createGlassTheme = (mode) => createTheme({
  palette: {
    mode,
    ...commonPalette,
    background: {
      default: mode === 'dark' 
        ? 'linear-gradient(45deg, #0f172a 0%, #1e293b 100%)'
        : 'linear-gradient(45deg, #f8fafc 0%, #e2e8f0 100%)',
      paper: mode === 'dark'
        ? 'rgba(30, 41, 59, 0.7)'
        : 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    }
  },
  shape: {
    borderRadius: 16
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          border: '1px solid',
          borderColor: mode === 'dark'
            ? 'rgba(255,255,255,0.1)'
            : 'rgba(0,0,0,0.1)',
          background: mode === 'dark'
            ? 'rgba(30, 41, 59, 0.7)'
            : 'rgba(255, 255, 255, 0.7)',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          background: mode === 'dark'
            ? 'rgba(99, 102, 241, 0.1)'
            : 'rgba(99, 102, 241, 0.1)',
          '&:hover': {
            background: mode === 'dark'
              ? 'rgba(99, 102, 241, 0.2)'
              : 'rgba(99, 102, 241, 0.2)',
            transform: 'translateY(-2px)',
          }
        }
      }
    }
  }
}); 