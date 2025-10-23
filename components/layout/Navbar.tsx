'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { motion } from 'framer-motion';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
            <div className="max-w-7xl mx-auto">
                <div className="glass rounded-full px-8 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold hover:scale-105 transition-transform duration-300"
                    >
                        HPT
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-2 relative">
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

                    {/* Theme Toggle */}
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}