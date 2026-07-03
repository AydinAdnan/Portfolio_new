import { useEffect, useRef, useState } from 'react'

// Draggable macOS window: traffic-light controls, title bar, scrollable body.
export default function MacWindow({
  win,
  isActive,
  isMobile,
  onClose,
  onMinimize,
  onFocus,
  onMove,
  children,
}) {
  const dragState = useRef(null)
  const [dragging, setDragging] = useState(false)

  const startDrag = (e) => {
    if (isMobile) return
    onFocus(win.id)
    const point = 'touches' in e ? e.touches[0] : e
    dragState.current = {
      startX: point.clientX,
      startY: point.clientY,
      originX: win.x,
      originY: win.y,
    }
    setDragging(true)
  }

  useEffect(() => {
    if (!dragging) return
    const onPointerMove = (e) => {
      const point = 'touches' in e ? e.touches[0] : e
      const ds = dragState.current
      if (!ds) return
      const nextX = ds.originX + (point.clientX - ds.startX)
      const nextY = ds.originY + (point.clientY - ds.startY)
      onMove(win.id, nextX, nextY)
    }
    const stop = () => setDragging(false)
    window.addEventListener('mousemove', onPointerMove)
    window.addEventListener('mouseup', stop)
    window.addEventListener('touchmove', onPointerMove, { passive: false })
    window.addEventListener('touchend', stop)
    return () => {
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('mouseup', stop)
      window.removeEventListener('touchmove', onPointerMove)
      window.removeEventListener('touchend', stop)
    }
  }, [dragging, win.id, onMove])

  const style = isMobile
    ? undefined
    : {
        left: win.x,
        top: win.y,
        width: win.w,
        height: win.h,
        zIndex: win.z,
      }

  return (
    <div
      className={`mac-window${isActive ? ' active' : ''}${dragging ? ' dragging' : ''}${
        win.minimized ? ' minimized' : ''
      }`}
      style={style}
      onMouseDown={() => onFocus(win.id)}
      role="dialog"
      aria-label={win.title}
    >
      <div
        className="mac-window-titlebar"
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onDoubleClick={() => onMinimize(win.id)}
      >
        <div className="traffic-lights">
          <button
            className="tl tl-close"
            onClick={(e) => { e.stopPropagation(); onClose(win.id) }}
            aria-label="Close"
          />
          <button
            className="tl tl-min"
            onClick={(e) => { e.stopPropagation(); onMinimize(win.id) }}
            aria-label="Minimize"
          />
          <button className="tl tl-max" aria-label="Zoom" onClick={(e) => e.stopPropagation()} />
        </div>
        <span className="mac-window-title">
          <span className="mac-window-title-icon">{win.icon}</span>
          {win.title}
        </span>
        <span className="mac-window-titlebar-spacer" />
      </div>
      <div className="mac-window-body">{children}</div>
    </div>
  )
}
