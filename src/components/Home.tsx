import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react"

function Home() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref
  })

  console.log(scrollYProgress);


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
    [0, 0.250],
    ['0px', '100px']
  )

  return (
    <motion.div
      style={{
        scale: scale,
        marginTop: marginTop
      }}
    >
      <div className="border-pc flex justify-center items-center relative w-full h-screen bg-[#0a0a0a] z-10 mb-50">
        <div className="noise absolute w-full h-screen -z-10 overflow-hidden"></div>
        <h1>portafolio 1.0</h1>
        <button>Click</button>
      </div>
    </motion.div>
  )
}

export default Home