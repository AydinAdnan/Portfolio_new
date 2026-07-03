import { useEffect, useState } from 'react'

function AppleLogo() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 12.54c-.02-2.06 1.68-3.05 1.76-3.1-0.96-1.4-2.45-1.6-2.98-1.62-1.27-.13-2.48.75-3.12.75-.64 0-1.64-.73-2.7-.71-1.39.02-2.67.81-3.38 2.05-1.44 2.5-.37 6.2 1.03 8.23.69.99 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.66-.66 1.24 0 1.59.66 2.68.64 1.11-.02 1.81-1.01 2.49-2.01.78-1.15 1.1-2.27 1.12-2.33-.02-.01-2.15-.82-2.17-3.25zM15.0 6.2c.57-.69.95-1.65.85-2.6-.82.03-1.81.54-2.4 1.23-.53.61-.99 1.58-.87 2.51.91.07 1.85-.46 2.42-1.14z" />
    </svg>
  )
}

export default function MenuBar() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000 * 30)
    return () => clearInterval(t)
  }, [])

  const day = now.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
  const time = now.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })

  return (
    <div className="menubar">
      <div className="menubar-left">
        <span className="menubar-apple"><AppleLogo /></span>
        <span className="menubar-title">Aydin Adnan</span>
        <span className="menubar-item">File</span>
        <span className="menubar-item">Edit</span>
        <span className="menubar-item">View</span>
        <span className="menubar-item">Window</span>
        <span className="menubar-item">Help</span>
      </div>
      <div className="menubar-right">
        <span className="menubar-status">Portfolio OS</span>
        <span className="menubar-battery" aria-hidden="true">
          <svg width="22" height="12" viewBox="0 0 26 13" fill="none">
            <rect x="0.5" y="0.5" width="22" height="12" rx="3" stroke="currentColor" opacity="0.6" />
            <rect x="2" y="2" width="17" height="9" rx="1.5" fill="currentColor" />
            <rect x="24" y="4" width="1.6" height="5" rx="0.8" fill="currentColor" opacity="0.6" />
          </svg>
        </span>
        <span className="menubar-date">{day}</span>
        <span className="menubar-time">{time}</span>
      </div>
    </div>
  )
}
