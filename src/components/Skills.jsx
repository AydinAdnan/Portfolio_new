import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SKILLS = [
  { label: 'Languages', tags: ['Python', 'Java', 'TypeScript', 'SQL'] },
  { label: 'AI / ML', tags: ['PyTorch', 'YOLOv8', 'OpenCV', 'MediaPipe', 'NLP Pipelines'] },
  { label: 'Frameworks', tags: ['FastAPI', 'React', 'React Native', 'Spring Boot'] },
  { label: 'Tools', tags: ['Docker', 'Jenkins', 'Git', 'AWS', 'Supabase', 'Appium', 'Playwright'] },
  { label: 'Concepts', tags: ['System Design', 'REST APIs', 'CI/CD', 'Real-time Systems'] },
]

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">Technical Skills</p>
        <div ref={ref} className="fade-up skills-grid">
          {SKILLS.map(({ label, tags }) => (
            <div key={label} className="skill-category-card glass">
              <p className="skill-category-label">{label}</p>
              <div className="skill-tags">
                {tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
