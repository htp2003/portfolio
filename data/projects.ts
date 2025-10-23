export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    features: string[];
    liveDemo?: string;
    github?: string;
    category: 'Full-stack' | 'Frontend' | 'Backend';
    year: string;
}

export const projectsData: Project[] = [
    {
        id: 'techswap',
        title: 'TechSwap',
        description: 'Secondhand Electronics Marketplace with escrow payment system',
        longDescription: 'Full-stack marketplace platform for buying and selling secondhand electronics with secure escrow payment processing, real-time chat, and automated order tracking.',
        image: '/images/techswap.JPG',
        technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'PayOS'],
        features: [
            'Escrow payment system with PayOS integration',
            'Real-time chat between buyers and sellers using Socket.io',
            '4-stage order tracking (Payment → Processing → Shipping → Delivered)',
            'Automatic fund release and 5% platform fee calculation',
            'RESTful API with authentication and authorization',
            'Manages 50+ product listings',
        ],
        liveDemo: 'https://techswap-black.vercel.app/',
        github: 'https://github.com/htp2003/techswap',
        category: 'Full-stack',
        year: '2025',
    },
    {
        id: 'snaplink',
        title: 'SnapLink',
        description: 'Photography Booking Platform with role-based authentication',
        longDescription: 'Capstone project - Photography booking platform with admin/moderator dashboards, photographer profiles, and payment processing.',
        image: '/images/snaplink.JPG',
        technologies: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
        features: [
            'Role-based authentication (Admin, Moderator, Photographer)',
            'Booking management with calendar integration',
            'Payment processing dashboard with revenue analytics',
            'Real-time notifications for booking updates',
            'Mobile app integration via API',
            'Processes 30+ photography sessions per week',
        ],
        github: 'https://github.com/htp2003/snaplink',
        category: 'Full-stack',
        year: '2025',
    },
    {
        id: 'pos-system',
        title: 'POS System',
        description: 'Point of Sale application with inventory management',
        longDescription: 'Point of Sale system for retail businesses with real-time inventory tracking, sales analytics, and receipt generation.',
        image: '/images/posapp.jpg',
        technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
        features: [
            'Real-time inventory tracking with low-stock alerts',
            'Sales analytics dashboard (daily/weekly/monthly trends)',
            'Receipt generation with PDF export',
            'Multi-language support (English/Vietnamese)',
            'Customer data management',
            'Manages 100+ products inventory',
        ],
        github: 'https://github.com/htp2003/pos-system',
        category: 'Full-stack',
        year: '2025',
    },
];