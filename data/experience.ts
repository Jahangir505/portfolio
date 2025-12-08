export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    type: "work" | "education";
    startDate: string;
    endDate: string;
    current: boolean;
    description: string[];
    technologies?: string[];
}

export const experiences: Experience[] = [
    {
        id: "1",
        title: "Senior Full Stack Developer",
        company: "Tech Innovations Inc.",
        location: "San Francisco, CA",
        type: "work",
        startDate: "2022-01",
        endDate: "",
        current: true,
        description: [
            "Led development of microservices architecture serving 1M+ users",
            "Implemented CI/CD pipelines reducing deployment time by 60%",
            "Mentored team of 5 junior developers",
            "Architected real-time features using WebSockets and Redis",
        ],
        technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    },
    {
        id: "2",
        title: "Full Stack Developer",
        company: "Digital Solutions Co.",
        location: "Remote",
        type: "work",
        startDate: "2020-03",
        endDate: "2021-12",
        current: false,
        description: [
            "Built and maintained 10+ client projects using React and Node.js",
            "Improved application performance by 40% through optimization",
            "Integrated third-party APIs and payment gateways",
            "Collaborated with design team to implement pixel-perfect UIs",
        ],
        technologies: ["React", "Next.js", "MongoDB", "Express", "Tailwind CSS"],
    },
    {
        id: "3",
        title: "Junior Web Developer",
        company: "StartUp Labs",
        location: "New York, NY",
        type: "work",
        startDate: "2018-06",
        endDate: "2020-02",
        current: false,
        description: [
            "Developed responsive web applications using React and Vue.js",
            "Participated in agile development process and code reviews",
            "Created RESTful APIs with Node.js and Express",
            "Implemented automated testing with Jest and Cypress",
        ],
        technologies: ["React", "Vue.js", "Node.js", "MySQL"],
    },
    {
        id: "4",
        title: "Bachelor of Science in Computer Science",
        company: "University of Technology",
        location: "Boston, MA",
        type: "education",
        startDate: "2014-09",
        endDate: "2018-05",
        current: false,
        description: [
            "GPA: 3.8/4.0",
            "Focus on Software Engineering and Web Development",
            "Dean's List all semesters",
            "Senior Project: AI-powered recommendation system",
        ],
    },
];
