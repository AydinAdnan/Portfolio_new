// Centralized resume content for Aydin Adnan — used by all desktop window panels.

export const PROFILE = {
  name: 'Aydin Adnan',
  eyebrow: 'Welcome to my little corner of the internet',
  tagline:
    "Full-stack + AI engineer who turns caffeine and curiosity into scalable apps. Click around the folders — my whole story is tucked in there.",
  email: 'aydinadnan545@gmail.com',
  linkedin: 'https://linkedin.com/in/aydin-adnan-976974244',
  github: 'https://github.com/aydinadnan',
}

// Playful two-line hero headline (line1 = bold sans, line2 = italic serif)
export const HERO = {
  line1: "Hey, I'm Aydin.",
  line2: "let's build cool stuff.",
}

export const ABOUT = `Computer Science Engineering student with experience in full-stack and backend development. Skilled in building scalable applications, designing REST APIs, and developing real-time systems. Experienced in translating user needs into MVPs, defining user flows, and delivering end-to-end products. Familiar with cloud platforms, automation, and data-driven application development.`

export const SKILLS = [
  { label: 'Languages', icon: '</>', tags: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
  { label: 'AI & Machine Learning', icon: '◈', tags: ['PyTorch', 'YOLO', 'OpenCV', 'MediaPipe', 'NLP Pipelines'] },
  { label: 'Frameworks', icon: '⬡', tags: ['FastAPI', 'React', 'React Native', 'Spring Boot'] },
  { label: 'Tools & Cloud', icon: '⊕', tags: ['Docker', 'AWS', 'Jenkins', 'Git', 'Supabase', 'Appium', 'Playwright'] },
  { label: 'Core Concepts', icon: '≋', tags: ['Deep Learning', 'System Design', 'Full Stack', 'REST APIs', 'CI/CD Pipelines', 'Real-time Systems'] },
]

export const EXPERIENCE = [
  {
    badge: 'Current',
    date: 'Dec 2025 – Present',
    company: 'Bluebird Inc.',
    location: 'Bengaluru, India',
    role: 'Automation Engineer Intern',
    bullets: [
      'Built scalable mobile automation frameworks using Appium (Python), significantly reducing manual QA effort.',
      'Designed Playwright-based test suites for BOSNest MDM server, improving test coverage and stability.',
      'Integrated Jenkins CI/CD pipelines to automate testing and accelerate release cycles.',
      'Developed internal debugging tools, reducing issue resolution time across teams.',
    ],
  },
]

export const PROJECTS = [
  {
    name: 'Tavlo – Mobile POS System',
    tech: ['React Native', 'Supabase'],
    url: 'https://tavlo.in',
    desc: 'Full-stack POS platform enabling seamless billing, inventory tracking, and real-time analytics for SMBs. Reduced inventory discrepancies by 99% through real-time tracking and automated reconciliation. Offline-first architecture ensures uninterrupted operations under poor network.',
  },
  {
    name: 'MintShare – Serverless File Sharing',
    tech: ['WebRTC', 'P2P'],
    url: 'https://mintshare.vercel.app',
    desc: 'Peer-to-peer file sharing platform enabling direct client-to-client transfers without backend storage. Eliminated infrastructure costs while ensuring high privacy and low-latency data exchange.',
  },
  {
    name: 'AI Conversational Ordering System',
    tech: ['FastAPI', 'NLP', 'SQL'],
    date: 'Nov 2025',
    desc: 'NLP-driven conversational agent for automated ordering using intent classification and entity extraction. Scalable pipelines map unstructured user input into structured SQL queries for real-time item retrieval.',
  },
  {
    name: 'Movie Ticketing System',
    tech: ['Spring Boot', 'React', 'PostgreSQL'],
    desc: 'Scalable backend handling high-concurrency ticket bookings. ACID transactions and optimistic locking prevent double bookings during peak demand. Responsive frontend delivering a seamless checkout experience.',
  },
  {
    name: 'Multi-Person Pose Estimation',
    tech: ['MediaPipe', 'OpenCV'],
    date: 'Mar 2025',
    desc: 'Real-time pose estimation system tracking multiple individuals simultaneously. Threaded inference pipelines achieve 30+ FPS. Enables posture analysis and feedback for fitness applications.',
  },
  {
    name: 'Waste Classification – YOLOv8',
    tech: ['PyTorch', 'YOLOv8', 'TACO Dataset'],
    date: 'Aug 2024',
    desc: 'Object detection and instance segmentation pipeline for waste classification. Transfer learning for multi-class detection of recyclable, garbage, and e-waste with hyperparameter tuning.',
  },
  {
    name: 'Sign Language Recognition',
    tech: ['PyTorch', 'OpenCV', 'MediaPipe'],
    date: 'Jul 2023',
    desc: 'Computer vision system for real-time ASL hand gesture recognition using 21-point hand landmark data. Achieved 90%+ accuracy across 26 classes with temporal smoothing for low-latency assistive communication.',
  },
]

export const ACHIEVEMENTS = [
  { bold: 'Finalist', rest: '– Smart India Hackathon 2023' },
  { bold: 'Top 20', rest: '– CTF Challenge 2023, VIT Chennai' },
  { bold: 'Certification', rest: '– Deep Learning with PyTorch · Datacamp' },
  { bold: 'Certification', rest: '– MongoDB Developer' },
  { bold: 'Certification', rest: '– Advanced SQL · HackerRank' },
]

// Desktop folders → window definitions. `id` maps to the panel renderer.
export const FOLDERS = [
  { id: 'about', title: 'About', icon: '👤' },
  { id: 'skills', title: 'Skills', icon: '🧩' },
  { id: 'experience', title: 'Experience', icon: '💼' },
  { id: 'projects', title: 'Projects', icon: '🗂️' },
  { id: 'achievements', title: 'Achievements', icon: '🏆' },
  { id: 'contact', title: 'Contact', icon: '✉️' },
]
