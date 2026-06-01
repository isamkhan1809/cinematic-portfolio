'use client'
import { useEffect, useRef } from 'react'
import styles from './CinematicLayer.module.css'

export default function CinematicLayer() {
  const canvasRef = useRef(null)

  useEffect(() => {
    let animId
    let THREE
    let renderer, scene, camera, particles

    const mouse = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }

    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }

    async function init() {
      THREE = await import('three')
      const canvas = canvasRef.current
      if (!canvas) return

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
      renderer.setClearColor(0x000000, 0)

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 200)
      camera.position.z = 50

      // Create particles
      const count = 1500
      const positions = new Float32Array(count * 3)
      const colors = new Float32Array(count * 3)
      const sizes = new Float32Array(count)

      const orange = new THREE.Color(0xf97316)
      const white = new THREE.Color(0xe8f1ff)
      const blue = new THREE.Color(0x3b82f6)

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 120
        positions[i * 3 + 1] = (Math.random() - 0.5) * 80
        positions[i * 3 + 2] = (Math.random() - 0.5) * 60

        const rand = Math.random()
        const c = rand < 0.45 ? orange : rand < 0.7 ? white : blue
        colors[i * 3] = c.r
        colors[i * 3 + 1] = c.g
        colors[i * 3 + 2] = c.b

        sizes[i] = Math.random() * 2.5 + 0.5
      }

      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
      geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

      const mat = new THREE.PointsMaterial({
        size: 0.6,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      })

      particles = new THREE.Points(geo, mat)
      scene.add(particles)

      window.addEventListener('mousemove', onMouseMove)

      const onResize = () => {
        if (!canvas) return
        camera.aspect = canvas.offsetWidth / canvas.offsetHeight
        camera.updateProjectionMatrix()
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
      }
      window.addEventListener('resize', onResize)

      const clock = new THREE.Clock()

      function animate() {
        animId = requestAnimationFrame(animate)
        const t = clock.getElapsedTime()

        // Float particles
        particles.rotation.y = t * 0.02
        particles.rotation.x = Math.sin(t * 0.01) * 0.05

        // Sine wave positions
        const pos = geo.attributes.position.array
        for (let i = 0; i < count; i++) {
          pos[i * 3 + 1] += Math.sin(t + i * 0.3) * 0.002
        }
        geo.attributes.position.needsUpdate = true

        // Mouse parallax
        target.x += (mouse.x * 1.5 - target.x) * 0.05
        target.y += (mouse.y * 1.0 - target.y) * 0.05
        camera.position.x = target.x
        camera.position.y = target.y

        renderer.render(scene, camera)
      }

      animate()

      return () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('resize', onResize)
        cancelAnimationFrame(animId)
        renderer.dispose()
      }
    }

    const cleanup = init()
    return () => {
      cancelAnimationFrame(animId)
      cleanup.then(fn => fn && fn())
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}
