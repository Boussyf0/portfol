import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Chip, alpha, useTheme, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { CERTIFICATIONS } from '../data/constants';

const Certifications = () => {
    const theme = useTheme();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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

    // Helper to handle paths with base URL
    const getAssetPath = (path) => {
        if (!path) return null;
        if (path.startsWith('http')) return path;
        const baseUrl = import.meta.env.BASE_URL;
        // Remove leading slash if present to avoid double slash with base url
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        return `${baseUrl}${cleanPath}`;
    };

    // Duplicate certifications for seamless looping
    const duplicatedCertifications = [...CERTIFICATIONS, ...CERTIFICATIONS];

    return (
        <Box sx={{ mt: 10, mb: 6, overflow: 'hidden', position: 'relative' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 6,
                    justifyContent: 'center'
                }}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <WorkspacePremiumIcon
                    sx={{
                        fontSize: 40,
                        color: 'primary.main',
                        mr: 2,
                        filter: `drop-shadow(0 4px 8px ${alpha(theme.palette.primary.main, 0.3)})`
                    }}
                />
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        textAlign: 'center',
                    }}
                >
                    Certifications
                </Typography>
            </Box>

            {/* Gradient Masks for smooth fade effect */}
            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '100px',
                    background: `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
                    zIndex: 2,
                    pointerEvents: 'none'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: '100px',
                    background: `linear-gradient(to left, ${theme.palette.background.default}, transparent)`,
                    zIndex: 2,
                    pointerEvents: 'none'
                }}
            />

            <Box
                component={motion.div}
                sx={{
                    display: 'flex',
                    gap: 4,
                    width: 'max-content',
                    px: 2
                }}
                animate={{
                    x: ["0%", "-50%"]
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear"
                    }
                }}
                whileHover={{ animationPlayState: 'paused' }} // Note: Framer motion doesn't support animationPlayState directly like this, but we can use hover to control speed or pause if we used state. For simple continuous scroll, we'll stick to the loop.
            >
                {duplicatedCertifications.map((cert, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 350,
                            flexShrink: 0
                        }}
                    >
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 4,
                                bgcolor: 'background.paper',
                                border: '1px solid',
                                borderColor: theme => alpha(theme.palette.divider, 0.1),
                                boxShadow: theme => `0 4px 20px ${alpha(theme.palette.common.black, theme.palette.mode === 'dark' ? 0.2 : 0.05)}`,
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: theme => `0 12px 30px ${alpha(theme.palette.primary.main, 0.15)}`,
                                    borderColor: 'primary.main',
                                }
                            }}
                        >
                            {/* Decorative top bar */}
                            <Box
                                sx={{
                                    height: 6,
                                    background: theme => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                                }}
                            />

                            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                    <Box
                                        sx={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: 2,
                                            bgcolor: cert.logo ? 'transparent' : alpha(theme.palette.primary.main, 0.1),
                                            color: 'primary.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            p: cert.logo ? 0.5 : 1,
                                            border: '1px solid',
                                            borderColor: theme => alpha(theme.palette.divider, 0.1)
                                        }}
                                    >
                                        {cert.logo ? (
                                            <Box
                                                component="img"
                                                src={getAssetPath(cert.logo)}
                                                alt={cert.issuer}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                        ) : (
                                            <VerifiedUserIcon fontSize="large" />
                                        )}
                                    </Box>
                                    <Chip
                                        label={cert.date}
                                        size="small"
                                        icon={<CalendarTodayIcon sx={{ fontSize: '0.9rem !important' }} />}
                                        sx={{
                                            bgcolor: alpha(theme.palette.text.secondary, 0.1),
                                            fontWeight: 500
                                        }}
                                    />
                                </Box>

                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, lineHeight: 1.3, minHeight: 54 }}>
                                    {cert.title}
                                </Typography>

                                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                                    Issued by: <Box component="span" sx={{ color: 'text.primary', fontWeight: 500, ml: 0.5 }}>{cert.issuer}</Box>
                                </Typography>

                                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {cert.skills.slice(0, 3).map((skill, idx) => (
                                        <Chip
                                            key={idx}
                                            label={skill}
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                fontSize: '0.7rem',
                                                borderColor: alpha(theme.palette.primary.main, 0.3),
                                                color: 'text.secondary'
                                            }}
                                        />
                                    ))}
                                    {cert.skills.length > 3 && (
                                        <Chip
                                            label={`+${cert.skills.length - 3}`}
                                            size="small"
                                            variant="outlined"
                                            sx={{ fontSize: '0.7rem' }}
                                        />
                                    )}
                                </Box>
                            </CardContent>

                            <CardActions sx={{ p: 3, pt: 0 }}>
                                <Button
                                    component="a"
                                    href={getAssetPath(cert.link)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fullWidth
                                    variant="outlined"
                                    endIcon={<OpenInNewIcon />}
                                    sx={{
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        borderColor: alpha(theme.palette.primary.main, 0.5),
                                        color: 'primary.main',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            bgcolor: alpha(theme.palette.primary.main, 0.05),
                                        }
                                    }}
                                >
                                    View Certificate
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Certifications;
