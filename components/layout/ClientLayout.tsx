'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from './Navbar';
import PageTransition from './PageTransition';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <Navbar />
            <PageTransition>
                {children}
            </PageTransition>
        </ThemeProvider>
    );
}