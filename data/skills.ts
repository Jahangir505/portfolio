export interface Skill {
    name: string;
    icon: string;
    category: "Frontend" | "Backend" | "Database" | "DevOps" | "Tools";
    proficiency: number; // 0-100
}

export const skills: Skill[] = [
    // Frontend
    { name: "React", icon: "⚛️", category: "Frontend", proficiency: 95 },
    { name: "Next.js", icon: "▲", category: "Frontend", proficiency: 92 },
    { name: "TypeScript", icon: "TS", category: "Frontend", proficiency: 88 },
    { name: "Tailwind CSS", icon: "🎨", category: "Frontend", proficiency: 90 },
    { name: "React Native", icon: "📱", category: "Frontend", proficiency: 85 },
    { name: "HTML5", icon: "🌐", category: "Frontend", proficiency: 95 },
    { name: "CSS3", icon: "💅", category: "Frontend", proficiency: 93 },
    { name: "JavaScript", icon: "JS", category: "Frontend", proficiency: 94 },

    // Backend
    { name: "Node.js", icon: "🟢", category: "Backend", proficiency: 88 },
    { name: "Laravel", icon: "🔺", category: "Backend", proficiency: 90 },
    { name: "PHP", icon: "🐘", category: "Backend", proficiency: 88 },
    { name: "Express", icon: "🚂", category: "Backend", proficiency: 85 },

    // Database
    { name: "MySQL", icon: "🗄️", category: "Database", proficiency: 90 },
    { name: "MongoDB", icon: "🍃", category: "Database", proficiency: 85 },
    { name: "PostgreSQL", icon: "🐘", category: "Database", proficiency: 82 },

    // DevOps
    { name: "AWS", icon: "☁️", category: "DevOps", proficiency: 85 },
    { name: "Docker", icon: "🐳", category: "DevOps", proficiency: 80 },
    { name: "CI/CD", icon: "🔄", category: "DevOps", proficiency: 82 },
    { name: "Nginx", icon: "🌐", category: "DevOps", proficiency: 78 },

    // Tools
    { name: "Git", icon: "📦", category: "Tools", proficiency: 92 },
    { name: "GitHub", icon: "🐙", category: "Tools", proficiency: 90 },
    { name: "WordPress", icon: "📝", category: "Tools", proficiency: 85 },
    { name: "Redux", icon: "🔄", category: "Tools", proficiency: 87 },
    { name: "Zustand", icon: "🐻", category: "Tools", proficiency: 83 },
    { name: "Webpack", icon: "📦", category: "Tools", proficiency: 80 },
    { name: "Expo", icon: "📲", category: "Tools", proficiency: 85 },
];
