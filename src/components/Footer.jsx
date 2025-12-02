import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Link, Divider, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { NAV_ITEMS, SOCIAL_LINKS } from '../data/constants';

const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        background: theme.customGradients.primary,
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: 150, md: 300 },
          height: { xs: 150, md: 300 },
          borderBottomLeftRadius: '100%',
          background: 'rgba(255, 255, 255, 0.05)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Abderrahim Boussyf
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, opacity: 0.9 }}>
              A 5th-year Computer Engineering student passionate about solving problems with code. Specializing in AI, data analysis, and software development.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                href={SOCIAL_LINKS.github}
                target="_blank"
                size="small"
                sx={{
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                size="small"
                sx={{
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                href={`mailto:${SOCIAL_LINKS.email}`}
                size="small"
                sx={{
                  color: '#fff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                <EmailIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Box
              component="nav"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'all 0.2s',
                    '&:hover': {
                      opacity: 1,
                      pl: 1,
                    }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </Typography>
            <Link
              href={`mailto:${SOCIAL_LINKS.email}`}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                opacity: 0.8,
                display: 'block',
                mb: 1,
                '&:hover': {
                  opacity: 1,
                }
              }}
            >
              {SOCIAL_LINKS.email}
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 0 },
            width: '100%',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            &copy; {year} Abderrahim Boussyf. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Made with ❤️ using React & Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 