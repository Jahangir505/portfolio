export interface Project {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    /** Path under /public. Omit when no real screenshot exists; the UI shows a fallback. */
    image?: string;
    images: string[];
    tags: string[];
    category: "React" | "Node.js" | "Full Stack" | "Mobile" | "AI/ML" | "Client Website";
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
        images: [],
        tags: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
        category: "Full Stack",
        featured: true,
    },
    {
        id: "2",
        title: "AI Content Generator",
        slug: "ai-content-generator",
        description: "AI-powered content generation tool using GPT-4 for creating blog posts, social media content, and more.",
        longDescription: "Leverages OpenAI's GPT-4 API to generate high-quality content. Features include template management, content history, tone customization, and export functionality. Built with React, Node.js, and PostgreSQL.",
        image: "/projects/ai-content.jpg",
        images: [],
        tags: ["React", "Node.js", "OpenAI", "PostgreSQL", "Express"],
        category: "AI/ML",
        featured: true,
    },
    {
        id: "3",
        title: "Real-Time Chat Application",
        slug: "realtime-chat-app",
        description: "WebSocket-based chat application with end-to-end encryption and file sharing capabilities.",
        longDescription: "Real-time messaging platform built with Socket.io and React. Features include group chats, direct messaging, file uploads, emoji reactions, and message encryption. Deployed on AWS with auto-scaling.",
        image: "/projects/chat.jpg",
        images: [],
        tags: ["React", "Socket.io", "Node.js", "Redis", "AWS"],
        category: "Full Stack",
        featured: true,
    },
    {
        id: "4",
        title: "Task Management Dashboard",
        slug: "task-management-dashboard",
        description: "Kanban-style task management tool with team collaboration features and analytics.",
        longDescription: "Project management solution with drag-and-drop interface, team collaboration, time tracking, and detailed analytics. Built with React, TypeScript, and Firebase for real-time updates.",
        images: [],
        tags: ["React", "TypeScript", "Firebase", "Material-UI"],
        category: "React",
        featured: false,
    },
    {
        id: "5",
        title: "Fitness Tracking Mobile App",
        slug: "fitness-tracking-app",
        description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
        longDescription: "Built with React Native and Expo. Features include workout logging, nutrition tracking, progress charts, social sharing, and integration with health APIs. Supports both iOS and Android.",
        images: [],
        tags: ["React Native", "Expo", "TypeScript", "Firebase"],
        category: "Mobile",
        featured: false,
    },
    {
        id: "6",
        title: "RESTful API Service",
        slug: "restful-api-service",
        description: "Scalable RESTful API with authentication, rate limiting, and comprehensive documentation.",
        longDescription: "Enterprise-grade API built with Node.js, Express, and PostgreSQL. Includes JWT authentication, role-based access control, rate limiting, caching with Redis, and auto-generated Swagger documentation.",
        images: [],
        tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
        category: "Node.js",
        featured: false,
    },
    // Live client sites listed on the CV. TODO: add screenshots (public/projects/<slug>.jpg)
    // and the actual tech stack for each.
    {
        id: "7",
        title: "Top Brand Outlet",
        slug: "top-brand-outlet",
        description: "An e-commerce platform offering branded products with a focus on user experience and performance.",
        longDescription: "Top Brand Outlet is an online store for branded products. The work focused on a smooth shopping experience and fast page loads.",
        images: [],
        tags: [],
        category: "Client Website",
        liveUrl: "https://topbrandoutlet.co.uk/",
        featured: false,
    },
    {
        id: "8",
        title: "Connexus IT",
        slug: "connexus-it",
        description: "A professional IT services website showcasing the company's offerings and expertise.",
        longDescription: "Company website for Connexus IT, presenting the company's IT services and expertise to prospective clients.",
        images: [],
        tags: [],
        category: "Client Website",
        liveUrl: "https://connexusit.ie/",
        featured: false,
    },
    {
        id: "9",
        title: "Ummahsoft Ltd",
        slug: "ummahsoft-ltd",
        description: "A software development company website highlighting their services and portfolio.",
        longDescription: "Company website for Ummahsoft Ltd, a software development company, highlighting its services and portfolio of work.",
        images: [],
        tags: [],
        category: "Client Website",
        liveUrl: "https://ummahsoftltd.com/",
        featured: false,
    },
];
