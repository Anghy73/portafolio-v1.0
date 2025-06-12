import { useEffect, useRef } from 'react'
import './App.css'
import { ReactLenis, type LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion'
import { useScroll, motion } from 'motion/react'
// import ScrollAnimation from './components/ScrollAnimation'

import bgPc from './assets/bg-pc.svg'

function App() {
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


  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <div className='w-full h-[200vh] overflow-hidden bg-[#080808]' ref={ref}>

        <motion.div className='flex justify-center items-center bg-red-200 w-full h-[100vh]' animate={{
          scale: .8,
          transition: { duration: 2 }
        }}>
          <div className='bgpc relative w-full bg-red-100'>
            <div className='noise relative w-full h-screen flex justify-center items-center overflow-hidden pointer-events-none select-none bg-[#0a0a0a]'>
              <h1 className=''>Portafolio 1.0</h1>
            </div>
          </div>
        </motion.div>

        {/* noise content */}

      </div>
    </ReactLenis>
  )
}

export default App



{/* <ScrollAnimation></ScrollAnimation> */ }
{/* <div className='flex justify-center items-center bg-[#050505] w-full h-full'> */ }
{/* <h1 className='text-shadow-2xs text-shadow-white'>Portafolio v1.0</h1> */ }
{/* <img className='w-full h-full object-contain' src={bgPc} alt="" /> */ }
{/* </div> */ }