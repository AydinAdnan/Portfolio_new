import { useCallback, useEffect, useState } from 'react'
import { FOLDERS } from '../data/resume'
import HeroText from './HeroText'
import DesktopIcon from './DesktopIcon'
import MacWindow from './MacWindow'
import Panel from './Panel'

const DEFAULT_SIZE = { w: 720, h: 500 }
const SIZE_OVERRIDES = {
  about: { w: 620, h: 440 },
  contact: { w: 560, h: 420 },
  experience: { w: 720, h: 520 },
  projects: { w: 820, h: 560 },
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 760 : false
  )
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 760)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return isMobile
}

export default function Desktop() {
  const [windows, setWindows] = useState([])
  const [topZ, setTopZ] = useState(10)
  const isMobile = useIsMobile()

  const focus = useCallback((id) => {
    setTopZ((z) => {
      const next = z + 1
      setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, z: next, minimized: false } : w)))
      return next
    })
  }, [])

  const openWindow = useCallback(
    (id) => {
      const folder = FOLDERS.find((f) => f.id === id)
      if (!folder) return
      setWindows((ws) => {
        const existing = ws.find((w) => w.id === id)
        const nextZ = topZ + 1
        setTopZ(nextZ)
        if (existing) {
          return ws.map((w) => (w.id === id ? { ...w, z: nextZ, minimized: false } : w))
        }
        const size = { ...DEFAULT_SIZE, ...(SIZE_OVERRIDES[id] || {}) }
        const step = ws.length % 5
        const maxX = Math.max(60, window.innerWidth - size.w - 130)
        const maxY = Math.max(60, window.innerHeight - size.h - 110)
        const baseX = Math.min(maxX, Math.max(50, window.innerWidth / 2 - size.w / 2 - 40))
        const baseY = Math.min(maxY, Math.max(48, window.innerHeight / 2 - size.h / 2 - 50))
        return [
          ...ws,
          {
            ...folder,
            x: Math.min(maxX, baseX + step * 30),
            y: Math.min(maxY, baseY + step * 26),
            w: size.w,
            h: size.h,
            z: nextZ,
            minimized: false,
          },
        ]
      })
    },
    [topZ]
  )

  const closeWindow = useCallback((id) => {
    setWindows((ws) => ws.filter((w) => w.id !== id))
  }, [])

  const minimizeWindow = useCallback((id) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, minimized: true } : w)))
  }, [])

  const moveWindow = useCallback((id, x, y) => {
    setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, x, y } : w)))
  }, [])

  const activeId = windows.reduce(
    (top, w) => (!w.minimized && (!top || w.z > top.z) ? w : top),
    null
  )?.id

  return (
    <div className="desktop">
      <HeroText />

      <div className="desktop-icons">
        {FOLDERS.map((f) => (
          <DesktopIcon key={f.id} folder={f} onOpen={openWindow} />
        ))}
      </div>

      {windows
        .filter((w) => !w.minimized)
        .map((w) => (
          <MacWindow
            key={w.id}
            win={w}
            isActive={w.id === activeId}
            isMobile={isMobile}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onFocus={focus}
            onMove={moveWindow}
          >
            <Panel id={w.id} />
          </MacWindow>
        ))}
    </div>
  )
}
