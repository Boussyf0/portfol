import { createTheme } from '@mui/material/styles';

// AI/ML themed color palette - Data Science & Neural Network aesthetics
const lightColors = {
  primary: {
    main: '#00d4ff', // Electric cyan - representing data flow
    light: '#5dfdff',
    dark: '#0099cc',
    contrastText: '#000',
  },
  secondary: {
    main: '#b24bf3', // Neural purple - representing AI/ML
    light: '#d084ff',
    dark: '#8b1bd4',
    contrastText: '#fff',
  },
  accent: {
    main: '#00ff88', // Matrix green - representing algorithms
    light: '#5fffb3',
    dark: '#00cc6e',
  },
  background: {
    default: '#f0f4f8',
    paper: '#ffffff',
    accent: '#e6eef5',
  },
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    accent: '#00d4ff',
  },
  gradient: {
    primary: 'linear-gradient(135deg, #00d4ff 0%, #b24bf3 100%)', // Data to AI
    secondary: 'linear-gradient(135deg, #b24bf3 0%, #00ff88 100%)', // AI to Algorithm
    neural: 'linear-gradient(135deg, #00d4ff 0%, #b24bf3 50%, #00ff88 100%)', // Complete ML pipeline
    data: 'linear-gradient(90deg, #00d4ff 0%, #0099cc 100%)', // Data flow
  }
};

// Dark theme colors - Enhanced for data science/ML visualization
const darkColors = {
  primary: {
    main: '#00d4ff', // Electric cyan - high contrast for dark mode
    light: '#5dfdff',
    dark: '#0099cc',
    contrastText: '#000',
  },
  secondary: {
    main: '#b24bf3', // Neural purple
    light: '#d084ff',
    dark: '#8b1bd4',
    contrastText: '#fff',
  },
  accent: {
    main: '#00ff88', // Matrix green
    light: '#5fffb3',
    dark: '#00cc6e',
  },
  background: {
    default: '#0a0f1a', // Deep tech blue-black
    paper: '#0f172a',
    accent: '#1e293b',
  },
  text: {
    primary: '#e2e8f0',
    secondary: '#94a3b8',
    accent: '#00d4ff',
  },
  gradient: {
    primary: 'linear-gradient(135deg, #00d4ff 0%, #b24bf3 100%)',
    secondary: 'linear-gradient(135deg, #b24bf3 0%, #00ff88 100%)',
    neural: 'linear-gradient(135deg, #00d4ff 0%, #b24bf3 50%, #00ff88 100%)',
    data: 'linear-gradient(90deg, #00d4ff 0%, #0099cc 100%)',
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
      accent: colors.accent,
      background: colors.background,
      text: colors.text,
    },
    typography: {
      fontFamily: [
        'Inter',
        'Space Grotesk',
        'Poppins',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'sans-serif',
      ].join(','),
      monoFamily: [
        'JetBrains Mono',
        'Fira Code',
        'Monaco',
        'Consolas',
        'monospace',
      ].join(','),
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.03em',
        fontFamily: 'Space Grotesk, Inter, sans-serif',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
        fontFamily: 'Space Grotesk, Inter, sans-serif',
      },
      h3: {
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
        letterSpacing: '0.02em',
      },
      code: {
        fontFamily: 'JetBrains Mono, Fira Code, monospace',
        fontSize: '0.875rem',
      }
    },
    shape: {
      borderRadius: 16,
    },
    components: createThemeComponents(mode, colors),
    customGradients: colors.gradient,
  });
};

// Default light theme
const theme = createThemeMode('light');

export default theme; 