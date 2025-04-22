import React, { useEffect, useState } from 'react';
import { Box, AppBar, Toolbar, Button, Stack, Container, useScrollTrigger, Slide, IconButton, Drawer, List, ListItem, ListItemButton, CssBaseline, useMediaQuery, Typography, Fab, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
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
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  
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
        background: theme.customGradients.dark,
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
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
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
          background: theme.customGradients.dark,
          color: theme.palette.text.primary,
          position: 'relative',
        }}>
          {/* Glassmorphism background decorative elements */}
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
          
          <HideOnScroll>
            <AppBar sx={{ 
              background: 'rgba(15, 23, 42, 0.8)', 
              backdropFilter: 'blur(12px)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                  <Button 
                    href="#home"
                    sx={{ 
                      color: theme.palette.primary.main, 
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
                              color: theme.palette.text.primary,
                              '&:hover': {
                                backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                color: theme.palette.primary.main
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
                      sx={{ color: theme.palette.primary.main }}
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
                  background: 'rgba(15, 23, 42, 0.9)',
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
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)',
                background: theme.customGradients.primary,
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
