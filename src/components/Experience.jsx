import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Experience() {
  const ref = useScrollAnimation()

  return (
    <section id="experience">
      <div className="container">
        <p className="section-label">Experience</p>
        <div ref={ref} className="fade-up experience-panel glass">
          <div className="experience-panel-inner">
            <div className="exp-meta">
              <span className="exp-badge">Current</span>
              <p className="exp-date">Dec 2025 – Present</p>
              <p className="exp-company">Bluebird Inc.</p>
              <p className="exp-location">Bengaluru, India</p>
            </div>
            <div>
              <p className="exp-role">Automation Engineer Intern</p>
              <ul className="exp-bullets">
                <li>Built scalable mobile automation frameworks using Appium (Python), significantly reducing manual QA effort.</li>
                <li>Designed Playwright-based test suites for BOSNest MDM server, improving test coverage and stability.</li>
                <li>Integrated Jenkins CI/CD pipelines to automate testing and accelerate release cycles.</li>
                <li>Developed internal debugging tools, reducing issue resolution time across teams.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
