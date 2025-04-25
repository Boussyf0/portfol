import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0073ff', // Neon Blue
      light: '#66abff',
      dark: '#005ccc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8700ff', // Neon Violet
      light: '#b766ff',
      dark: '#6c00cc',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0f172a',
      paper: 'rgba(30, 41, 59, 0.3)',
      paperDark: '#1e293b',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
    },
    divider: 'rgba(255, 255, 255, 0.1)',
  },
  typography: {
    fontFamily: '"Satoshi", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
    },
    h5: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
    },
    h6: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    code: {
      fontFamily: '"JetBrains Mono", monospace',
    },
  },
  shape: {
    borderRadius: 0, // Neo-brutalist: sharp corners
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
          minHeight: '100vh',
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderWidth: '2px',
          backdropFilter: 'blur(20px)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 115, 255, 0.5)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0073ff 0%, #8700ff 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #005ccc 0%, #6c00cc 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #8700ff 0%, #0073ff 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #6c00cc 0%, #005ccc 100%)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 23, 42, 0.3)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 41, 59, 0.3)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '2px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 41, 59, 0.3)',
          backdropFilter: 'blur(20px)',
          borderRadius: 0,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderWidth: '2px',
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
  customGradients: {
    primary: 'linear-gradient(135deg, #0073ff 0%, #8700ff 100%)',
    secondary: 'linear-gradient(135deg, #8700ff 0%, #0073ff 100%)',
    dark: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    glass: 'linear-gradient(135deg, rgba(30, 41, 59, 0.3) 0%, rgba(30, 41, 59, 0.1) 100%)',
  },
  glassMorphism: {
    light: {
      background: 'rgba(30, 41, 59, 0.2)',
      backdropFilter: 'blur(20px)',
      border: '2px solid rgba(255, 255, 255, 0.1)',
    },
    medium: {
      background: 'rgba(30, 41, 59, 0.3)',
      backdropFilter: 'blur(20px)',
      border: '2px solid rgba(255, 255, 255, 0.15)',
    },
    dark: {
      background: 'rgba(30, 41, 59, 0.4)',
      backdropFilter: 'blur(20px)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
    },
  },
});

export default theme; 