import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PROJECTS = [
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

export default function Projects() {
  const ref = useScrollAnimation()

  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">Projects</p>
        <div ref={ref} className="fade-up projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.name} className="project-card glass">
              <p className="project-name">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noreferrer">
                    {p.name} <span className="project-link-icon">↗</span>
                  </a>
                ) : p.name}
              </p>
              <div className="project-tech">
                {p.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
              <p className="project-desc">{p.desc}</p>
              {p.date && <p className="project-date">{p.date}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
