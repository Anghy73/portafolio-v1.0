import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import ScrollAnimation from './components/ScrollAnimation'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Header></Header>
      <ScrollAnimation>
        <main className='w-full h-full bg-[#0a0a0a]'>
          <Home></Home>
          <AboutMe></AboutMe>
          <Projects></Projects>
          <Skills></Skills>
          {/* <Contact></Contact> */}
          <div className="wrapper z-10">
            <div className="gradient gradient-1"></div>
            <div className="gradient gradient-2"></div>
            <div className="gradient gradient-3"></div>
          </div>
          <div className="wrapper-2">
            <div className="gradient gradient-1"></div>
            <div className="gradient gradient-2"></div>
            <div className="gradient gradient-3"></div>
          </div>
          <div className="wrapper-3">
            <div className="gradient gradient-1"></div>
            <div className="gradient gradient-2"></div>
            <div className="gradient gradient-3"></div>
          </div>
        </main>
        {/* <footer></footer> */}
      </ScrollAnimation>
    </>
  )
}

export default App