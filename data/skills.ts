import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaDocker
} from 'react-icons/fa';
import {
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiMysql,
    SiExpress,
    SiRedux,
    SiSocketdotio,
    SiVercel,
    SiPostman
} from 'react-icons/si';
import { IconType } from 'react-icons';

export interface Skill {
    name: string;
    icon: IconType;
    color: string;
}

export interface SkillCategory {
    category: string;
    skills: Skill[];
}

export const skillsData: SkillCategory[] = [
    {
        category: 'Frontend',
        skills: [
            { name: 'React.js', icon: FaReact, color: '#61DAFB' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'Redux', icon: SiRedux, color: '#764ABC' },
        ],
    },
    {
        category: 'Backend & Database',
        skills: [
            { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
            { name: 'Express.js', icon: SiExpress, color: '#000000' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'Socket.io', icon: SiSocketdotio, color: '#010101' },
        ],
    },
    {
        category: 'Tools & DevOps',
        skills: [
            { name: 'Git', icon: FaGitAlt, color: '#F05032' },
            { name: 'GitHub', icon: FaGithub, color: '#181717' },
            { name: 'Vercel', icon: SiVercel, color: '#000000' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
            { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        ],
    },
];