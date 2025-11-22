import { useMediaQuery } from '@mui/material';

/**
 * Hook to detect if user prefers reduced motion or is on a mobile device
 * Returns true if animations should be simplified
 */
export const useReducedMotion = () => {
    // Check system preference for reduced motion
    const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

    // Check if device is mobile (small screen or touch-only)
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isTouchDevice = useMediaQuery('(pointer: coarse)');

    return prefersReducedMotion || isMobile || isTouchDevice;
};

/**
 * Get animation variants based on reduced motion preference
 */
export const getAnimationVariants = (shouldReduce) => {
    if (shouldReduce) {
        // Simplified animations for mobile/reduced motion
        return {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
            transition: { duration: 0.2 }
        };
    }

    // Full animations for desktop
    return {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };
};
