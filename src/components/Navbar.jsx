import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Container, 
  Button, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  useTheme, 
  useScrollTrigger,
  Slide,
  alpha
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import { HashLink } from 'react-router-hash-link';

// Neo-brutal custom menu button
const NeoBrutalMenuButton = ({ onClick, isOpen }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconButton
        onClick={onClick}
        sx={{
          width: 50,
          height: 50,
          border: '3px solid',
          borderColor: 'text.primary',
          borderRadius: 0,
          boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
          transition: 'all 0.2s',
          '&:hover': {
            boxShadow: '6px 6px 0 rgba(0,0,0,0.2)',
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
            transform: 'translateY(-2px)',
          },
        }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </motion.div>
  );
};

// Neo-brutal nav button
const NavButton = ({ children, to, isMobile, onClick }) => {
  const theme = useTheme();
  
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <HashLink
        smooth
        to={to}
        style={{ textDecoration: 'none', display: 'block' }}
        onClick={onClick}
      >
        <Button
          sx={{
            color: 'text.primary',
            backgroundColor: 'transparent',
            border: isMobile ? 'none' : '3px solid transparent',
            borderRadius: 0,
            fontSize: isMobile ? '1.2rem' : '1rem',
            fontWeight: 600,
            padding: isMobile ? '12px 16px' : '8px 16px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.2s',
            textTransform: 'none',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '3px',
              background: theme.palette.primary.main,
              transform: 'scaleX(0)',
              transformOrigin: 'right',
              transition: 'transform 0.3s ease',
            },
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.05),
              borderColor: isMobile ? 'transparent' : theme.palette.primary.main,
              '&::after': {
                transform: 'scaleX(1)',
                transformOrigin: 'left',
              },
            },
          }}
        >
          {children}
        </Button>
      </HashLink>
    </motion.div>
  );
};

// Hide on scroll functionality
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Close mobile drawer when link is clicked
  const handleNavClick = () => {
    if (mobileOpen) setMobileOpen(false);
  };

  // Check scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  // Animations
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20
      }
    }
  };

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Mobile drawer
  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        borderRight: '5px solid',
        borderColor: theme.palette.primary.main,
      }}
    >
      <Box
        sx={{
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
            AB
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List sx={{ mt: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding sx={{ mb: 2 }}>
              <NavButton 
                to={item.path} 
                isMobile={true}
                onClick={handleNavClick}
              >
                {item.name}
              </NavButton>
            </ListItem>
          ))}
        </List>
        
        <Box sx={{ mt: 'auto', pt: 4 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Connect with me
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton 
              size="small" 
              sx={{ 
                borderRadius: 0,
                border: '2px solid',
                borderColor: 'primary.main',
              }}
              aria-label="github"
            >
              <CodeIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
  
  return (
    <>
      <HideOnScroll>
        <AppBar
          elevation={0}
          component={motion.div}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', damping: 15, stiffness: 100 }}
          sx={{
            background: scrolled 
              ? alpha(theme.palette.background.default, 0.8)
              : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '3px solid' : 'none',
            borderColor: 'primary.main',
            boxShadow: scrolled ? '5px 5px 0 rgba(0,0,0,0.2)' : 'none',
            transition: 'all 0.3s ease',
            margin: scrolled ? '10px 20px 0' : '20px 40px 0',
            width: scrolled ? 'calc(100% - 40px)' : 'calc(100% - 80px)',
            borderRadius: 0,
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
              {/* Logo */}
              <motion.div
                variants={logoVariants}
                initial="hidden"
                animate="visible"
              >
                <HashLink smooth to="#home" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.text.primary,
                      letterSpacing: '-0.05em',
                      position: 'relative',
                      display: 'inline-block',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '5px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: theme.palette.primary.main,
                        transform: scrolled ? 'scaleX(1)' : 'scaleX(0.5)',
                        transformOrigin: 'left',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover::after': {
                        transform: 'scaleX(1)',
                      }
                    }}
                  >
                    PORTFOLIO
                  </Typography>
                </HashLink>
              </motion.div>

              {/* Desktop Navigation */}
              <Box
                sx={{ display: { xs: 'none', md: 'flex' } }}
                component={motion.div}
                variants={navVariants}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <NavButton to={item.path} isMobile={false}>
                      {item.name}
                    </NavButton>
                  </motion.div>
                ))}
              </Box>

              {/* Mobile Navigation Toggle */}
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <NeoBrutalMenuButton 
                  onClick={handleDrawerToggle} 
                  isOpen={mobileOpen}
                />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: alpha(theme.palette.background.paper, 0.97),
          },
        }}
      >
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            >
              {drawer}
            </motion.div>
          )}
        </AnimatePresence>
      </Drawer>
    </>
  );
};

export default Navbar; 