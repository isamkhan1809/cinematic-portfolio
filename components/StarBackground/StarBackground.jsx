'use client'

import { useEffect, useRef } from 'react'

// Simulates the 3D rotating sphere from ladunjexa/reactjs18-3d-portfolio
// using canvas 2D projection instead of Three.js — no WebGL required
export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width = W
    canvas.height = H

    // Generate 5000 points distributed on a sphere (same as Three.js version)
    const COUNT = 5000
    const stars = []
    for (let i = 0; i < COUNT; i++) {
      // uniform sphere distribution
      const theta = Math.acos(2 * Math.random() - 1)
      const phi = 2 * Math.PI * Math.random()
      const r = 1.2 * Math.cbrt(Math.random())
      stars.push({
        x: r * Math.sin(theta) * Math.cos(phi),
        y: r * Math.sin(theta) * Math.sin(phi),
        z: r * Math.cos(theta),
        // base size and color variation
        size: Math.random() * 1.2 + 0.3,
        // mix of the repo's pink (#f272c8) and purple (#a78bfa)
        hue: Math.random() > 0.5 ? '262,94%,75%' : '310,86%,69%',
      })
    }

    let rotX = 0
    let rotY = 0
    let raf

    const draw = () => {
      // match the repo: rotation.x -= delta/10, rotation.y -= delta/15
      rotX -= 0.0006
      rotY -= 0.0004

      ctx.clearRect(0, 0, W, H)

      const cx = Math.cos(rotX), sx = Math.sin(rotX)
      const cy = Math.cos(rotY), sy = Math.sin(rotY)

      // project each star (simple 3D rotation + perspective)
      const FOV = 600

      stars.forEach(s => {
        // rotate around Y
        const x1 = s.x * cy + s.z * sy
        const z1 = -s.x * sy + s.z * cy
        // rotate around X
        const y2 = s.y * cx - z1 * sx
        const z2 = s.y * sx + z1 * cx

        const perspective = FOV / (FOV + z2 * 300)
        const px = x1 * perspective * (W / 2) + W / 2
        const py = y2 * perspective * (H / 2) + H / 2

        const alpha = Math.max(0, Math.min(1, (z2 + 1.2) / 2.4))

        ctx.beginPath()
        ctx.arc(px, py, s.size * perspective, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${s.hue},${alpha.toFixed(2)})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    const onResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
