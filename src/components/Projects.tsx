import img from '../../public/logo.png'

function Projects() {
  return (
    <div id="projects" className="w-full h-full py-30">
      <h2 className="font-medium text-3xl flex justify-center items-center gap-4 pb-10 mb-15"><span className="text-white/20 text-xl">&#60; h3 &#62;</span> <span className="text-white text-shadow-[0px_0px_8px] text-shadow-white">Projects</span><span className="text-white/20 text-xl">&#60;/ h3 &#62;</span></h2>

      <section className="w-full h-full grid grid-cols-1 grid-rows-2 gap-10 justify-items-center">
        <div className='w-full max-w-3xl flex justify-start gap-10 items-center p-2 border-2 border-teal-900 rounded-lg'>
          <figure className='w-full max-w-80 h-full hover:bg-red-500 rounded-md'>
            <img className='w-full h-full object-contain' src={img} alt="" />
          </figure>
          <div className='flex flex-col justify-between items-start w-full h-full text-start'>
            <div className='flex flex-col gap-4'>
              <h3>title</h3>
              <p>descripción: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, assumenda iste aspernatur ipsum iure deleniti inventore pariatur nam eum maxime praesentium voluptate, delectus sequi odio voluptas expedita? Dolore, natus eos!</p>
              <div>technologies</div>
            </div>
            <div className='flex w-full gap-8'>
              <button className='w-full'>Live Demo</button>
              <button className='w-full'>Code</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects