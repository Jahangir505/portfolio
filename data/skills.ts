export interface Skill {
    name: string;
    icon: string;
    category: "Frontend" | "Backend" | "Database" | "DevOps" | "Tools";
    proficiency: number; // 0-100
}

export const skills: Skill[] = [
    // Frontend
    { name: "React", icon: "⚛️", category: "Frontend", proficiency: 95 },
    { name: "Next.js", icon: "▲", category: "Frontend", proficiency: 90 },
    { name: "TypeScript", icon: "TS", category: "Frontend", proficiency: 92 },
    { name: "Tailwind CSS", icon: "🎨", category: "Frontend", proficiency: 88 },
    { name: "Vue.js", icon: "💚", category: "Frontend", proficiency: 75 },

    // Backend
    { name: "Node.js", icon: "🟢", category: "Backend", proficiency: 90 },
    { name: "Express", icon: "🚂", category: "Backend", proficiency: 88 },
    { name: "Python", icon: "🐍", category: "Backend", proficiency: 80 },
    { name: "GraphQL", icon: "◈", category: "Backend", proficiency: 75 },

    // Database
    { name: "MongoDB", icon: "🍃", category: "Database", proficiency: 85 },
    { name: "PostgreSQL", icon: "🐘", category: "Database", proficiency: 82 },
    { name: "Redis", icon: "🔴", category: "Database", proficiency: 78 },
    { name: "Firebase", icon: "🔥", category: "Database", proficiency: 80 },

    // DevOps
    { name: "Docker", icon: "🐳", category: "DevOps", proficiency: 85 },
    { name: "AWS", icon: "☁️", category: "DevOps", proficiency: 75 },
    { name: "CI/CD", icon: "🔄", category: "DevOps", proficiency: 80 },
    { name: "Kubernetes", icon: "☸️", category: "DevOps", proficiency: 70 },

    // Tools
    { name: "Git", icon: "📦", category: "Tools", proficiency: 90 },
    { name: "VS Code", icon: "💻", category: "Tools", proficiency: 95 },
    { name: "Figma", icon: "🎨", category: "Tools", proficiency: 75 },
    { name: "Postman", icon: "📮", category: "Tools", proficiency: 85 },
];
