'use client'

import { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'

function StarField(props) {
  const ref = useRef(null)
  const [sphere] = useState(() => {
    // generate 5000 random points inside a sphere
    const arr = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      let x, y, z, d
      do {
        x = (Math.random() - 0.5) * 2
        y = (Math.random() - 0.5) * 2
        z = (Math.random() - 0.5) * 2
        d = x * x + y * y + z * z
      } while (d > 1 || d === 0)
      const scale = 1.2 * Math.cbrt(Math.random())
      const f = scale / Math.sqrt(d)
      arr[i * 3] = x * f
      arr[i * 3 + 1] = y * f
      arr[i * 3 + 2] = z * f
    }
    return arr
  })

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#a78bfa"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function StarBackground() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
    </div>
  )
}
