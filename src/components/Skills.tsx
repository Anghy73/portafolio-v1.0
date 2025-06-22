function Skills() {
  return (
    <section id="skills" className='relative w-full max-w-3xl h-screen flex flex-col justify-center items-center py-30 mx-auto z-20'>
      <h2 className="font-medium text-3xl flex justify-center items-center gap-4 pb-15"><span className="text-white/20 text-xl">&#60; h3 &#62;</span> <span className="text-white text-shadow-[0px_0px_8px] text-shadow-white">Skills </span><span className="text-white/20 text-xl">&#60;/ h3 &#62;</span></h2>
      <div className="flex justify-center flex-wrap gap-4">
        <div className="flex justify-center items-center gap-2 border-2 border-red-400 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-red-400 cursor-pointer"><span>icon</span><span className="font-semibold text-lg text-red-400 text-shadow-[0px_0px_8px] text-shadow-red-400">HTML</span></div>
        <div className="flex justify-center items-center gap-2 border-2 border-sky-400 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-sky-400 cursor-pointer"><span>icon</span><span className="font-semibold text-lg text-sky-400 text-shadow-[0px_0px_8px] text-shadow-sky-400">CSS</span></div>
        <div className="flex justify-center items-center gap-2 border-2 border-amber-400 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-amber-400 cursor-pointer"><span>icon</span><span className="font-semibold text-lg text-amber-400 text-shadow-[0px_0px_8px] text-shadow-amber-400">Javascript</span></div>
        <div className="flex justify-center items-center gap-2 border-2 border-teal-400 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-teal-400 cursor-pointer"><span>icon</span><span className="font-semibold text-lg text-teal-400 text-shadow-[0px_0px_8px] text-shadow-teal-400">React</span></div>
        <div className="flex justify-center items-center gap-2 border-2 border-blue-500 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-blue-500 cursor-pointer"><span>icon</span><span className="font-semibold text-lg text-blue-500 text-shadow-[0px_0px_8px] text-shadow-blue-500">Typescript</span></div>
        <div><span>icon</span><span>TailwindCSS</span></div>
        <div><span>icon</span><span>Node.js</span></div>
        <div><span>icon</span><span>Express</span></div>
        <div><span>icon</span><span>PostgresSQL</span></div>
        <div><span>icon</span><span>MySQL</span></div>
        <div><span>icon</span><span>Git</span></div>
        <div><span>icon</span><span>Github</span></div>
      </div>
    </section>
  )
}

export default Skills