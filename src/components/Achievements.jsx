import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ITEMS = [
  { text: <><strong>Finalist</strong> – Smart India Hackathon 2023</> },
  { text: <><strong>Top 20</strong> – CTF Challenge 2023, VIT Chennai</> },
  { text: <><strong>Certification</strong> – Deep Learning with PyTorch · Datacamp</> },
  { text: <><strong>Certification</strong> – MongoDB Developer</> },
  { text: <><strong>Certification</strong> – Advanced SQL · HackerRank</> },
]

export default function Achievements() {
  const ref = useScrollAnimation()

  return (
    <section id="achievements">
      <div className="container">
        <p className="section-label">Achievements &amp; Certifications</p>
        <ul ref={ref} className="fade-up achievements-list">
          {ITEMS.map((item, i) => (
            <li key={i} className="achievement-item glass">
              <span className="achievement-index">0{i + 1}</span>
              <span className="achievement-text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
