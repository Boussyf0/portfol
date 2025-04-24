import { createTheme } from '@mui/material/styles';

// Colors for neoBrutalTheme
const neoBrutalColors = {
  dark: {
    primary: {
      main: '#4361EE',
      light: '#4895EF',
      dark: '#3A0CA3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F72585',
      light: '#FF4D6D',
      dark: '#C9184A',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
      light: '#2A2A2A',
    },
    text: {
      primary: '#F8F9FA',
      secondary: '#CED4DA',
      disabled: 'rgba(248, 249, 250, 0.5)',
    }
  },
  light: {
    primary: {
      main: '#4361EE',
      light: '#4895EF',
      dark: '#3A0CA3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F72585',
      light: '#FF4D6D',
      dark: '#C9184A',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F8F8F8',
      paper: '#FFFFFF',
      light: '#F1F3F5',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
      disabled: 'rgba(0, 0, 0, 0.38)',
    }
  }
};

// Colors for glassTheme
const glassColors = {
  dark: {
    primary: {
      main: '#6366F1', // Indigo
      light: '#818CF8',
      dark: '#4F46E5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#EC4899', // Pink
      light: '#F472B6',
      dark: '#DB2777',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0F172A', // Dark blue slate
      paper: 'rgba(30, 41, 59, 0.7)', // Dark transparent for glassmorphism
      light: 'rgba(30, 41, 59, 0.4)',
    },
    text: {
      primary: '#F1F5F9',
      secondary: '#CBD5E1',
      disabled: 'rgba(241, 245, 249, 0.5)',
    }
  },
  light: {
    primary: {
      main: '#6366F1', // Indigo
      light: '#818CF8',
      dark: '#4F46E5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#EC4899', // Pink
      light: '#F472B6',
      dark: '#DB2777',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F8FAFC', // Light blue slate
      paper: 'rgba(255, 255, 255, 0.7)', // Light transparent for glassmorphism
      light: 'rgba(255, 255, 255, 0.4)',
    },
    text: {
      primary: '#0F172A',
      secondary: '#334155',
      disabled: 'rgba(15, 23, 42, 0.38)',
    }
  }
};

