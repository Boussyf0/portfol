import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Link as MuiLink,
  Button,
  TextField,
  Grid,
  Paper,
  useTheme,
  alpha,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SOCIAL_LINKS } from '../data/constants';
import SectionTitle from './UI/SectionTitle';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';

const Contact = () => {
  const theme = useTheme();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Loading state
  const [loading, setLoading] = useState(false);

  // Notification state
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setNotification({
        open: true,
        message: 'Please fix the errors in the form',
        severity: 'error'
      });
      return;
    }

    // Check if EmailJS is configured
    if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
      setNotification({
        open: true,
        message: 'EmailJS is not configured yet. Please check the setup instructions.',
        severity: 'warning'
      });
      return;
    }

    setLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Success
      setNotification({
        open: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        severity: 'success'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setNotification({
        open: true,
        message: 'Failed to send message. Please try again or contact me directly via email.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle notification close
  const handleCloseNotification = () => {
    setNotification(prev => ({
      ...prev,
      open: false
    }));
  };
  
  // Common styles for form fields
  const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme => theme.palette.mode === 'dark' 
        ? alpha(theme.palette.background.paper, 0.6)
        : alpha(theme.palette.background.paper, 0.8),
      '&:hover': {
        backgroundColor: theme => theme.palette.mode === 'dark'
          ? alpha(theme.palette.background.paper, 0.8)
          : alpha(theme.palette.background.paper, 0.9),
      },
      '& fieldset': {
        borderColor: theme => theme.palette.mode === 'dark'
          ? alpha(theme.palette.common.white, 0.2)
          : alpha(theme.palette.common.black, 0.2),
      },
    },
    '& .MuiInputLabel-root': {
      color: 'text.primary',
    },
    '& .MuiOutlinedInput-input': {
      color: 'text.primary',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'primary.main',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'primary.main',
    },
  };
  
  return (
    <Box 
      component="section" 
      id="contact" 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: theme => theme.palette.mode === 'dark'
          ? 'linear-gradient(180deg, rgba(99, 102, 241, 0.15) 0%, rgba(236, 72, 153, 0.1) 100%)'
          : 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, rgba(236, 72, 153, 0.05) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <Box 
        sx={{ 
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: { xs: 150, md: 250 },
          height: { xs: 150, md: 250 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0) 70%)',
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      />
      
      <Box 
        sx={{ 
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: { xs: 130, md: 200 },
          height: { xs: 130, md: 200 },
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(236, 72, 153, 0) 70%)',
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionTitle title="Contact" align="center" />
        
        <Grid 
          container 
          spacing={4} 
          justifyContent="center" 
          alignItems="stretch"
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {/* Contact Info Card */}
          <Grid item xs={12} md={5}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%',
                background: theme => theme.palette.mode === 'dark'
                  ? alpha(theme.palette.background.paper, 0.7)
                  : 'rgba(241, 245, 249, 0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid',
                borderColor: theme => theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.1)
                  : alpha(theme.palette.common.black, 0.1),
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Typography 
                  variant="h5" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    mb: 3,
                    color: 'primary.main',
                  }}
                >
                  Get In Touch
                </Typography>
                
                <Typography variant="body1" paragraph sx={{ color: 'text.primary' }}>
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </Typography>
                
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2, 
                    mb: 2,
                    '& svg': {
                      color: 'primary.main',
                    }
                  }}
                >
                  <EmailIcon />
                  <MuiLink 
                    href={`mailto:${SOCIAL_LINKS.email}`} 
                    color="text.primary"
                    sx={{ 
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: 'primary.main',
                      }
                    }}
                  >
                    {SOCIAL_LINKS.email}
                  </MuiLink>
                </Box>
                
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    mb: 3,
                    '& svg': {
                      color: 'primary.main',
                    }
                  }}
                >
                  <LocationOnIcon />
                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    Morocco
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
                  Connect with me
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton 
                    href={SOCIAL_LINKS.github} 
                    target="_blank" 
                    aria-label="GitHub"
                    sx={{ 
                      background: 'rgba(99, 102, 241, 0.15)',
                      color: 'primary.dark',
                      transition: 'all 0.2s',
                      '&:hover': {
                        background: 'primary.main',
                        color: '#fff',
                        transform: 'translateY(-3px)',
                      }
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton 
                    href={SOCIAL_LINKS.linkedin} 
                    target="_blank" 
                    aria-label="LinkedIn"
                    sx={{ 
                      background: 'rgba(99, 102, 241, 0.15)',
                      color: 'primary.dark',
                      transition: 'all 0.2s',
                      '&:hover': {
                        background: 'primary.main',
                        color: '#fff',
                        transform: 'translateY(-3px)',
                      }
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
          
          {/* Contact Form Card */}
          <Grid item xs={12} md={7}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                background: theme => theme.palette.mode === 'dark'
                  ? alpha(theme.palette.background.paper, 0.7)
                  : 'rgba(241, 245, 249, 0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid',
                borderColor: theme => theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.1)
                  : alpha(theme.palette.common.black, 0.1),
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  mb: 3,
                  color: 'secondary.main',
                }}
              >
                Send Me a Message
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="name"
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      variant="outlined"
                      sx={textFieldStyles}
                      disabled={loading}
                      InputLabelProps={{
                        sx: { color: 'text.primary' }
                      }}
                      InputProps={{
                        sx: { color: 'text.primary' }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      variant="outlined"
                      sx={textFieldStyles}
                      disabled={loading}
                      InputLabelProps={{
                        sx: { color: 'text.primary' }
                      }}
                      InputProps={{
                        sx: { color: 'text.primary' }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="subject"
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      variant="outlined"
                      sx={textFieldStyles}
                      disabled={loading}
                      InputLabelProps={{
                        sx: { color: 'text.primary' }
                      }}
                      InputProps={{
                        sx: { color: 'text.primary' }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="message"
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      variant="outlined"
                      sx={textFieldStyles}
                      disabled={loading}
                      InputLabelProps={{
                        sx: { color: 'text.primary' }
                      }}
                      InputProps={{
                        sx: { color: 'text.primary' }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={loading}
                      endIcon={loading ? <CircularProgress size={20} sx={{ color: '#fff' }} /> : <SendIcon />}
                      sx={{
                        mt: 2,
                        py: 1.5,
                        px: 4,
                        borderRadius: 8,
                        color: 'primary.contrastText',
                        boxShadow: theme => `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                        background: theme.customGradients.primary,
                        '&:hover': {
                          background: theme.customGradients.primary,
                          transform: 'translateY(-2px)',
                          boxShadow: theme => `0 12px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                        },
                        '&:disabled': {
                          background: theme => alpha(theme.palette.primary.main, 0.5),
                          color: '#fff',
                        }
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseNotification}
          severity={notification.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 