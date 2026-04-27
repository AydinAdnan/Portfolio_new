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
          <a className="hero-link-ghost" href="https://linkedin.com/in/aydin-adnan-976974244" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.668-2.237-.91 0-1.451.613-1.688 1.205-.087.216-.109.517-.109.817v5.784h-3.554s.047-9.383 0-10.361h3.554v1.469c-.01.017-.023.033-.033.05h.033v-.05c.457-.705 1.274-1.708 3.102-1.708 2.269 0 3.968 1.482 3.968 4.667v5.933zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.708 0-.955.771-1.707 1.915-1.707 1.144 0 1.915.752 1.915 1.707 0 .949-.771 1.708-1.915 1.708zm1.577 11.597H3.759V9.091h3.155v11.361zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            LinkedIn
          </a>
          <a className="hero-link-ghost" href="https://github.com/aydinadnan" target="_blank" rel="noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
        </div>
      </div>
    </section>
  )
}
