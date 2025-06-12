import ScrollAnimation from "./ScrollAnimation"

function Home() {
  return (
    <ScrollAnimation>
      <div className='bgpc relative w-full'>
        <div className='noise relative w-full h-screen flex justify-center items-center overflow-hidden pointer-events-none select-none bg-[#0a0a0a]'>
          <h1 className='text-slate-500'>Portafolio 1.0</h1>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default Home