// ─── Personal Info ────────────────────────────────────────
export const PERSONAL = {
  name: 'Sanjana Pal',
  role: 'Full-Stack Developer',
  taglines: ['Building impactful web apps', 'Exploring Machine Learning', 'Open to internship opportunities'],
  email: 'sanjanapal004@gmail.com',
  github: 'https://github.com/sanjanapal',
  linkedin: 'https://linkedin.com/in/sanjanapal',
  location: 'India',
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
    color: 'blue',
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
];

// ─── Projects ────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'ats',
    title: 'ATS Resume Analyzer',
    emoji: '📄',
    description:
      'A web-based tool that analyzes resumes, calculates ATS compatibility scores, identifies keywords and skills, and provides actionable suggestions to improve ATS performance.',
    longDesc:
      'Built entirely in the browser with no backend or paid APIs. Uses regex-based skill detection across 16 key technologies, a weighted scoring algorithm (60% skills + 40% resume structure), and a priority-ranked suggestion engine.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'JavaScript', 'ATS', 'No Backend'],
    liveUrl: 'PASTE YOUR VERCEL LINK HERE',
    githubUrl: 'PASTE YOUR GITHUB REPO LINK HERE',
    featured: true,
    color: 'violet',
  },
  {
    id: 'neural-aqi',
    title: 'Neural City AQI Dashboard',
    emoji: '🌆',
    description:
      'A real-time Air Quality Index visualization dashboard for smart city monitoring, featuring interactive charts and location-based AQI data.',
    longDesc:
      'Aggregates AQI data from multiple city sensors, renders interactive line charts and heatmaps, and provides health recommendations based on pollution levels.',
    tags: ['Python', 'Data Visualization', 'Machine Learning', 'React'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    color: 'blue',
  },
  {
    id: 'book-rec',
    title: 'Book Recommendation System',
    emoji: '📚',
    description:
      'A collaborative filtering-based book recommendation engine that suggests personalized reading lists based on user preferences and ratings.',
    longDesc:
      'Uses cosine similarity on a user-item matrix built from ratings data. Implements content-based filtering as fallback for cold-start users.',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    color: 'emerald',
  },
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
