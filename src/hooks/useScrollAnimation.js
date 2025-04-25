import { useScroll, useTransform, motion } from "framer-motion";

export function useScrollAnimation(options = {}) {
  const {
    start = 0,
    end = 1,
    yStart = 50,
    yEnd = 0,
    opacityStart = 0,
    opacityEnd = 1,
    scaleStart = 0.95,
    scaleEnd = 1,
  } = options;

  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [start, end], [yStart, yEnd]);
  const opacity = useTransform(scrollYProgress, [start, end], [opacityStart, opacityEnd]);
  const scale = useTransform(scrollYProgress, [start, end], [scaleStart, scaleEnd]);

  return {
    MotionDiv: motion.div,
    style: {
      y,
      opacity,
      scale,
    },
  };
}

export function useScrollFade(options = {}) {
  const {
    start = 0,
    end = 1,
    opacityStart = 0,
    opacityEnd = 1,
  } = options;

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [start, end], [opacityStart, opacityEnd]);

  return {
    MotionDiv: motion.div,
    style: { opacity },
  };
}

export function useScrollScale(options = {}) {
  const {
    start = 0,
    end = 1,
    scaleStart = 0.95,
    scaleEnd = 1,
  } = options;

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [start, end], [scaleStart, scaleEnd]);

  return {
    MotionDiv: motion.div,
    style: { scale },
  };
} 