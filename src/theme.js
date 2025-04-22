import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Indigo
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ec4899', // Pink
      light: '#f472b6',
      dark: '#db2777',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0f172a', // Dark blue slate
      paper: 'rgba(30, 41, 59, 0.7)', // Dark transparent for glassmorphism
      paperDark: '#1e293b', // Solid dark for non-glass surfaces
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 2px 10px rgba(0, 0, 0, 0.15)',
    '0px 4px 20px rgba(0, 0, 0, 0.15)',
    '0px 6px 30px rgba(0, 0, 0, 0.2)',
    '0px 8px 40px rgba(0, 0, 0, 0.25)',
    // ... continuing with the rest
    '0px 10px 50px rgba(0, 0, 0, 0.3)',
    '0px 12px 60px rgba(0, 0, 0, 0.35)',
    '0px 14px 70px rgba(0, 0, 0, 0.4)',
    '0px 16px 80px rgba(0, 0, 0, 0.45)',
    '0px 18px 90px rgba(0, 0, 0, 0.5)',
    '0px 20px 100px rgba(0, 0, 0, 0.55)',
    '0px 22px 110px rgba(0, 0, 0, 0.6)',
    '0px 24px 120px rgba(0, 0, 0, 0.65)',
    '0px 26px 130px rgba(0, 0, 0, 0.7)',
    '0px 28px 140px rgba(0, 0, 0, 0.75)',
    '0px 30px 150px rgba(0, 0, 0, 0.8)',
    '0px 32px 160px rgba(0, 0, 0, 0.85)',
    '0px 34px 170px rgba(0, 0, 0, 0.9)',
    '0px 36px 180px rgba(0, 0, 0, 0.95)',
    '0px 38px 190px rgba(0, 0, 0, 1)',
    '0px 40px 200px rgba(0, 0, 0, 1)',
    '0px 42px 210px rgba(0, 0, 0, 1)',
    '0px 44px 220px rgba(0, 0, 0, 1)',
    '0px 46px 230px rgba(0, 0, 0, 1)',
    '0px 48px 240px rgba(0, 0, 0, 1)',
  ],
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
          borderRadius: 12,
          backdropFilter: 'blur(10px)',
          '&:hover': {
            boxShadow: '0 10px 25px rgba(99, 102, 241, 0.2)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #db2777 0%, #be185d 100%)',
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
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 41, 59, 0.5)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 41, 59, 0.7)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
  // Custom properties beyond MUI's theme specification
  customGradients: {
    primary: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    secondary: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
    primaryToSecondary: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
    dark: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    glass: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(30, 41, 59, 0.2) 100%)',
  },
  glassMorphism: {
    light: {
      background: 'rgba(30, 41, 59, 0.3)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    medium: {
      background: 'rgba(30, 41, 59, 0.5)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
    },
    dark: {
      background: 'rgba(30, 41, 59, 0.7)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  },
});

export default theme; 