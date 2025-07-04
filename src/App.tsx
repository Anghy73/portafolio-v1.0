import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import ScrollAnimation from './components/ScrollAnimation'
import Skills from './components/Skills'

function App() {
  console.log(import.meta.env.VITE_TEST_ENV_GITHUB);
  
  return (
    <>
      <Header></Header>
      <ScrollAnimation>
        <main className='w-full h-full bg-[#0a0a0a] overflow-hidden'>
          <Home></Home>
          <AboutMe></AboutMe>
          <Projects></Projects>
          <Skills></Skills>
          <Contact></Contact>
          <div className="wrapper z-10">
            <div className="gradient gradient-1"></div>
            <div className="gradient gradient-2"></div>
            <div className="gradient gradient-3"></div>
          </div>
          <div className="wrapper-2 z-10">
            <div className="gradient gradient-1"></div>
            <div className="gradient gradient-2"></div>
            <div className="gradient gradient-3"></div>
          </div>
          <div className="wrapper-3 z-10">
            <div className="gradient gradient-1"></div>
            <div className="gradient gradient-2"></div>
            <div className="gradient gradient-3"></div>
          </div>
        </main>
        <Footer></Footer>
      </ScrollAnimation>
    </>
  )
}

export default App