import type { Metadata } from "next";
import Hero from '@/components/home/Hero';
import Skills from '@/components/home/Skills'

export const metadata: Metadata = {
  title: "Home",
  description: "Hà Tấn Phát - Full Stack Developer with expertise in React.js, TypeScript, Node.js. View my projects and get in touch.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
    </main>
  );
}