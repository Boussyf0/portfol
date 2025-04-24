import React, { useEffect, useState } from 'react';
import { Box, AppBar, Toolbar, Button, Container, useScrollTrigger, Slide, IconButton, Drawer, List, ListItem, CssBaseline, useMediaQuery, Typography, Fab, ListItemText } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ThemeToggle from './components/UI/ThemeToggle';
import { createNeoBrutalTheme, createGlassTheme } from './themes';
import Lab from './components/Lab';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Lab', 'Contact'];
// Define common styles for navigation buttons
const NavButton = styled(Button)`
  color: ${props => props.theme.palette.text.primary};
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 8px 12px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.palette.primary.main};
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover {
    background-color: rgba(99, 102, 241, 0.1);
    &:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Slide direction="up" in={trigger} mountOnEnter unmountOnExit>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 2,
        }}
      >
        {children}
      </Box>
    </Slide>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const [themeMode, setThemeMode] = useState(() => {
    // Get saved theme from localStorage or use system preference
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) return savedMode;
    
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });
  
  const [themeStyle, setThemeStyle] = useState(() => {
    // Get saved theme style from localStorage or default to glass
    return localStorage.getItem('themeStyle') || 'glass';
  });
  
  // Create the appropriate theme based on mode and style
  const theme = themeStyle === 'neoBrutal'
    ? createNeoBrutalTheme(themeMode)
    : createGlassTheme(themeMode);
  
  // Update HTML class for dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', themeMode === 'dark');
  }, [themeMode]);
  
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  
  // Save theme preferences to localStorage
  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
    localStorage.setItem('themeStyle', themeStyle);
  }, [themeMode, themeStyle]);
  
  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem('themeMode')) {
        setThemeMode(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  // Toggle theme functions
  const toggleThemeMode = () => {
    setThemeMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
  };
  
  const toggleThemeStyle = () => {
    setThemeStyle(prevStyle => prevStyle === 'neoBrutal' ? 'glass' : 'neoBrutal');
  };

  // Set viewport meta tag for better mobile rendering
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0';
    document.getElementsByTagName('head')[0].appendChild(meta);
    
    return () => {
      document.getElementsByTagName('head')[0].removeChild(meta);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Close mobile drawer when a nav link is clicked
  const handleNavClick = () => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  // Drawer component
  const drawer = (
    <Box 
      sx={{ 
        width: 240, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          py: 2, 
          px: 3,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Abderrahim B.
        </Typography>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ flexGrow: 1, py: 2 }}>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item} disablePadding>
            <HashLink
              smooth
              to={`#${item.toLowerCase()}`}
              style={{ textDecoration: 'none', width: '100%', color: 'inherit' }}
              onClick={handleNavClick}
            >
              <ListItemText 
                primary={item} 
                sx={{ 
                  py: 1.5, 
                  px: 3,
                  '&:hover': {
                    bgcolor: 'rgba(99, 102, 241, 0.1)',
                  } 
                }} 
              />
            </HashLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ 
          width: '100vw', 
          minHeight: '100vh', 
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}>
          {/* Glassmorphism background decorative elements */}
          {themeStyle === 'glass' && (
            <>
              <Box 
                sx={{ 
                  position: 'fixed',
                  top: '10%',
                  right: '5%',
                  width: { xs: 150, sm: 250, md: 400 },
                  height: { xs: 150, sm: 250, md: 400 },
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0) 70%)',
                  filter: 'blur(40px)',
                  zIndex: 0,
                }}
              />
              
              <Box 
                sx={{ 
                  position: 'fixed',
                  bottom: '15%',
                  left: '10%',
                  width: { xs: 100, sm: 200, md: 300 },
                  height: { xs: 100, sm: 200, md: 300 },
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0) 70%)',
                  filter: 'blur(40px)',
                  zIndex: 0,
                }}
              />
            </>
          )}
          
          <HideOnScroll>
            <AppBar sx={{ 
              bgcolor: 'background.paper',
              backdropFilter: 'blur(12px)',
            }}>
              <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                  <Button 
                    href="#home"
                    sx={{ 
                      color: 'primary.main', 
                      fontWeight: 'bold', 
                      fontSize: '1.2rem',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'transparent'
                      }
                    }}
                  >
                    Portfolio
                  </Button>
                  
                  {isDesktop ? (
                    <Box component="nav" sx={{ display: 'flex' }}>
                      {NAV_ITEMS.map((item) => (
                        <HashLink
                          smooth
                          to={`#${item.toLowerCase()}`}
                          key={item}
                          style={{ textDecoration: 'none' }}
                        >
                          <Button 
                            sx={{ 
                              mx: 0.5,
                              color: 'text.primary',
                              '&:hover': {
                                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                color: 'primary.main'
                              }
                            }}
                          >
                            {item}
                          </Button>
                        </HashLink>
                      ))}
                    </Box>
                  ) : (
                    <IconButton
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ color: 'primary.main' }}
                    >
                      <MenuIcon />
                    </IconButton>
                  )}
                </Toolbar>
              </Container>
            </AppBar>
          </HideOnScroll>

          <Box component="nav">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { 
                  width: 240,
                  boxSizing: 'border-box',
                  bgcolor: 'background.paper',
                  backdropFilter: 'blur(12px)',
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          <Box component="main" sx={{ 
            width: '100%', 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            pt: '64px', // Height of AppBar
            position: 'relative',
            zIndex: 1,
          }}>
            <div id="home">
              <Hero />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="lab">
              <Lab />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Footer />
          </Box>

          <ScrollTop>
            <Fab 
              color="primary" 
              size="small" 
              aria-label="scroll back to top"
              sx={{ 
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>

          {/* Theme Toggles */}
          <ThemeToggle setMode={toggleThemeMode} mode={themeMode} />
          
          {/* Neo-Brutal Style Toggle */}
          <Box
            sx={{ 
              position: 'fixed',
              bottom: 30, 
              left: 110,
              zIndex: 1000,
              backgroundColor: 'background.paper',
              border: '3px solid',
              borderColor: 'primary.main',
              boxShadow: themeStyle === 'neoBrutal' 
                ? '5px 5px 0 rgba(0,0,0,0.2)' 
                : '0 4px 20px rgba(0,0,0,0.1)',
              p: 0.5,
              borderRadius: themeStyle === 'neoBrutal' ? 0 : 12,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: 1,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: themeStyle === 'neoBrutal' 
                  ? '7px 7px 0 rgba(0,0,0,0.2)' 
                  : '0 10px 30px rgba(0,0,0,0.15)',
              },
              color: 'text.primary',
              px: 1,
              py: 0.5,
            }}
            onClick={toggleThemeStyle}
          >
            {themeStyle}
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
