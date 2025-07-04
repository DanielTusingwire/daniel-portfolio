// Application constants

// Navigation
export const NAV_ITEMS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
];

// Social Media Links
export const SOCIAL_LINKS = {
    linkedin: 'https://linkedin.com/in/danieltusingwire',
    twitter: 'https://twitter.com/danieltusingwire',
    github: 'https://github.com/danieltusingwire',
    dribbble: 'https://dribbble.com/danieltusingwire',
    behance: 'https://behance.net/danieltusingwire'
};

// Contact Information
export const CONTACT_INFO = {
    email: 'daniel@example.com',
    phone: '+256 700 000 000',
    location: 'Kampala, Uganda'
};

// Skills Categories
export const SKILL_CATEGORIES = {
    DESIGN: 'Design',
    DEVELOPMENT: 'Development',
    TOOLS: 'Tools',
    SOFT_SKILLS: 'Soft Skills'
};

// Project Categories
export const PROJECT_CATEGORIES = {
    UX_UI: 'UX/UI Design',
    WEB_DESIGN: 'Web Design',
    MOBILE_DESIGN: 'Mobile Design',
    BRANDING: 'Branding',
    ILLUSTRATION: 'Illustration'
};

// Animation Durations
export const ANIMATION_DURATIONS = {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.5,
    VERY_SLOW: 0.8
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536
};

// Theme Colors
export const THEME_COLORS = {
    PRIMARY: '#22FF88',
    SECONDARY: '#6366f1',
    SUCCESS: '#10b981',
    WARNING: '#f59e0b',
    ERROR: '#ef4444'
};

// Local Storage Keys
export const STORAGE_KEYS = {
    THEME: 'portfolio-theme',
    LANGUAGE: 'portfolio-language',
    USER_PREFERENCES: 'portfolio-preferences'
}; 