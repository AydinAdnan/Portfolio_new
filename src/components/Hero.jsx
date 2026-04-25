export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-eyebrow">CS Engineering · Full-Stack · AI/ML</p>
        <h1 className="hero-name">
          Aydin<br /><em>Adnan</em>
        </h1>
        <p className="hero-tagline">
          Building scalable applications, real-time systems, and products
          that bridge complex engineering with human needs.
        </p>
        <div className="hero-links">
          <a className="hero-link-primary" href="mailto:aydinadnan545@gmail.com">Get in touch</a>
          <a className="hero-link-ghost" href="https://linkedin.com/in/aydin-adnan-976974244" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hero-link-ghost" href="https://aydinadnan.vercel.app/" target="_blank" rel="noreferrer">Portfolio ↗</a>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
        </div>
      </div>
    </section>
  )
}
