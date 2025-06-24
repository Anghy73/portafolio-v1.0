import { HTML5, CSS, Expressjs, Git, GitHub, JavaScript, Nodejs, PostgreSQL, ReactJS, TailwindCSS, TypeScript } from "../assets/Icons"

function Skills() {
  return (
    <section id="skills" className='relative w-full max-w-3xl h-screen flex flex-col justify-center items-center py-30 mx-auto z-20'>
      <h2 className="font-medium text-3xl flex justify-center items-center gap-4 pb-15"><span className="text-white/20 text-xl">&#60; h3 &#62;</span> <span className="text-white text-shadow-[0px_0px_8px] text-shadow-white">Skills </span><span className="text-white/20 text-xl">&#60;/ h3 &#62;</span></h2>
      <div className="flex justify-center flex-wrap gap-4">
        <div title="HTML5" className="flex justify-center items-center gap-2 border-2 border-red-400 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-red-400 cursor-pointer"><span><HTML5></HTML5></span><span className="font-semibold text-lg text-red-400 text-shadow-[0px_0px_8px] text-shadow-red-400">HTML</span></div>
        <div title="CSS3" className="flex justify-center items-center gap-2 border-2 border-blue-500 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-blue-500 cursor-pointer"><span><CSS></CSS></span><span className="font-semibold text-lg text-blue-500 text-shadow-[0px_0px_8px] text-shadow-blue-500">CSS</span></div>
        <div title="Javascript" className="flex justify-center items-center gap-2 border-2 border-amber-400 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-amber-400 cursor-pointer"><span><JavaScript></JavaScript></span><span className="font-semibold text-lg text-amber-400 text-shadow-[0px_0px_8px] text-shadow-amber-400">Javascript</span></div>
        <div title="React" className="flex justify-center items-center gap-2 border-2 border-teal-400 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-teal-400 cursor-pointer"><span className="w-4"><ReactJS></ReactJS></span><span className="font-semibold text-lg text-teal-400 text-shadow-[0px_0px_8px] text-shadow-teal-400">React</span></div>
        <div title="Typescript" className="flex justify-center items-center gap-2 border-2 border-sky-500 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-sky-500 cursor-pointer"><span className="w-5"><TypeScript></TypeScript></span><span className="font-semibold text-lg text-sky-500 text-shadow-[0px_0px_8px] text-shadow-sky-500">Typescript</span></div>
        <div title="TailwindCSS" className="flex justify-center items-center gap-2 border-2 border-sky-500 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-sky-500 cursor-pointer"><span className="w-6"><TailwindCSS></TailwindCSS></span><span className="font-semibold text-lg text-sky-500 text-shadow-[0px_0px_8px] text-shadow-sky-500">TailwindCSS</span></div>
        <div title="Node.js" className="flex justify-center items-center gap-2 border-2 border-green-500 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-green-500 cursor-pointer"><span className="w-5"><Nodejs></Nodejs></span><span className="font-semibold text-lg text-green-500 text-shadow-[0px_0px_8px] text-shadow-green-500">Node.js</span></div>
        <div title="Express" className="flex justify-center items-center gap-2 border-2 border-slate-400 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-slate-400 cursor-pointer"><span className="w-5"><Expressjs></Expressjs></span><span className="font-semibold text-lg text-slate-400 text-shadow-[0px_0px_8px] text-shadow-slate-400">Express</span></div>
        <div title="PostgresSQL" className="flex justify-center items-center gap-2 border-2 border-sky-500 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-sky-500 cursor-pointer"><span><PostgreSQL></PostgreSQL></span><span className="font-semibold text-lg text-sky-500 text-shadow-[0px_0px_8px] text-shadow-sky-500">PostgresSQL</span></div>
        <div title="Git" className="flex justify-center items-center gap-2 border-2 border-orange-500 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-orange-500 cursor-pointer"><span><Git></Git></span><span className="font-semibold text-lg text-orange-500 text-shadow-[0px_0px_8px] text-shadow-orange-500">Git</span></div>
        <div title="GitHub" className="flex justify-center items-center gap-2 border-2 border-gray-400 w-fit p-2 px-4 rounded-md shadow-[0px_0px_8px] shadow-gray-400 cursor-pointer"><span><GitHub></GitHub></span><span className="font-semibold text-lg text-gray-400 text-shadow-[0px_0px_8px] text-shadow-gray-400">GitHub</span></div>
      </div>
    </section>
  )
}

export default Skills

