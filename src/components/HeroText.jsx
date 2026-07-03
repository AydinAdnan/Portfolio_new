import { HERO, PROFILE } from '../data/resume'

// Splits text into per-letter spans with a staggered fade + blur + rise —
// replicating supaste's headline entrance animation.
function SplitText({ text, className, baseDelay = 0 }) {
  let charIndex = 0
  return (
    <span className={className}>
      {text.split(' ').map((word, wi) => (
        <span className="hero-word" key={wi}>
          {word.split('').map((ch) => {
            const delay = baseDelay + charIndex * 0.03
            charIndex += 1
            return (
              <span
                className="hero-char"
                key={charIndex}
                style={{ animationDelay: `${delay}s` }}
              >
                {ch}
              </span>
            )
          })}
          {wi < text.split(' ').length - 1 && <span className="hero-space">&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}

export default function HeroText() {
  return (
    <div className="hero-text">
      <h1 className="hero-headline">
        <SplitText text={HERO.line1} className="hero-line hero-line--sans" baseDelay={0.15} />
        <br />
        <SplitText text={HERO.line2} className="hero-line hero-line--serif" baseDelay={0.55} />
      </h1>
      <p className="hero-sub">{PROFILE.tagline}</p>
    </div>
  )
}
