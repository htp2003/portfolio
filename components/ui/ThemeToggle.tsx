'use client';

import { useTheme } from '@/context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <FiSun className="w-5 h-5 text-yellow-500" />
            ) : (
                <FiMoon className="w-5 h-5 text-blue-400" />
            )}
        </button>
    );
}