import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://htp-portfolio.vercel.app'),

  title: {
    default: "Hà Tấn Phát | Full Stack Developer",
    template: "%s | Hà Tấn Phát"
  },
  description: "Full Stack Developer specializing in React.js, TypeScript, Node.js, and Express. Building modern web applications with payment integration, real-time features, and RESTful APIs. Based in Ho Chi Minh City, Vietnam.",
  keywords: ["Hà Tấn Phát", "Full Stack Developer", "React Developer", "Node.js", "TypeScript", "Web Developer Vietnam"],
  authors: [{ name: "Hà Tấn Phát" }],

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://htp-portfolio.vercel.app",
    title: "Hà Tấn Phát | Full Stack Developer",
    description: "Full Stack Developer specializing in React.js, TypeScript, Node.js. View my projects and get in touch.",
    siteName: "Hà Tấn Phát Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hà Tấn Phát - Full Stack Developer Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Hà Tấn Phát | Full Stack Developer",
    description: "Full Stack Developer specializing in React.js, TypeScript, Node.js",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://htp-portfolio.vercel.app" />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}