// Create Neo-Brutal theme
const createNeoBrutalTheme = (mode) => {
  const colors = mode === 'dark' 
    ? neoBrutalColors.dark 
    : neoBrutalColors.light;

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
        'Space Grotesk',
        'Roboto',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: {
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '-0.05em',
      },
      h2: {
        fontWeight: 800,
        textTransform: 'uppercase',
        letterSpacing: '-0.05em',
      },
      h3: {
        fontWeight: 700,
        letterSpacing: '-0.04em',
      },
      h4: {
        fontWeight: 700,
        letterSpacing: '-0.03em',
      },
      h5: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h6: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      button: {
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      },
    },
    shape: {
      borderRadius: 0, // Square corners for Neo-Brutal design
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
            borderWidth: 3,
            borderStyle: 'solid',
            borderColor: 'transparent',
            textTransform: 'uppercase',
            fontWeight: 700,
            transition: 'all 0.2s ease',
            '&:hover': {
              transform: 'translate(-2px, -2px)',
              boxShadow: '6px 6px 0 rgba(0,0,0,0.2)',
            },
          },
          contained: {
            borderColor: colors.primary.dark,
          },
          outlined: {
            borderColor: colors.primary.main,
            '&:hover': {
              borderColor: colors.primary.dark,
              borderWidth: 3,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            boxShadow: '6px 6px 0 rgba(0,0,0,0.2)',
            border: `3px solid ${colors.primary.main}`,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            boxShadow: '6px 6px 0 rgba(0,0,0,0.2)',
            border: `3px solid ${colors.primary.main}`,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translate(-3px, -3px)',
              boxShadow: '9px 9px 0 rgba(0,0,0,0.2)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 3,
            fontWeight: 600,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          '::selection': {
            backgroundColor: colors.primary.main,
            color: '#ffffff',
          },
          body: {
            backgroundColor: colors.background.default,
            scrollBehavior: 'smooth',
          },
        },
      },
    },
    // Custom properties beyond MUI's theme specification
    customGradients: {
      primary: `linear-gradient(45deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%)`,
      secondary: `linear-gradient(45deg, ${colors.secondary.main} 0%, ${colors.secondary.light} 100%)`,
      primaryToSecondary: `linear-gradient(45deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
    },
    customShadows: {
      neoBrutal: '5px 5px 0px rgba(0,0,0,0.2)',
      neoBrutalLarge: '8px 8px 0px rgba(0,0,0,0.2)',
    },
  });
};

// Create Glass theme
const createGlassTheme = (mode) => {
  const colors = mode === 'dark' 
    ? glassColors.dark 
    : glassColors.light;

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
        'Inter',
        'Roboto',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.01em',
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
        fontWeight: 600,
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 16, // Rounded corners for Glass design
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '::selection': {
            backgroundColor: colors.primary.main,
            color: '#ffffff',
          },
          body: {
            background: mode === 'dark'
              ? 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)'
              : 'linear-gradient(135deg, #F8FAFC 0%, #E0E7FF 100%)',
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
            background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.dark} 100%)`,
            '&:hover': {
              background: `linear-gradient(135deg, ${colors.primary.dark} 0%, ${colors.primary.main} 100%)`,
            },
          },
          containedSecondary: {
            background: `linear-gradient(135deg, ${colors.secondary.main} 0%, ${colors.secondary.dark} 100%)`,
            '&:hover': {
              background: `linear-gradient(135deg, ${colors.secondary.dark} 0%, ${colors.secondary.main} 100%)`,
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
            background: mode === 'dark'
              ? 'rgba(15, 23, 42, 0.7)'
              : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            borderBottom: mode === 'dark'
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: mode === 'dark'
              ? 'rgba(30, 41, 59, 0.5)'
              : 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            border: mode === 'dark'
              ? '1px solid rgba(255, 255, 255, 0.05)'
              : '1px solid rgba(0, 0, 0, 0.05)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            background: mode === 'dark'
              ? 'rgba(30, 41, 59, 0.7)'
              : 'rgba(255, 255, 255, 0.7)',
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
            borderColor: mode === 'dark'
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: colors.text.primary,
          },
          body1: {
            color: colors.text.primary,
          },
          body2: {
            color: colors.text.secondary,
          },
          h1: {
            color: colors.text.primary,
            fontWeight: 700,
          },
          h2: {
            color: colors.text.primary,
            fontWeight: 700,
          },
          h3: {
            color: colors.text.primary,
            fontWeight: 600,
          },
          h4: {
            color: colors.text.primary,
            fontWeight: 600,
          },
          h5: {
            color: colors.text.primary,
            fontWeight: 600,
          },
          h6: {
            color: colors.text.primary,
            fontWeight: 600,
          },
        },
      },
    },
    // Custom properties beyond MUI's theme specification
    customGradients: {
      primary: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.dark} 100%)`,
      secondary: `linear-gradient(135deg, ${colors.secondary.main} 0%, ${colors.secondary.dark} 100%)`,
      primaryToSecondary: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
      dark: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
      light: 'linear-gradient(135deg, #F8FAFC 0%, #E0E7FF 100%)',
      glass: mode === 'dark'
        ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(30, 41, 59, 0.2) 100%)'
        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%)',
    },
    glassMorphism: {
      light: {
        background: mode === 'dark'
          ? 'rgba(30, 41, 59, 0.3)'
          : 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        border: mode === 'dark'
          ? '1px solid rgba(255, 255, 255, 0.05)'
          : '1px solid rgba(0, 0, 0, 0.05)',
      },
      medium: {
        background: mode === 'dark'
          ? 'rgba(30, 41, 59, 0.5)'
          : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(10px)',
        border: mode === 'dark'
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid rgba(0, 0, 0, 0.08)',
      },
      heavy: {
        background: mode === 'dark'
          ? 'rgba(30, 41, 59, 0.7)'
          : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        border: mode === 'dark'
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(0, 0, 0, 0.1)',
      },
    },
  });
};

export { 
  createNeoBrutalTheme,
  createGlassTheme
}; 