'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { projectsData } from '@/data/projects';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';

export default function Projects() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <main className="min-h-screen pt-32 pb-20 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1
                        className="text-5xl lg:text-6xl font-bold mb-6"
                        style={{ color: isDark ? '#ffffff' : '#111827' }}
                    >
                        Featured Projects
                    </h1>
                    <p
                        className="text-xl max-w-2xl mx-auto"
                        style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
                    >
                        A collection of full-stack applications showcasing my skills in React, Node.js, and modern web technologies
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isDark={isDark}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

// Project Card Component
function ProjectCard({
    project,
    index,
    isDark
}: {
    project: any;
    index: number;
    isDark: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass rounded-3xl overflow-hidden group"
            style={{
                backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                borderColor: isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.5)',
            }}
        >
            {/* Project Image */}
            <div className="w-full h-48 relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title & Year */}
                <div className="flex items-start justify-between mb-3">
                    <h3
                        className="text-2xl font-bold"
                        style={{ color: isDark ? '#f3f4f6' : '#1f2937' }}
                    >
                        {project.title}
                    </h3>
                    <span
                        className="text-sm px-3 py-1 rounded-full"
                        style={{
                            backgroundColor: isDark ? 'rgba(55, 65, 81, 0.8)' : 'rgba(243, 244, 246, 0.8)',
                            color: isDark ? '#9ca3af' : '#6b7280',
                        }}
                    >
                        {project.year}
                    </span>
                </div>

                {/* Description */}
                <p
                    className="mb-4 line-clamp-2"
                    style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
                >
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech: string) => (
                        <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full font-medium"
                            style={{
                                backgroundColor: isDark ? 'rgba(55, 65, 81, 0.6)' : 'rgba(229, 231, 235, 0.8)',
                                color: isDark ? '#e5e7eb' : '#374151',
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span
                            className="text-xs px-3 py-1 rounded-full font-medium"
                            style={{
                                backgroundColor: isDark ? 'rgba(55, 65, 81, 0.6)' : 'rgba(229, 231, 235, 0.8)',
                                color: isDark ? '#9ca3af' : '#6b7280',
                            }}
                        >
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    {project.liveDemo && (
                        <motion.a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all"
                            style={{
                                backgroundColor: isDark ? '#f3f4f6' : '#111827',
                                color: isDark ? '#111827' : '#ffffff',
                            }}
                        >
                            <FiExternalLink />
                            Live Demo
                        </motion.a>
                    )}
                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium border transition-all"
                            style={{
                                borderColor: isDark ? '#4b5563' : '#d1d5db',
                                color: isDark ? '#f3f4f6' : '#111827',
                            }}
                        >
                            <FiGithub />
                            {!project.liveDemo && 'GitHub'}
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}