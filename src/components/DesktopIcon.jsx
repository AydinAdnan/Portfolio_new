// A desktop folder icon. Double-click (or click) opens its window.
export default function DesktopIcon({ folder, onOpen, style }) {
  return (
    <button
      className="desktop-icon"
      style={style}
      onDoubleClick={() => onOpen(folder.id)}
      onClick={(e) => {
        // Treat single tap on touch / single click as open too for accessibility.
        if (e.detail === 1) onOpen(folder.id)
      }}
      aria-label={`Open ${folder.title}`}
    >
      <span className="desktop-icon-glyph">
        <span className="desktop-folder">
          <span className="desktop-folder-emoji">{folder.icon}</span>
        </span>
      </span>
      <span className="desktop-icon-label">{folder.title}</span>
    </button>
  )
}
