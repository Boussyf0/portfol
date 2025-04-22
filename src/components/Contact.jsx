import React from 'react';
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
  useTheme 
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { SOCIAL_LINKS } from '../data/constants';
import SectionTitle from './UI/SectionTitle';
import { motion } from 'framer-motion';

const Contact = () => {
  const theme = useTheme();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // This would typically handle form submission
    // For now, just open the mail client
    window.open(`mailto:${SOCIAL_LINKS.email}`);
  };
  
  return (
    <Box 
      component="section" 
      id="contact" 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, rgba(236, 72, 153, 0.05) 100%)',
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
                background: 'rgba(241, 245, 249, 0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.2)',
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
                    color: theme.palette.primary.main,
                  }}
                >
                  Get In Touch
                </Typography>
                
                <Typography variant="body1" paragraph sx={{ color: '#334155' }}>
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </Typography>
                
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2, 
                    mb: 2,
                    '& svg': {
                      color: theme.palette.primary.main,
                    }
                  }}
                >
                  <EmailIcon />
                  <MuiLink 
                    href={`mailto:${SOCIAL_LINKS.email}`} 
                    color="#334155"
                    sx={{ 
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      '&:hover': {
                        color: theme.palette.primary.main,
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
                      color: theme.palette.primary.main,
                    }
                  }}
                >
                  <LocationOnIcon />
                  <Typography variant="body2" sx={{ color: '#334155' }}>
                    Morocco
                  </Typography>
                </Box>
              </Box>
              
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600, color: '#334155' }}>
                  Connect with me
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton 
                    href={SOCIAL_LINKS.github} 
                    target="_blank" 
                    aria-label="GitHub"
                    sx={{ 
                      background: 'rgba(99, 102, 241, 0.15)',
                      color: theme.palette.primary.dark,
                      transition: 'all 0.2s',
                      '&:hover': {
                        background: theme.palette.primary.main,
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
                      color: theme.palette.primary.dark,
                      transition: 'all 0.2s',
                      '&:hover': {
                        background: theme.palette.primary.main,
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
                background: 'rgba(241, 245, 249, 0.7)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.secondary.main,
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
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        }
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
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        }
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
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        }
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
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ 
                        mt: 2, 
                        py: 1.5, 
                        px: 4,
                        borderRadius: 8,
                        boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)',
                        background: theme.customGradients.primary,
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 