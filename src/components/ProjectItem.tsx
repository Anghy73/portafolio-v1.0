import React, { useState } from 'react'

type Pro = {
  id: number,
  title: string,
  description: string
}

import imgp from '../assets/noise.png'

function ProjectItem({ pro }: { pro: Pro }) {
  const [hoverActive, setHoverActive] = useState(false)

  const handleHoverEnter = () => {
    setHoverActive(true)
  }

  const handleHoverLeave = () => {
    setHoverActive(false)
  }
  // console.log(pro);

  const { title, description } = pro
  return (
    <div className='w-full max-w-3xl flex justify-start gap-10 items-center p-2 border-2 border-teal-900 rounded-lg'>
      <figure onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='w-lg h-80 hover:bg-red-500 rounded-md'>
        {
          hoverActive ? <video className='w-full h-full object-contain' src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/5eeea355389655.59822ff824b72.gif"></video> : <img className='w-full h-full object-contain' src={imgp} alt="" />
        }
      </figure>
      <div className='flex flex-col justify-between items-start w-full h-full text-start py-6 pr-4'>
        <div className='flex flex-col gap-4'>
          <h3>{title}</h3>
          <p>{description}</p>
          <div>technologies</div>
        </div>
        <div className='flex w-full gap-8'>
          <button className='w-full bg-transparent border-2 border-teal-700 py-2 rounded-md text-teal-600 hover:text-teal-400 hover:border-teal-400 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-500 cursor-pointer transition-all'>Live Demo</button>
          <button className='w-full bg-teal-700 py-2 rounded-md cursor-pointer hover:shadow-[0px_0px_8px] hover:shadow-teal-300 hover:bg-teal-600 transition-all'>Code</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem