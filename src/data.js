// ─── Personal Info ────────────────────────────────────────
export const PERSONAL = {
  name: 'Sanjana Pal',
  role: 'Full Stack Developer & AI Enthusiast',
  taglines: ['Building impactful web apps', 'Exploring Machine Learning', 'Open to internship opportunities'],
  email: 'sanjanapal004@gmail.com',
  github: 'https://github.com/sankri15',
  linkedin: 'https://www.linkedin.com/in/sanjpal',
  location: 'Lucknow, India',
  codingProfiles: [
    { name: 'CodeChef', url: '#', color: '#8b5cf6', fromColor: '#c4b5fd', toColor: '#7c3aed' },
    { name: 'Codeforces', url: '#', color: '#ef4444', fromColor: '#fca5a5', toColor: '#dc2626' },

    { name: 'GFG', url: 'https://www.geeksforgeeks.org/profile/anonymous_1729?tab=activity', color: '#10b981', fromColor: '#6ee7b7', toColor: '#059669' },
    { name: 'TLE', url: 'https://www.tle-eliminators.com/cp-sheet', color: '#ec4899', fromColor: '#fcd34d', toColor: '#d97706' },
    { name: 'AtCoder', url: 'https://atcoder.jp/users/code_sword3', color: '#ec4899', fromColor: '#93c5fd', toColor: '#2563eb' }
  ],
  available: true,
  about: [
    "Hi! I'm Sanjana Pal, a Computer Science student passionate about building thoughtful, user-centric software. I love turning complex problems into clean, elegant solutions.",
    'My interests span full-stack web development, machine learning, and open-source contribution. I thrive at the intersection of good design and solid engineering.',
    "When I'm not coding, you'll find me solving problems on LeetCode, exploring new frameworks, or binge-reading tech articles. I'm actively seeking internship opportunities where I can contribute meaningfully and grow fast.",
  ],
};

// ─── Skills ──────────────────────────────────────────────
export const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: '💻',
    color: 'violet',
    skills: [
      { name: 'Python',      level: 90 },
      { name: 'JavaScript',  level: 85 },
      { name: 'Java',        level: 75 },
      { name: 'C / C++',     level: 70 },
      { name: 'SQL',         level: 80 },
    ],
  },
  {
    title: 'Web & Frameworks',
    icon: '🌐',
    color: 'pink',
    skills: [
      { name: 'React',       level: 85 },
      { name: 'Node.js',     level: 75 },
      { name: 'HTML & CSS',  level: 90 },
      { name: 'Tailwind CSS',level: 80 },
      { name: 'REST APIs',   level: 80 },
    ],
  },
  {
    title: 'Tools & Concepts',
    icon: '🛠️',
    color: 'emerald',
    skills: [
      { name: 'Git & GitHub',        level: 85 },
      { name: 'Machine Learning',    level: 70 },
      { name: 'Data Structures',     level: 80 },
      { name: 'Algorithms',          level: 75 },
      { name: 'VS Code / Linux',     level: 80 },
    ],
  },
  {
    title: 'Cloud & Deployment',
    icon: '☁️',
    color: 'amber',
    skills: [
      { name: 'Vercel',          level: 85 },
      { name: 'Render',          level: 80 },
      { name: 'Jupyter',         level: 75 },
      { name: 'APIs',            level: 85 },
      { name: 'Postman',         level: 80 },
    ],
  },
];

// ─── Projects ────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'careermate',
    title: 'CareerMate',
    emoji: '🎯',
    description: 'Enterprise AI career platform featuring ATS analysis and RAG-based interview prep.',
    longDesc: `📄 ATS Resume Analyzer: Deep-dive keyword optimization.
🎙️ Interview Copilot: Voice-enabled AI for high-pressure prep.
🗄️ Career Vault (RAG AI): Instantly retrieve past metrics.`,
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'AI'],
    liveUrl: 'https://career-mate-sigma.vercel.app',
    githubUrl: 'https://github.com/sankri15/CareerMate.git',
    featured: true,
    color: 'pink',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'codenova',
    title: 'CodeNova AI',
    emoji: '🚀',
    description: 'Premium AI coding assistant to instantly understand, chat with, and debug any GitHub repo.',
    longDesc: `🖼️ Dashboard: Metrics, tech stack, and interactive file tree.
🤖 AI Toolkit: RAG-based chat, AI Explain, and instant debugging.
📝 README Gen: Auto-generate perfect documentation.`,
    tags: ['React', 'Next.js', 'OpenAI API', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://codenova-ai-ivory.vercel.app',
    githubUrl: 'https://github.com/sankri15/codenova-ai.git',
    featured: true,
    color: 'emerald',
    bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'booksage',
    title: 'BookSage AI',
    emoji: '📚',
    description: 'Hybrid book recommendation system combining Collaborative Filtering and Content-Based models.',
    longDesc: `🧠 Hybrid ML Engine: KNN & TF-IDF Cosine Similarity.
⚙️ Scalable Architecture: FastAPI backend & React frontend.
🐳 Docker & CI/CD: Fully containerized with 100% test coverage.`,
    tags: ['Python', 'Machine Learning', 'NLP', 'Flask', 'Pandas'],
    liveUrl: 'https://boo-k-saga.vercel.app',
    githubUrl: 'https://github.com/sankri15/BooK_Sage_AI.git',
    featured: true,
    color: 'violet',
    bgImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'glowmart',
    title: 'GlowMart',
    emoji: '🛍️',
    description: 'Premium e-commerce platform offering a curated selection of fashion, beauty, and home decor.',
    longDesc: `🛒 Seamless Shopping: Beautiful UI for discovering and purchasing products.
💳 Secure Checkout: Easy, safe payment processing for a smooth experience.
🌟 Premium Design: Visually stunning interface tailored for a premium lifestyle.`,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'APIs', 'Node.js', 'Vercel', 'Render'],
    liveUrl: 'https://glowmart-ubsx.onrender.com',
    githubUrl: 'https://github.com/sankri15/Glowmart',
    featured: true,
    color: 'amber',
    bgImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
  }
];

// ─── Experience / Timeline ───────────────────────────────
export const TIMELINE = [
  {
    year: '2025',
    title: 'Full-Stack Developer Intern',
    org: 'Digital Heroes Co.',
    desc: 'Built responsive web applications and internal tools using React, Node.js, and REST APIs. Contributed to the live product used by clients.',
    type: 'work',
  },
  {
    year: '2024',
    title: 'Web Development Intern',
    org: 'Hashbit Innovation',
    desc: 'Developed and maintained front-end features for client websites using HTML, CSS, JavaScript, and React.',
    type: 'work',
  },
  {
    year: '2023',
    title: 'B.Tech in Computer Science',
    org: 'University',
    desc: 'Pursuing a Bachelor of Technology in Computer Science Engineering (2021–2025). Consistent academic performer.',
    type: 'edu',
  },
];

// ─── Certifications ──────────────────────────────────────
export const CERTIFICATIONS = [
  { title: 'AI Skills for Business',    issuer: 'EY & Microsoft',  year: '2024' },
  { title: 'Full-Stack Web Development',issuer: 'Udemy',           year: '2024' },
  { title: 'SQL Mastery',               issuer: 'Udemy',           year: '2024' },
  { title: 'IBM 1M1B Initiative',       issuer: 'IBM',             year: '2023' },
];

// ─── Nav links ───────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',    href: '#home'    },
  { label: 'About',   href: '#about'   },
  { label: 'Skills',  href: '#skills'  },
  { label: 'Projects',href: '#projects'},
  { label: 'Contact', href: '#contact' },
];
