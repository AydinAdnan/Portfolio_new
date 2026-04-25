import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about">
      <div className="container">
        <p className="section-label">About</p>
        <div ref={ref} className="fade-up">
          <p className="about-text">
            Computer Science Engineering student with experience in{' '}
            <em>full-stack and backend development</em>. Skilled in building
            scalable applications, designing REST APIs, and developing
            real-time systems. Experienced in translating user needs into MVPs,
            defining user flows, and delivering end-to-end products. Familiar
            with cloud platforms, automation, and data-driven application development.
          </p>
        </div>
      </div>
    </section>
  )
}
