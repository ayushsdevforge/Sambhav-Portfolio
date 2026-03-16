/**
 * Centralized Framer Motion Animation Variants
 * 
 * This file contains all reusable animation variants for consistent
 * animations throughout the portfolio application.
 */

/* ===================== */
/* Viewport Configuration */
/* ===================== */
export const viewportConfig = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -100px 0px"
};

/* ===================== */
/* Basic Fade Animations */
/* ===================== */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const fadeRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

/* ===================== */
/* Hero Section Animations */
/* ===================== */
export const heroTitle = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const heroSubtitle = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const heroCTA = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const heroImage = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }
  }
};

/* ===================== */
/* Section Heading */
/* ===================== */
export const sectionHeading = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

/* ===================== */
/* Card Animations */
/* ===================== */
export const cardFadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const cardScale = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const cardSlideIn = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

/* ===================== */
/* Project Cards */
/* ===================== */
export const projectCard = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const projectCardHover = {
  y: -5,
  transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }
};

/* ===================== */
/* Certification Cards (FIXED) */
/* ===================== */
export const certificationCard = {
  hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

/* ===================== */
/* Experience / Timeline */
/* ===================== */
export const experienceCard = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const timelineItem = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const timelineDot = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }
  }
};

/* ===================== */
/* Stat Cards (FIXED) */
/* ===================== */
export const statCard = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

/* ===================== */
/* Skills */
/* ===================== */
export const skillCard = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const skillTag = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }
  }
};

/* ===================== */
/* Stagger Containers */
/* ===================== */
export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

export const staggerFast = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

export const staggerSlow = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

/* ===================== */
/* Special Effects */
/* ===================== */
export const scaleIn = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export const blurIn = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6 }
  }
};

/* ===================== */
/* Form Animations */
/* ===================== */
export const formField = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

/* ===================== */
/* Hover Effects */
/* ===================== */
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeOut" }
};

export const hoverLift = {
  y: -5,
  transition: { duration: 0.3, ease: "easeOut" }
};

/* ===================== */
/* Utility Functions */
/* ===================== */
export const createStagger = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren, delayChildren }
  }
});

export const createFade = (direction = "up", distance = 20, duration = 0.5) => {
  const axis = direction === "up" || direction === "down" ? "y" : "x";
  const value = direction === "up" || direction === "left" ? distance : -distance;

  return {
    hidden: { opacity: 0, [axis]: value },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: { duration, ease: "easeOut" }
    }
  };
};

export const createScale = (initialScale = 0.8, duration = 0.5) => ({
  hidden: { opacity: 0, scale: initialScale },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, ease: "easeOut" }
  }
});
