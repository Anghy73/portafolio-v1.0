import { ReactLenis, type LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion'
import { useScroll, useTransform, motion } from 'motion/react'
import React, { useEffect, useRef } from 'react'

type Props = {
  children: React.ReactNode 
}

const ScrollAnimation: React.FC<Props> = ({ children }) => {
  const lenisRef = useRef<LenisRef>(null)
  const ref = useRef<HTMLDivElement>(null)

  // sincroniza a lenis con frame motion
  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref
  })

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      console.log("scrollYProgress:", v.toFixed(3));
    })
  }, [scrollYProgress])

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [1, .8, .8]
  )

  const marginTop = useTransform(
    scrollYProgress,
    [0, 0.06, 0.08, 0.3],
    ['0px', '55px', '70px', '200px']
  )
  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <div className='w-full h-[400vh] overflow-hidden bg-[#0a0a0a]' ref={ref}>

        <motion.div
          style={{
            scale: scale,
            marginTop: marginTop
          }}
          className='flex justify-center items-center w-full h-[100vh]'
        // animate={{
        // scale: 1,
        // transition: { duration: 2 }
        // }}
        >
          {children}
        </motion.div>
      </div>
    </ReactLenis>
  )
}

export default ScrollAnimation

