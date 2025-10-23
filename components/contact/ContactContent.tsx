'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'hatanphat1121@gmail.com',
    href: 'mailto:hatanphat1121@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '0979785356',
    href: 'tel:0979785356',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Thu Duc City, Ho Chi Minh City',
    href: 'https://maps.google.com/?q=Thu+Duc+City,+Ho+Chi+Minh+City',
  },
];

const socialLinks = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/htp2003',
    username: '@htp2003',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/h%C3%A0-t%E1%BA%A5n-ph%C3%A1t-41008727a',
    username: 'Hà Tấn Phát',
  },
];

export default function ContactContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <main className="min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: isDark ? '#ffffff' : '#111827' }}
          >
            Get In Touch
          </h1>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
          >
            I'm currently open to new opportunities and collaborations.
            Feel free to reach out if you'd like to work together!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <ContactCard
              key={info.label}
              info={info}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-3xl p-8"
          style={{
            backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.7)',
            borderColor: isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.5)',
          }}
        >
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: isDark ? '#f3f4f6' : '#1f2937' }}
          >
            Connect With Me
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {socialLinks.map((social) => (
              <SocialLink
                key={social.label}
                social={social}
                isDark={isDark}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p
            className="text-lg mb-6"
            style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
          >
            Prefer email? Send me a message directly:
          </p>
          <motion.a
            href="mailto:hatanphat1121@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
            style={{
              backgroundColor: isDark ? '#f3f4f6' : '#111827',
              color: isDark ? '#111827' : '#ffffff',
            }}
          >
            <FiMail className="text-xl" />
            Send Email
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}

// Contact Card Component
function ContactCard({
  info,
  index,
  isDark
}: {
  info: any;
  index: number;
  isDark: boolean;
}) {
  const Icon = info.icon;

  return (
    <motion.a
      href={info.href}
      target={info.href.startsWith('http') ? '_blank' : undefined}
      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass rounded-2xl p-6 text-center group cursor-pointer"
      style={{
        backgroundColor: isDark ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.7)',
        borderColor: isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.5)',
      }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
        style={{
          backgroundColor: isDark ? 'rgba(55, 65, 81, 0.8)' : 'rgba(243, 244, 246, 0.8)',
        }}
      >
        <Icon
          className="text-3xl"
          style={{ color: isDark ? '#f3f4f6' : '#111827' }}
        />
      </motion.div>
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: isDark ? '#f3f4f6' : '#1f2937' }}
      >
        {info.label}
      </h3>
      <p
        className="text-sm break-all"
        style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
      >
        {info.value}
      </p>
    </motion.a>
  );
}

// Social Link Component
function SocialLink({
  social,
  isDark
}: {
  social: any;
  isDark: boolean;
}) {
  const Icon = social.icon;

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="flex items-center gap-4 p-4 rounded-2xl transition-all border"
      style={{
        backgroundColor: isDark ? 'rgba(55, 65, 81, 0.3)' : 'rgba(243, 244, 246, 0.5)',
        borderColor: isDark ? 'rgba(75, 85, 99, 0.3)' : 'rgba(209, 213, 219, 0.5)',
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: isDark ? 'rgba(75, 85, 99, 0.5)' : 'rgba(229, 231, 235, 0.8)',
        }}
      >
        <Icon
          className="text-2xl"
          style={{ color: isDark ? '#f3f4f6' : '#111827' }}
        />
      </div>
      <div className="flex-1">
        <h4
          className="font-semibold"
          style={{ color: isDark ? '#f3f4f6' : '#1f2937' }}
        >
          {social.label}
        </h4>
        <p
          className="text-sm"
          style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
        >
          {social.username}
        </p>
      </div>
    </motion.a>
  );
}