// Light meadow scenery. The grass wallpaper (public/background.webp) is applied
// on the .os element in CSS; here we add a soft sun glow and airy haze on top.

export default function BackgroundScenery() {
  return (
    <div className="scenery" aria-hidden="true">
      <div className="scenery-sun" />
      <div className="scenery-haze" />
    </div>
  )
}
