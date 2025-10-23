export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string[];
    technologies: string[];
}

export const experienceData: Experience[] = [
    {
        role: 'Frontend Developer Intern',
        company: 'Amazing Tech',
        period: 'April 2024 - August 2024',
        description: [
            'Built 15+ responsive UI components for customer dashboard using React.js and JavaScript',
            'Participated in code reviews with 3 senior developers, implementing best practices',
            'Resolved 20+ production bugs, reducing error rates by 30%',
            'Collaborated in agile development team with daily standups and sprint planning',
        ],
        technologies: ['React.js', 'JavaScript', 'HTML/CSS', 'Git'],
    },
];

export const education = {
    degree: 'Bachelor of Software Engineering',
    school: 'FPT University Ho Chi Minh',
    period: '2021 - 2025',
    gpa: 'Expected graduation',
};