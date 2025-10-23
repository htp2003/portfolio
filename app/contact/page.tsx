import type { Metadata } from "next";
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Hà Tấn Phát. Email: hatanphat1121@gmail.com. Open for full-time opportunities and collaborations.",
};

export default function Contact() {
  return <ContactContent />;
}