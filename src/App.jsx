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
import { createThemeMode } from './utils/theme';
import Lab from './components/Lab';
import DataDashboard from './components/DataDashboard';
import DevOpsPipeline from './components/DevOpsPipeline';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Dashboard', 'Pipeline', 'Lab', 'Contact'];
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
  // State for mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Initialize theme mode from localStorage or system preference
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) return savedMode;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });
  
  // Create theme based on current mode
  const theme = createThemeMode(mode);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Save theme preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
    // Update HTML attribute for dark mode styling
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem('themeMode')) {
        setMode(e.matches ? 'dark' : 'light');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = () => {
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'visible' }}>
          <HideOnScroll>
            <AppBar position="fixed" color="default" elevation={0}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                  {NAV_ITEMS.map((item) => (
                    <HashLink
                      key={item}
                      to={`#${item.toLowerCase()}`}
                      smooth
                      style={{ textDecoration: 'none' }}
                    >
                      <Button
                        color="inherit"
                        onClick={handleNavClick}
                        sx={{ mx: 1 }}
                      >
                        {item}
                      </Button>
                    </HashLink>
                  ))}
                </Box>
              </Toolbar>
            </AppBar>
          </HideOnScroll>

          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              '& .MuiDrawer-paper': {
                width: 250,
              },
            }}
          >
            <Box sx={{ width: 250 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <IconButton onClick={handleDrawerToggle}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {NAV_ITEMS.map((item) => (
                  <ListItem key={item} button>
                    <HashLink
                      to={`#${item.toLowerCase()}`}
                      smooth
                      style={{ textDecoration: 'none', width: '100%' }}
                      onClick={handleNavClick}
                    >
                      <ListItemText primary={item} />
                    </HashLink>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>

          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1,
              mt: { xs: 7, sm: 8 }, // Add margin top to account for the AppBar
              width: '100%',
              overflowX: 'hidden',
              overflowY: 'visible',
              position: 'relative'
            }}
          >
            {/* Main content - Direct rendering without Routes */}
            <Hero id="home" />
            <About id="about" />
            <Skills id="skills" />
            <Projects id="projects" />
            <DataDashboard id="dashboard" />
            <DevOpsPipeline id="pipeline" />
            <Lab id="lab" />
            <Contact id="contact" />
          </Box>

          <ScrollTop>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>

          <ThemeToggle mode={mode} setMode={setMode} />
          
          <Footer />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
