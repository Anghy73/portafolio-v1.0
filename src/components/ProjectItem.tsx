import { useState } from 'react'
import { Expressjs, Nodejs, ReactJS, ReactQuery, ReactRouter, TailwindCSS, TypeORM, TypeScript } from '../assets/Icons'

import zustand from '../assets/zustand.svg'
import tiptap from '../assets/tiptap.png'

type Pro = {
  id: number,
  title: string,
  description: string,
  imgURL: string,
  imgGif: string,
  stack: Array<string>,
  link: string,
  code: string
}

function ProjectItem({ pro }: { pro: Pro }) {
  const [hoverActive, setHoverActive] = useState(false)

  const handleHoverEnter = () => {
    setHoverActive(true)
  }

  const handleHoverLeave = () => {
    setHoverActive(false)
  }
  // console.log(pro);

  const matchIcon = (name: string) => {
    switch (name) {
      case 'React':
        return <ReactJS></ReactJS>
      case 'TailwindCSS':
        return <TailwindCSS></TailwindCSS>
      case 'Typescript':
        return <TypeScript></TypeScript>
      case 'Zustand':
        return <img src={zustand} alt="" />
      case 'Node':
        return <Nodejs></Nodejs>
      case 'Express':
        return <Expressjs></Expressjs>
      case 'TypeORM':
        return <TypeORM></TypeORM>
      case 'TipTap':
        return <img className='rounded-2xl' src={tiptap} alt="" />
      case 'ReactRouter':
        return <ReactRouter></ReactRouter>
      case 'TanStack':
        return <ReactQuery></ReactQuery>
      default:
        break;
    }
    return name
  }

  const { title, description } = pro
  return (
    <div className='w-full max-w-4xl flex justify-start gap-10 items-center p-2 border-2 border-teal-900 rounded-lg'>
      <figure onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave} className='w-lg h-80 rounded-md overflow-hidden'>
        {
          hoverActive ? <img className='w-full h-full object-contain' src={pro.imgGif} alt="" /> : <img className='w-full h-full object-contain' src={pro.imgURL} alt="" />
        }
      </figure>
      <div className='flex flex-col justify-between items-start w-full h-full text-start py-6 pr-4'>
        <div className='flex flex-col gap-4'>
          <h3 className='text-shadow-[0px_0px_8px] text-shadow-white text-2xl font-medium'>{title}</h3>
          <p>{description}</p>
          <div className='flex gap-6'>
            {
              pro.stack.map(tech => (
                <div title={tech} className='flex justify-center items-center w-6' key={tech}>{matchIcon(tech)}</div>
              ))
            }
          </div>
        </div>
        <div className='flex w-full gap-8'>
          <a className='w-full bg-transparent border-2 border-teal-700 py-2 rounded-md text-teal-600 hover:text-teal-400 hover:border-teal-400 hover:text-shadow-[0px_0px_8px] hover:text-shadow-teal-500 cursor-pointer transition-all font-medium text-center' href={pro.link} target='_blank'>Live Demo</a>
          <a href={pro.code} className='w-full bg-teal-700 py-2 rounded-md cursor-pointer hover:shadow-[0px_0px_8px] hover:shadow-teal-300 hover:bg-teal-600 transition-all font-medium text-center' target='_blank'>Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem