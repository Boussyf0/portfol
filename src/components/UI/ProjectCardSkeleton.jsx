import React from 'react';
import { Card, CardContent, CardActions, Box, Skeleton, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const ProjectCardSkeleton = () => {
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: 320,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Image Skeleton */}
      <Skeleton 
        variant="rectangular" 
        height={160} 
        animation="wave"
        sx={{
          background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%)',
        }}
      />
      
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        {/* Title Skeleton */}
        <Skeleton 
          variant="text" 
          height={32} 
          width="80%" 
          animation="wave"
          sx={{ mb: 1 }}
        />
        
        {/* Description Skeleton */}
        <Skeleton variant="text" height={20} width="100%" animation="wave" />
        <Skeleton variant="text" height={20} width="90%" animation="wave" />
        <Skeleton variant="text" height={20} width="75%" animation="wave" sx={{ mb: 2 }} />
        
        {/* Technology chips skeleton */}
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {[1, 2, 3].map((item) => (
            <Skeleton
              key={item}
              variant="rounded"
              width={60 + Math.random() * 40}
              height={24}
              animation="wave"
              sx={{ borderRadius: 3 }}
            />
          ))}
        </Stack>
      </CardContent>
      
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Skeleton variant="rectangular" width={80} height={32} animation="wave" sx={{ borderRadius: 2 }} />
        <Box sx={{ flexGrow: 1 }} />
        <Skeleton variant="rectangular" width={70} height={32} animation="wave" sx={{ borderRadius: 2 }} />
      </CardActions>
    </Card>
  );
};

export default ProjectCardSkeleton;