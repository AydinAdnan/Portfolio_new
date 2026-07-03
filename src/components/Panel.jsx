import { ABOUT, SKILLS, EXPERIENCE, PROJECTS, ACHIEVEMENTS, PROFILE } from '../data/resume'

function AboutPanel() {
  return (
    <div className="panel panel-about">
      <p className="panel-label">About</p>
      <p className="about-text">{ABOUT}</p>
      <div className="about-meta">
        <div><span className="about-meta-k">Focus</span><span>Full-Stack · Backend · AI/ML</span></div>
        <div><span className="about-meta-k">Based in</span><span>Bengaluru, India</span></div>
        <div><span className="about-meta-k">Open to</span><span>Internships · Collaborations</span></div>
      </div>
    </div>
  )
}

function SkillsPanel() {
  return (
    <div className="panel">
      <p className="panel-label">Technical Skills</p>
      <div className="skills-grid">
        {SKILLS.map(({ label, icon, tags }) => (
          <div key={label} className="skill-card">
            <div className="skill-card-top">
              <span className="skill-card-icon">{icon}</span>
              <span className="skill-card-label">{label}</span>
            </div>
            <div className="skill-tags">
              {tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExperiencePanel() {
  return (
    <div className="panel">
      <p className="panel-label">Experience</p>
      {EXPERIENCE.map((e) => (
        <div key={e.company} className="exp-item">
          <div className="exp-meta">
            <span className="exp-badge">{e.badge}</span>
            <p className="exp-date">{e.date}</p>
            <p className="exp-company">{e.company}</p>
            <p className="exp-location">{e.location}</p>
          </div>
          <div>
            <p className="exp-role">{e.role}</p>
            <ul className="exp-bullets">
              {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

function ProjectsPanel() {
  return (
    <div className="panel">
      <p className="panel-label">Projects</p>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.name} className="project-card">
            <p className="project-name">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.name} <span className="project-link-icon">↗</span>
                </a>
              ) : p.name}
            </p>
            <div className="project-tech">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
            <p className="project-desc">{p.desc}</p>
            {p.date && <p className="project-date">{p.date}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

function AchievementsPanel() {
  return (
    <div className="panel">
      <p className="panel-label">Achievements &amp; Certifications</p>
      <ul className="achievements-list">
        {ACHIEVEMENTS.map((a, i) => (
          <li key={i} className="achievement-item">
            <span className="achievement-index">0{i + 1}</span>
            <span className="achievement-text"><strong>{a.bold}</strong> {a.rest}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.668-2.237-.91 0-1.451.613-1.688 1.205-.087.216-.109.517-.109.817v5.784h-3.554s.047-9.383 0-10.361h3.554v1.469c-.01.017-.023.033-.033.05h.033v-.05c.457-.705 1.274-1.708 3.102-1.708 2.269 0 3.968 1.482 3.968 4.667v5.933zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.708 0-.955.771-1.707 1.915-1.707 1.144 0 1.915.752 1.915 1.707 0 .949-.771 1.708-1.915 1.708zm1.577 11.597H3.759V9.091h3.155v11.361zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  )
}

function ContactPanel() {
  return (
    <div className="panel panel-contact">
      <p className="panel-label">Get in touch</p>
      <p className="contact-lead">
        Have a project, a role, or an idea worth building? <em>Let&rsquo;s talk.</em>
      </p>
      <div className="contact-links">
        <a className="contact-link contact-link--primary" href={`mailto:${PROFILE.email}`}>
          ✉️ {PROFILE.email}
        </a>
        <a className="contact-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon /> LinkedIn
        </a>
        <a className="contact-link" href={PROFILE.github} target="_blank" rel="noreferrer">
          <GithubIcon /> GitHub
        </a>
      </div>
    </div>
  )
}

const PANELS = {
  about: AboutPanel,
  skills: SkillsPanel,
  experience: ExperiencePanel,
  projects: ProjectsPanel,
  achievements: AchievementsPanel,
  contact: ContactPanel,
}

export default function Panel({ id }) {
  const Comp = PANELS[id]
  return Comp ? <Comp /> : null
}
