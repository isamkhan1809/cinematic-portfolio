'use client'

import dynamic from 'next/dynamic'

const StarBackground = dynamic(() => import('../StarBackground/StarBackground'), { ssr: false })
const Cursor = dynamic(() => import('../Cursor/Cursor'), { ssr: false })

export default function ClientEffects() {
  return (
    <>
      <StarBackground />
      <Cursor />
    </>
  )
}
