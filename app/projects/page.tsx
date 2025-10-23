import type { Metadata } from "next";
import ProjectsContent from '@/components/projects/ProjectsContent';

export const metadata: Metadata = {
  title: "Projects",
  description: "Featured projects by Hà Tấn Phát: TechSwap marketplace, SnapLink photography platform, POS system. Built with React, TypeScript, Node.js, MongoDB.",
};

export default function Projects() {
  return <ProjectsContent />;
}