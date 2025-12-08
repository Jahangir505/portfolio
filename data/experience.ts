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
        title: "Full-Stack Developer",
        company: "Combosoft Ltd",
        location: "Dhaka, Bangladesh",
        type: "work",
        startDate: "2023-02",
        endDate: "",
        current: true,
        description: [
            "Spearhead a technical team, overseeing project timelines, and ensuring best practices in development",
            "Manage cloud infrastructure and server deployment using AWS to ensure scalable and secure systems",
            "Continuously research and implement emerging web technologies to improve product efficiency and functionality",
            "Lead efforts to maintain, upgrade, and improve existing codebases while mentoring junior developers",
        ],
        technologies: ["React", "Next.js", "Laravel", "Node.js", "AWS", "MySQL", "MongoDB"],
    },
    {
        id: "2",
        title: "Front-End Developer",
        company: "Glostars",
        location: "Finland (Remote)",
        type: "work",
        startDate: "2021-02",
        endDate: "2023-04",
        current: false,
        description: [
            "Led the front-end team to create a smooth and engaging user interface, focusing on user experience and accessibility",
            "Utilized Tailwind CSS for efficient, responsive, and customizable UI design",
            "Managed deployment pipelines and infrastructure on AWS, ensuring smooth and reliable rollouts of new features",
            "Worked closely with cross-functional teams to ensure seamless integration of front-end and back-end systems",
        ],
        technologies: ["React", "Next.js", "Tailwind CSS", "AWS", "JavaScript"],
    },
    {
        id: "3",
        title: "Full-Stack Developer",
        company: "eDorpon Ltd",
        location: "Dhaka, Bangladesh",
        type: "work",
        startDate: "2020-08",
        endDate: "2022-05",
        current: false,
        description: [
            "Developed and maintained dynamic, data-driven applications using PHP (Laravel), MySQL, and JavaScript",
            "Designed and implemented custom websites with ReactJS and Next.js, improving load times and user experience",
            "Built mobile applications with React Native and Expo, contributing to seamless mobile experiences",
            "Integrated RESTful APIs to enhance app features and support various device functionalities",
        ],
        technologies: ["Laravel", "React", "Next.js", "React Native", "MySQL", "Expo"],
    },
    {
        id: "4",
        title: "Bachelor of Science in Computer Science and Engineering",
        company: "Uttara University",
        location: "Dhaka, Bangladesh",
        type: "education",
        startDate: "2019-05",
        endDate: "2022-09",
        current: false,
        description: [
            "GPA: 3.53/4.00",
            "Focus on Software Engineering and Web Development",
            "Completed comprehensive coursework in algorithms, data structures, and system design",
        ],
    },
    {
        id: "5",
        title: "Diploma in Computer Science",
        company: "Narsingdi Polytechnic Institute",
        location: "Narsingdi, Bangladesh",
        type: "education",
        startDate: "2014-01",
        endDate: "2018-12",
        current: false,
        description: [
            "Completed comprehensive diploma program in Computer Science",
            "Gained foundational knowledge in programming, databases, and web technologies",
            "Developed practical skills in software development and system administration",
        ],
    },
];
