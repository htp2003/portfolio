'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { experienceData, education } from '@/data/experience';
import { FiDownload, FiBriefcase, FiAward } from 'react-icons/fi';

export default function AboutContent() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <main className="min-h-screen pt-32 pb-20 px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h1
                        className="text-5xl lg:text-6xl font-bold mb-6"
                        style={{ color: isDark ? '#ffffff' : '#111827' }}
                    >
                        About Me
                    </h1>
                    <p
                        className="text-xl leading-relaxed mb-8"
                        style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
                    >
                        Full Stack Engineer with hands-on experience building web applications using React.js,
                        TypeScript, Node.js, and Express. Completed 3 production-ready projects featuring payment
                        gateway integration, real-time chat systems, and RESTful APIs serving 100+ users.
                    </p>

                    {/* Download CV Button */}
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
                        style={{
                            backgroundColor: isDark ? '#f3f4f6' : '#111827',
                            color: isDark ? '#111827' : '#ffffff',
                        }}
                    >
                        <FiDownload className="text-xl" />
                        Download CV
                    </motion.a>
                </motion.div>

                {/* Professional Experience */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <FiBriefcase
                            className="text-3xl"
                            style={{ color: isDark ? '#ffffff' : '#111827' }}
                        />
                        <h2
                            className="text-3xl font-bold"
                            style={{ color: isDark ? '#ffffff' : '#111827' }}
                        >
                            Professional Experience
                        </h2>
                    </div>

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="glass rounded-3xl p-8 mb-6"
                            style={{
                                backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                                borderColor: isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.5)',
                            }}
                        >
                            <div className="mb-4">
                                <h3
                                    className="text-2xl font-bold mb-1"
                                    style={{ color: isDark ? '#f3f4f6' : '#1f2937' }}
                                >
                                    {exp.role}
                                </h3>
                                <p
                                    className="text-lg mb-2"
                                    style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                                >
                                    {exp.company} • {exp.period}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {exp.description.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3"
                                        style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
                                    >
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: isDark ? '#9ca3af' : '#6b7280' }}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-full text-sm font-medium"
                                        style={{
                                            backgroundColor: isDark ? 'rgba(55, 65, 81, 0.8)' : 'rgba(243, 244, 246, 0.8)',
                                            color: isDark ? '#e5e7eb' : '#374151',
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.section>

                {/* Education */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <FiAward
                            className="text-3xl"
                            style={{ color: isDark ? '#ffffff' : '#111827' }}
                        />
                        <h2
                            className="text-3xl font-bold"
                            style={{ color: isDark ? '#ffffff' : '#111827' }}
                        >
                            Education
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="glass rounded-3xl p-8"
                        style={{
                            backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                            borderColor: isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.5)',
                        }}
                    >
                        <h3
                            className="text-2xl font-bold mb-1"
                            style={{ color: isDark ? '#f3f4f6' : '#1f2937' }}
                        >
                            {education.degree}
                        </h3>
                        <p
                            className="text-lg mb-4"
                            style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                        >
                            {education.school} • {education.period}
                        </p>
                        <p style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
                            {education.gpa}
                        </p>
                    </motion.div>
                </motion.section>
            </div>
        </main>
    );
}