'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/skills';
import { useTheme } from '@/context/ThemeContext';

export default function Skills() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="py-20 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-4"
                        style={{ color: isDark ? '#ffffff' : '#111827' }}
                    >
                        Tech Stack
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
                    >
                        Technologies and tools I use to build modern web applications
                    </p>
                </motion.div>

                {/* Skills Categories */}
                <div className="space-y-12">
                    {skillsData.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        >
                            {/* Category Title */}
                            <h3
                                className="text-2xl font-semibold mb-6"
                                style={{ color: isDark ? '#f3f4f6' : '#1f2937' }}
                            >
                                {category.category}
                            </h3>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillCard
                                        key={skill.name}
                                        skill={skill}
                                        index={skillIndex}
                                        isDark={isDark}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Skill Card Component
function SkillCard({
    skill,
    index,
    isDark
}: {
    skill: { name: string; icon: any; color: string };
    index: number;
    isDark: boolean;
}) {
    const Icon = skill.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
                scale: 1.05,
                y: -5,
            }}
            className="glass rounded-2xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer group"
            style={{
                backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.7)',
                borderColor: isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.5)',
            }}
        >
            {/* Icon */}
            <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
            >
                <Icon
                    className="text-5xl transition-colors duration-300"
                    style={{
                        color: skill.color,
                    }}
                />
            </motion.div>

            {/* Skill Name */}
            <span
                className="text-sm font-medium text-center"
                style={{ color: isDark ? '#e5e7eb' : '#374151' }}
            >
                {skill.name}
            </span>
        </motion.div>
    );
}