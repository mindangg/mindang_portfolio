import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      requestAnimationFrame(() => setRing({ x: e.clientX, y: e.clientY }))
    }

    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)

    const targets = document.querySelectorAll('a, button, [data-cursor]')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        style={{ left: ring.x, top: ring.y }}
      />
    </>
  )
}
