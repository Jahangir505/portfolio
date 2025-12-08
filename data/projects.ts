export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    image: string;
    images: string[];
    tags: string[];
    category: "React" | "Node.js" | "Full Stack" | "Mobile" | "AI/ML";
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "E-Commerce Platform",
        slug: "ecommerce-platform",
        description: "A full-stack e-commerce platform with real-time inventory management and payment processing.",
        longDescription: "Built with Next.js 14, TypeScript, and MongoDB. Features include real-time inventory tracking, Stripe payment integration, admin dashboard, and advanced product filtering. Implemented server-side rendering for optimal SEO and performance.",
        image: "/projects/ecommerce.jpg",
        images: ["/projects/ecommerce-1.jpg", "/projects/ecommerce-2.jpg", "/projects/ecommerce-3.jpg"],
        tags: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
        category: "Full Stack",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: "2",
        title: "AI Content Generator",
        slug: "ai-content-generator",
        description: "AI-powered content generation tool using GPT-4 for creating blog posts, social media content, and more.",
        longDescription: "Leverages OpenAI's GPT-4 API to generate high-quality content. Features include template management, content history, tone customization, and export functionality. Built with React, Node.js, and PostgreSQL.",
        image: "/projects/ai-content.jpg",
        images: ["/projects/ai-1.jpg", "/projects/ai-2.jpg"],
        tags: ["React", "Node.js", "OpenAI", "PostgreSQL", "Express"],
        category: "AI/ML",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: true,
    },
    {
        id: "3",
        title: "Real-Time Chat Application",
        slug: "realtime-chat-app",
        description: "WebSocket-based chat application with end-to-end encryption and file sharing capabilities.",
        longDescription: "Real-time messaging platform built with Socket.io and React. Features include group chats, direct messaging, file uploads, emoji reactions, and message encryption. Deployed on AWS with auto-scaling.",
        image: "/projects/chat.jpg",
        images: ["/projects/chat-1.jpg", "/projects/chat-2.jpg", "/projects/chat-3.jpg"],
        tags: ["React", "Socket.io", "Node.js", "Redis", "AWS"],
        category: "Full Stack",
        liveUrl: "https://example.com",
        featured: true,
    },
    {
        id: "4",
        title: "Task Management Dashboard",
        slug: "task-management-dashboard",
        description: "Kanban-style task management tool with team collaboration features and analytics.",
        longDescription: "Project management solution with drag-and-drop interface, team collaboration, time tracking, and detailed analytics. Built with React, TypeScript, and Firebase for real-time updates.",
        image: "/projects/task-manager.jpg",
        images: ["/projects/task-1.jpg", "/projects/task-2.jpg"],
        tags: ["React", "TypeScript", "Firebase", "Material-UI"],
        category: "React",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com",
        featured: false,
    },
    {
        id: "5",
        title: "Fitness Tracking Mobile App",
        slug: "fitness-tracking-app",
        description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
        longDescription: "Built with React Native and Expo. Features include workout logging, nutrition tracking, progress charts, social sharing, and integration with health APIs. Supports both iOS and Android.",
        image: "/projects/fitness.jpg",
        images: ["/projects/fitness-1.jpg", "/projects/fitness-2.jpg"],
        tags: ["React Native", "Expo", "TypeScript", "Firebase"],
        category: "Mobile",
        githubUrl: "https://github.com",
        featured: false,
    },
    {
        id: "6",
        title: "RESTful API Service",
        slug: "restful-api-service",
        description: "Scalable RESTful API with authentication, rate limiting, and comprehensive documentation.",
        longDescription: "Enterprise-grade API built with Node.js, Express, and PostgreSQL. Includes JWT authentication, role-based access control, rate limiting, caching with Redis, and auto-generated Swagger documentation.",
        image: "/projects/api.jpg",
        images: ["/projects/api-1.jpg"],
        tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
        category: "Node.js",
        githubUrl: "https://github.com",
        featured: false,
    },
];
