import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SKILLS = [
  {
    label: "Languages",
    icon: "</>",
    tags: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    label: "AI & Machine Learning",
    icon: "◈",
    tags: ["PyTorch", "YOLO", "OpenCV", "MediaPipe", "NLP Pipelines"],
  },
  {
    label: "Frameworks",
    icon: "⬡",
    tags: ["FastAPI", "React", "React Native", "Spring Boot"],
  },
  {
    label: "Tools & Cloud",
    icon: "⊕",
    tags: [
      "Docker",
      "AWS",
      "Jenkins",
      "Git",
      "Supabase",
      "Appium",
      "Playwright",
    ],
  },
  {
    label: "Core Concepts",
    icon: "≋",
    tags: [
      "Deep Learning",
      "System Design",
      "Full Stack",
      "REST APIs",
      "CI/CD Pipelines",
      "Real-time Systems",
    ],
  },
];

export default function Skills() {
  const ref = useScrollAnimation();

  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">Technical Skills</p>
        <div ref={ref} className="fade-up skills-grid">
          {SKILLS.map(({ label, icon, tags }) => (
            <div key={label} className="skill-card glass">
              <div className="skill-card-top">
                <span className="skill-card-icon">{icon}</span>
                <span className="skill-card-label">{label}</span>
              </div>
              <div className="skill-tags">
                {tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
