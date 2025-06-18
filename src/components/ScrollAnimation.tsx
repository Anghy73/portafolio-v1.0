import { ReactLenis, type LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion'
// import { useScroll, useTransform, motion } from 'motion/react'
import React, { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode
}

const ScrollAnimation: React.FC<Props> = ({ children }) => {
  const lenisRef = useRef<LenisRef>(null)
  // const ref = useRef<HTMLDivElement>(null)

  // sincroniza a lenis con frame motion
  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <div className='w-full h-100% min-h-[400vh] overflow-hidden bg-[#0a0a0a]'>
        {children}
      </div>
    </ReactLenis>
  )
}

export default ScrollAnimation

