'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import { useTheme } from '@/context/ThemeContext';

export default function Hero() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="min-h-screen flex items-center justify-center px-8 py-20">
            <div className="max-w-6xl w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                                className="text-lg"
                            >
                                Hi, I'm
                            </motion.p>
                            <h1
                                className="text-6xl lg:text-7xl font-bold"
                                style={{ color: isDark ? '#ffffff' : '#111827' }}
                            >
                                Hà Tấn Phát
                            </h1>
                            <p
                                className="text-2xl lg:text-3xl"
                                style={{ color: isDark ? '#e5e7eb' : '#374151' }}
                            >
                                Full Stack Developer
                            </p>
                        </div>

                        <p
                            className="text-lg max-w-xl leading-relaxed"
                            style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
                        >
                            Building modern web applications with React, TypeScript, and Node.js.
                            Passionate about creating seamless user experiences and scalable solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        backgroundColor: isDark ? '#f3f4f6' : '#111827',
                                        color: isDark ? '#111827' : '#ffffff',
                                    }}
                                    className="px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:shadow-xl transition-all"
                                >
                                    View Projects
                                    <FiArrowRight />
                                </motion.button>
                            </Link>
                            <Link href="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        color: isDark ? '#f3f4f6' : '#111827',
                                        borderColor: isDark ? '#4b5563' : '#d1d5db',
                                    }}
                                    className="glass px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all border-2"
                                >
                                    Contact Me
                                </motion.button>
                            </Link>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <SocialLink href="https://github.com/htp2003" icon={<FiGithub />} label="GitHub" isDark={isDark} />
                            <SocialLink href="https://linkedin.com" icon={<FiLinkedin />} label="LinkedIn" isDark={isDark} />
                            <SocialLink href="mailto:hatanphat1121@gmail.com" icon={<FiMail />} label="Email" isDark={isDark} />
                        </div>
                    </motion.div>

                    {/* Right Content - Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Glass Card Background */}
                            <div className="absolute inset-0 glass rounded-3xl" />

                            {/* Avatar Image */}
                            <div className="relative w-full h-full p-8">
                                <div className="w-full h-full rounded-2xl overflow-hidden">
                                    <img
                                        src="/images/avatar.jpg"
                                        alt="Hà Tấn Phát"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-50"
                            />
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full blur-2xl opacity-50"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Social Link Component
function SocialLink({ href, icon, label, isDark }: { href: string; icon: React.ReactNode; label: string; isDark: boolean }) {
    return (
        <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                color: isDark ? '#f3f4f6' : '#111827',
                borderColor: isDark ? '#4b5563' : '#d1d5db',
            }}
            className="glass w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg transition-all border"
            aria-label={label}
        >
            <span className="text-xl">{icon}</span>
        </motion.a>
    );
}