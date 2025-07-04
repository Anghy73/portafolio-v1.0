import { motion, useScroll, useTransform } from "motion/react";

import cv from '../assets/CV-Andy-Ruz.pdf'
function Home() {
  const { scrollYProgress } = useScroll()

  // useEffect(() => {
  //   scrollYProgress.on("change", (v) => {
  //     console.log("scrollYProgress:", v.toFixed(3));
  //   })
  // }, [scrollYProgress])

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
      <div className="border-pc relative w-full h-screen flex justify-center items-center bg-[#0a0a0a] z-10 mb-50">
        <div className="base-pc absolute"></div>
        <div className="noise absolute w-full h-screen -z-10 overflow-hidden"></div>
        <div className="w-full h-full flex flex-col justify-start items-start pt-18 px-10 text-white/40 overflow-hidden">
          <div className="flex">
            <span className="w-5 text-right mr-4">1</span>
            <p>import './portafolio.css'</p>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">2</span>
            <p></p>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">3</span>
            <p>function Presentation <span>&#40;</span> . . . <span>&#41;</span><span className="pl-3">&#123;</span> </p>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">4</span>
            <p className="pl-10">console.log <span>&#40;</span> "Hello Word :D" <span>&#41;</span></p>
            {/* <p className="pl-10">const [ status, setStatus ] = useState(" Available to work ")</p> */}
          </div>
          {/* <div className="flex">
            <span className="w-5 text-right mr-4">4</span>
            <p className="pl-10">console.log <span>&#40;</span> "Hello Word :D" <span>&#41;</span></p>
            <p className="pl-10">const [ origin, setOrigin ] = useState(" Chile, Los Ángeles ")</p>
          </div> */}
          <div className="flex">
            <span className="w-5 text-right mr-4">5</span>
            <p className="pl-10"></p>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">6</span>
            <p className="pl-10">return <span className="pl-3">&#40;</span> <span>&#41;</span></p>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">7</span>
            <p className="pl-18"><span>&#60;</span> <span>&#62;</span></p>
          </div>
          <div className="flex">
            <span className="w-5 text-right my-auto mr-4">8</span>
            <div className="pl-26">
              <div className="flex justify-center items-center">
                <span>&#60;</span> div <span>&#62;</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <span className="w-5 text-right my-auto mr-4">9</span>
            <div className="pl-34">
              <div className="flex justify-center items-center">
                <span>&#60;</span> h1 <span>&#62;</span> <span className="text-6xl text-white text-shadow-[0px_0px_8px] text-shadow-white px-3">Andy Ruz</span> <span>&#60;</span>/ h1 <span>&#62;</span>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <span className="w-5 text-right my-auto mr-4">10</span>
            <div className="pl-34">
              <div className="flex justify-center items-center">
                <span>&#60;</span> h2 <span>&#62;</span> <span className="text-2xl text-teal-400 text-shadow-[0px_0px_8px] text-shadow-teal-400 px-3">Frontend Developer</span> <span>&#60;</span>/ h2 <span>&#62;</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <span className="w-5 text-right my-auto mr-4">11</span>
            <div className="pl-26">
              <div className="flex justify-center items-center">
                <span>&#60;</span>/ div <span>&#62;</span>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <span className="w-5 text-right my-auto mr-4">12</span>
            <div className="pl-26">
              <div className="flex justify-center items-center">
                <span>&#60;</span> div <span>&#62;</span>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <span className="w-5 text-right my-auto mr-4">13</span>
            <div className="pl-34">
              <div className="flex justify-center items-center">
                <span>&#60;</span> span <span>&#62;</span>
                <div className="flex justify-center items-center gap-4 bg-green-700/20 px-4 py-1 mx-4 rounded-2xl">
                  <span className="relative w-3 h-3 bg-green-500/80 rounded-full"><span className="absolute left-0 top-0 w-3 h-3 bg-green-500/50 rounded-full animate-ping"></span></span>
                  <p className="text-white text-shadow-[0px_0px_8px] text-shadow-white text-md"> Available to work</p>
                </div>
                <span>&#60;</span>/ span <span>&#62;</span>
              </div>
            </div>
          </div>
          {/* <div className="flex mt-1">
            <span className="w-5 text-right my-auto mr-4">13</span>
            <div className="pl-34">
              <div className="flex justify-center items-center">
                <span>&#60;</span> span <span>&#62;</span>
                <div className="flex justify-center items-center gap-4">
                  <span className="relative w-3 h-3 bg-green-500/80 rounded-full ml-8"><span className="absolute left-0 top-0 w-3 h-3 bg-green-500/50 rounded-full animate-ping"></span></span>
                  <p className="text-white text-shadow-[0px_0px_8px] text-shadow-white text-md mr-7"> Chile, Los Ángeles</p>
                </div>
                <span>&#60;</span>/ span <span>&#62;</span>
              </div>
            </div>
          </div> */}
          <div className="flex mt-6 w-full">
            <span className="w-5 text-right my-auto mr-4">13</span>
            <div className="pl-34 w-full">
              <div className="flex justify-start items-center">
                <span>&#60;</span> button <span>&#62;</span><a className="w-fit mx-3 border-2 p-3 border-teal-700 px-10 rounded-lg cursor-pointer text-teal-700 hover:text-teal-500 hover:border-teal-500 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-400 hover:shadow-[0px_0px_8px] hover:shadow-teal-400 transition-all" href={cv} download="CV Andy Ruz">Dowload C.V</a> <span>&#60;</span>/ button <span>&#62;</span>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <span className="w-5 text-right my-auto mr-4">14</span>
            <div className="pl-26">
              <div className="flex justify-center items-center">
                <span>&#60;</span>/ div <span>&#62;</span>
              </div>
            </div>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">15</span>
            <p className="pl-18"><span>&#60;</span>/ <span>&#62;</span></p>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">16</span>
            <p className="pl-10"><span>&#41;</span></p>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">17</span>
            <p><span>&#125;</span></p>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">18</span>
            <p></p>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">19</span>
            <p>export default Presentation</p>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">20</span>
            <p></p>
          </div>
          <div className="flex">
            <span className="w-5 text-right mr-4">21</span>
            <p></p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home