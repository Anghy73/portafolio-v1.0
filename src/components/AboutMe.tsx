function AboutMe() {
  return (
    <section id="about" className='relative w-full max-w-3xl h-full flex flex-col justify-center items-center py-30 mx-auto z-20'>
      <h2 className="font-medium text-3xl flex justify-center items-center gap-4 pb-15"><span className="text-white/20 text-xl">&#60; h3 &#62;</span> <span className="text-white text-shadow-[0px_0px_8px] text-shadow-white">About me </span><span className="text-white/20 text-xl">&#60;/ h3 &#62;</span></h2>
      <div className="flex flex-col gap-6 w-full">
        <p className="font-medium text-lg text-left flex justify-center items-center"><span className="min-w-fit text-white/20 text-md mr-3">&#60; p &#62;</span>Hi, I'm Andy. I'm 20 years old, from Chile, and passionate about technology and web development. I'm currently building on projects to improve my skills and prepare for future job opportunities.<span className="text-white/20 text-md min-w-fit ml-2">&#60;/ p &#62;</span></p>
        <p className="font-medium text-lg text-left flex justify-center items-center"><span className="min-w-fit text-white/20 text-md mr-3">&#60; p &#62;</span>My goal is to become a full-stack developer and be able to create complete applications with best practices.<span className="text-white/20 text-md min-w-fit ml-2">&#60;/ p &#62;</span></p>
      </div>
    </section>
  )
}

export default AboutMe
