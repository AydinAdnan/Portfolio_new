import { FOLDERS } from '../data/resume'

// macOS-style dock. Icons open/focus the matching window; open apps show a dot.
export default function Dock({ onOpen, openIds = [] }) {
  return (
    <div className="dock">
      <div className="dock-inner">
        {FOLDERS.map((f) => (
          <button
            key={f.id}
            className="dock-item"
            onClick={() => onOpen(f.id)}
            aria-label={f.title}
            title={f.title}
          >
            <span className="dock-icon">{f.icon}</span>
            <span className="dock-tooltip">{f.title}</span>
            {openIds.includes(f.id) && <span className="dock-dot" />}
          </button>
        ))}
      </div>
    </div>
  )
}
