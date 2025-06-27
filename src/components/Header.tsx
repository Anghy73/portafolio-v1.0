import { useScroll } from "motion/react"
import { useEffect, useState } from "react";

function Header() {
  const [activeBlur, setActiveBlur] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      // console.log("scrollYProgress:", v.toFixed(3));
      const value = Number(v.toFixed(3))
      if (value > 0.005) {
        setActiveBlur(true)
      } else {
        setActiveBlur(false)
      }
    })
  }, [scrollYProgress])

  return (
    <header
      style={{
        backgroundColor: 'transparent',
        backdropFilter: activeBlur ? 'blur(15px)' : 'blur(0px)',
        borderBottom: '2px solid transparent',
        borderColor: activeBlur ? '#00bba744' : 'transparent',
      }}
      className="fixed top-0 left-0 w-full h-20 z-50 flex justify-center items-center"
    >
      <nav className="w-full h-full flex justify-center items-center">
        <ul className="flex justify-center items-center gap-10 text-white text-shadow-[0px_0px_8px] text-shadow-white font-medium">
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600 transition-all">
            <a href="#about"><span className="text- text-teal-500">&#123;</span> About me <span className="text- text-teal-500">&#125;</span></a>
          </li>
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600">
            <a href="#projects"><span className="text- text-teal-500">&#123;</span> Projects <span className="text- text-teal-500">&#125;</span></a>
          </li>
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600">
            <a href="#skills"><span className="text- text-teal-500">&#123;</span> Skills <span className="text- text-teal-500">&#125;</span></a>
          </li>
          <li className="hover:text-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-600">
            <a href="#contact"><span className="text- text-teal-500">&#123;</span> Contacts <span className="text- text-teal-500">&#125;</span></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header