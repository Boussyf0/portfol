import React, { useEffect, useRef, useState } from 'react';

/**
 * VisibilityWrapper Component
 * Only renders children when component is visible in viewport
 * Improves performance by pausing animations when not visible
 */
const VisibilityWrapper = ({ children, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '50px', // Start loading slightly before visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      {isVisible ? children : null}
    </div>
  );
};

export default VisibilityWrapper;
