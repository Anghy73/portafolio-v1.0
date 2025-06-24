import ProjectItem from './ProjectItem'

import poke from '../assets/gifs/poke.gif'
import quizgen from '../assets/gifs/quizgen.gif'
import only from '../assets/gifs/only.gif'

const projects = [
  {
    id: 2,
    title: "PokeAPI",
    description: "Website where you can see all the Pokémon and filter them by type, gender, and name. You can see information about each Pokémon, all within a minimalist and intuitive design (inspired by Pinterest images) and save your favorite Pokémon.",
    imgURL: "https://i.imgur.com/KCYnBdU.png",
    imgGif: poke,
    stack: ["React", "TailwindCSS", "Zustand", "ReactRouter", "Typescript", "TanStack"],
    link: "https://pokemonapiv2react.netlify.app/",
    code: "https://github.com/Anghy73/PokemonAPI"
  },
  {
    id: 0,
    title: "QuizGen",
    description: "A website that generates a 10-question quiz from any category. It works with the Magic Loops API, which returns a JSON file containing the structure of the questions and answers, ready for the requested category.",
    imgURL: "https://camo.githubusercontent.com/20f6cb1cf5c02f178ce4fb1d874b585bc3df8d49bab54e6a0d95d60f7fed79b5/68747470733a2f2f692e696d6775722e636f6d2f666a57615354592e706e67",
    imgGif: quizgen,
    stack: ["React", "TailwindCSS", "Zustand"],
    link: "https://quizgenpractice.netlify.app/",
    code: "https://github.com/Anghy73/quizGen"
  },
  {
    id: 1,
    title: "OnlyStrings",
    description: "A website for creating notes and storing them online. It includes a login and registration form with protected forms. It uses the Tip Tap library to create a note editor and provide greater customization. It has all the features of a CRUD.",
    imgURL: "https://i.imgur.com/4YykjbW.png",
    imgGif: only,
    stack: ["React", "Typescript", "TailwindCSS", "Node", "Express", "TypeORM", "TipTap", "Zustand", "ReactRouter"],
    link: "https://onlystrings-frontend.onrender.com",
    code: "https://github.com/Anghy73/onlystrings-frontend"
  },
]

function Projects() {
  return (
    <div id="projects" className="relative w-full h-full py-30 z-20">
      <h2 className="font-medium text-3xl flex justify-center items-center gap-4 pb-10 mb-15"><span className="text-white/20 text-xl">&#60; h3 &#62;</span> <span className="text-white text-shadow-[0px_0px_8px] text-shadow-white">Projects</span><span className="text-white/20 text-xl">&#60;/ h3 &#62;</span></h2>

      <section className="w-full h-full grid grid-cols-1 gap-10 justify-items-center">
        {
          projects.map(pro => (
            <ProjectItem key={pro.id} pro={pro}></ProjectItem>
          ))
        }
      </section>
    </div>
  )
}

export default Projects