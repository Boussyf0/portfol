import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Chip, 
  Stack,
  CardMedia,
  CardActionArea,
  Modal,
  IconButton,
  useTheme,
  useMediaQuery,
  Backdrop,
  Divider,
  Grid,
  alpha
} from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { PROJECTS } from '../data/constants';
import SectionTitle from './UI/SectionTitle';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';

// Filter projects by featured status
const featuredProjects = PROJECTS.filter(project => project.featured);
const regularProjects = PROJECTS.filter(project => !project.featured);

// Project image placeholders based on technologies
// You can customize this function to use your own images by:
// 1. Adding local images to your assets folder and replacing URLs with paths like "src/assets/llm-project.jpg"
// 2. Or keeping these Unsplash image URLs or replacing with your preferred online images
const getProjectImage = (technologies) => {
  // Priority order for determining the image
  if (technologies.includes('LLMs')) {
    return 'https://images.unsplash.com/photo-1701174256478-58aa23e23db0?q=80&w=1974&auto=format&fit=crop';
  } else if (technologies.includes('Healthcare Analytics') || technologies.includes('Health_Trackr')) {
    return 'src/assets/image.png';
  } else if (technologies.includes('TensorFlow') || technologies.includes('PyTorch')) {
    return 'src/assets/image_el.png';
  } else if (technologies.includes('Apache Spark')) {
    return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop';
  } else if (technologies.includes('AWS')) {
    return 'https://images.unsplash.com/photo-1609429019987-8fa5a0c7d165?q=80&w=1964&auto=format&fit=crop';
  } else if (technologies.includes('Python')) {
    return 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?q=80&w=1974&auto=format&fit=crop';
  } else if (technologies.includes('C#')) {
    return 'src/assets/chesse_1.jpeg';
  } else {
    return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1772&auto=format&fit=crop';
  }
};

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // Animation variants
  const containerVariants = {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <Box 
      component="section" 
      id="projects" 
      sx={{ 
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background patterns */}
      <Box 
        sx={{ 
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: { xs: 200, md: 400 },
          height: { xs: 200, md: 400 },
          borderTopLeftRadius: '100%',
          background: 'radial-gradient(circle at bottom right, rgba(67, 97, 238, 0.05), transparent 70%)',
          zIndex: -1,
        }}
      />
      
      <Container maxWidth="lg">
        <SectionTitle title="Projects" />
        
        {/* Featured Projects Section */}
        <Box sx={{ mb: 8 }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: 4,
              gap: 1
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <StarIcon sx={{ color: theme.palette.secondary.main }} />
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 600,
                background: theme.customGradients.secondary,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Featured Projects
            </Typography>
          </Box>
          
          <Grid 
            container 
            spacing={3}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredProjects.map((project) => (
              <Grid 
                item 
                xs={12} 
                md={6} 
                key={project.id}
                component={motion.div}
                variants={itemVariants}
              >
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    background: alpha(theme.palette.background.paper, 0.8),
                    backdropFilter: 'blur(10px)',
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                    },
                  }}
                >
                  <CardActionArea onClick={() => handleOpen(project)}>
                    <CardMedia
                      component="img"
                      height={200}
                      image={getProjectImage(project.technologies)}
                      alt={project.title}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          background: theme.customGradients.primary,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ mb: 2 }}
                      >
                        {project.desc}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip 
                            key={tech} 
                            label={tech} 
                            size="small" 
                            color="primary" 
                            variant="outlined" 
                            sx={{ 
                              background: 'rgba(67, 97, 238, 0.05)',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                  <Divider />
                  <CardActions sx={{ p: 2 }}>
                    <MuiLink href={project.link} target="_blank" underline="none">
                      <Button 
                        startIcon={<GitHubIcon />}
                        variant="outlined"
                        color="primary"
                        size="small"
                        sx={{ borderRadius: 6 }}
                      >
                        GitHub
                      </Button>
                    </MuiLink>
                    <Button 
                      size="small" 
                      onClick={() => handleOpen(project)}
                      sx={{ ml: 'auto' }}
                    >
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        {/* Other Projects Section */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600,
              mb: 4
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Other Projects
          </Typography>
          
          <Box
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {isMobile ? (
              // Stack layout for mobile
              <Stack spacing={3}>
                {regularProjects.map((proj) => (
                  <ProjectCard 
                    key={proj.id} 
                    project={proj} 
                    onOpen={handleOpen} 
                    variants={itemVariants}
                  />
                ))}
              </Stack>
            ) : (
              // Masonry layout for desktop
              <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
                {regularProjects.map((proj) => (
                  <Box
                    component={motion.div}
                    key={proj.id}
                    variants={itemVariants}
                  >
                    <ProjectCard project={proj} onOpen={handleOpen} />
                  </Box>
                ))}
              </Masonry>
            )}
          </Box>
        </Box>
      </Container>
      
      {/* Project Detail Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          sx={{
            position: 'relative',
            width: { xs: '90%', sm: '80%', md: '70%' },
            maxWidth: 800,
            maxHeight: '90vh',
            overflow: 'auto',
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 24,
            p: { xs: 2, sm: 4 },
          }}
        >
          {selectedProject && (
            <>
              <IconButton
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  zIndex: 1,
                  color: 'text.secondary',
                }}
              >
                <CloseIcon />
              </IconButton>
              
              <CardMedia
                component="img"
                height="240"
                image={getProjectImage(selectedProject.technologies)}
                alt={selectedProject.title}
                sx={{ borderRadius: 2, mb: 3 }}
              />
              
              <Typography variant="h4" component="h2" gutterBottom>
                {selectedProject.title}
              </Typography>
              
              <Typography variant="body1" paragraph>
                {selectedProject.desc}
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Technologies Used
              </Typography>
              
              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
                {selectedProject.technologies.map((tech) => (
                  <Chip 
                    key={tech} 
                    label={tech} 
                    color="primary" 
                    variant="outlined" 
                  />
                ))}
              </Stack>
              
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<GitHubIcon />}
                  href={selectedProject.link}
                  target="_blank"
                >
                  View on GitHub
                </Button>
                {selectedProject.demoLink && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<LaunchIcon />}
                    href={selectedProject.demoLink}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                )}
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

// Project Card Component
const ProjectCard = ({ project, onOpen, variants }) => {
  const theme = useTheme();
  
  return (
    <Card
      component={motion.div}
      variants={variants}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 } 
      }}
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: 320,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CardActionArea onClick={() => onOpen(project)}>
        <CardMedia
          component="img"
          height="160"
          image={getProjectImage(project.technologies)}
          alt={project.title}
        />
        <CardContent sx={{ flexGrow: 1, pb: 1 }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              background: theme.customGradients.primary,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {project.desc}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
            {project.technologies.slice(0, 3).map((tech) => (
              <Chip 
                key={tech} 
                label={tech} 
                size="small" 
                color="primary" 
                variant="outlined" 
                sx={{ 
                  background: 'rgba(67, 97, 238, 0.05)',
                  fontWeight: 500,
                  fontSize: '0.7rem',
                }}
              />
            ))}
            {project.technologies.length > 3 && (
              <Chip 
                label={`+${project.technologies.length - 3}`} 
                size="small" 
                sx={{ 
                  background: 'rgba(67, 97, 238, 0.05)',
                  fontWeight: 500,
                  fontSize: '0.7rem',
                }}
              />
            )}
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 2, pt: 0 }}>
        <MuiLink href={project.link} target="_blank" underline="none">
          <Button 
            size="small" 
            startIcon={<GitHubIcon />}
            sx={{ borderRadius: 6, textTransform: 'none' }}
          >
            GitHub
          </Button>
        </MuiLink>
        <Button 
          size="small" 
          onClick={() => onOpen(project)}
          sx={{ ml: 'auto', borderRadius: 6, textTransform: 'none' }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default Projects; 