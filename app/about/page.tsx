import type { Metadata } from "next";
import AboutContent from '@/components/about/AboutContent';

export const metadata: Metadata = {
    title: "About",
    description: "Learn about Hà Tấn Phát - Full Stack Developer with 3-month internship at Amazing Tech, 3 production projects, and expertise in React, TypeScript, Node.js.",
};

export default function About() {
    return <AboutContent />;
}