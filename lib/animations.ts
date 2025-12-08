// Framer Motion animation variants

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
};

export const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
};

export const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
};

export const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
};

export const slideInUp = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
};

export const slideInDown = {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
};

// Stagger children animation
export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

// Hover animations
export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.2 },
};

export const hoverGlow = {
    boxShadow: "0 0 30px rgba(0, 255, 255, 0.4)",
    transition: { duration: 0.3 },
};

// Tilt animation for cards
export const tiltAnimation = {
    rotateX: 0,
    rotateY: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
};

// Page transition
export const pageTransition = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.3 },
};
