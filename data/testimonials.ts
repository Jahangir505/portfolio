export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Sarah Johnson",
        role: "CTO",
        company: "Tech Innovations Inc.",
        content: "Jahangir is an exceptional developer who consistently delivers high-quality code. Their ability to architect scalable solutions and mentor junior developers makes them an invaluable team member.",
        avatar: "/avatars/sarah.jpg",
        rating: 5,
    },
    {
        id: "2",
        name: "Michael Chen",
        role: "Product Manager",
        company: "Digital Solutions Co.",
        content: "Working with Jahangir was a pleasure. They have a rare combination of technical expertise and excellent communication skills. Every project was delivered on time and exceeded expectations.",
        avatar: "/avatars/michael.jpg",
        rating: 5,
    },
    {
        id: "3",
        name: "Emily Rodriguez",
        role: "Lead Designer",
        company: "Creative Agency",
        content: "Jahangir brings designs to life with pixel-perfect precision. Their attention to detail and understanding of modern web technologies resulted in stunning, performant applications.",
        avatar: "/avatars/emily.jpg",
        rating: 5,
    },
    {
        id: "4",
        name: "David Park",
        role: "Founder",
        company: "StartUp Labs",
        content: "Jahangir was instrumental in building our MVP. Their full-stack expertise and problem-solving abilities helped us launch quickly and iterate based on user feedback.",
        avatar: "/avatars/david.jpg",
        rating: 5,
    },
];
