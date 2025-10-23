'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6">
            <div className="max-w-7xl mx-auto">
                <div className="glass rounded-full px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-xl sm:text-2xl font-bold hover:scale-105 transition-transform duration-300 z-20"
                    >
                        HTP
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-2 relative">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="relative px-6 py-2 rounded-full transition-colors duration-300 z-10"
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-black dark:bg-white rounded-full -z-10"
                                            transition={{
                                                type: 'spring',
                                                stiffness: 350,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    <span className={isActive ? 'text-white dark:text-black' : ''}>
                                        {link.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side - Theme Toggle & Hamburger */}
                    <div className="flex items-center gap-3 sm:gap-4 z-20">
                        <ThemeToggle />

                        {/* Hamburger Menu Button - Mobile Only */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 rounded-full"
                                style={{ backgroundColor: theme === 'dark' ? '#ffffff' : '#000000' }}
                            />
                            <motion.span
                                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-6 h-0.5 rounded-full"
                                style={{ backgroundColor: theme === 'dark' ? '#ffffff' : '#000000' }}
                            />
                            <motion.span
                                animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 rounded-full"
                                style={{ backgroundColor: theme === 'dark' ? '#ffffff' : '#000000' }}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden mt-4 glass rounded-3xl px-4 py-6 flex flex-col gap-2"
                        >
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`relative px-6 py-3 rounded-full transition-colors duration-300 text-center ${isActive
                                                ? 'bg-black dark:bg-white text-white dark:text-black'
                                                : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}