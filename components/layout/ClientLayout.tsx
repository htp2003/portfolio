'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from './Navbar';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <ThemeProvider>
        <Navbar />
        {children}
    </ThemeProvider>;
}