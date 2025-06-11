import { useEffect, useRef } from 'react'
import './App.css'
import { ReactLenis, type LenisRef } from 'lenis/react'
import { cancelFrame, frame } from 'motion'
import { useScroll } from 'motion/react'
// import ScrollAnimation from './components/ScrollAnimation'

// import bgPc from './assets/bg-pc.svg'

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
      <div className='flex justify-center items-start h-[200vh] overflow-hidden' ref={ref}>
        <h1 className='mt-80'>Portafolio 1.0</h1>
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