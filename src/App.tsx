import './App.css'
import AboutMe from './components/AboutMe'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import ScrollAnimation from './components/ScrollAnimation'

function App() {
  return (
    <>
      <Header></Header>
      <ScrollAnimation>
        <main className='w-full h-full bg-[#0a0a0a]'>
          <Home></Home>
          <AboutMe></AboutMe>
          <Projects></Projects>
          {/* <Skills></Skills> */}
          {/* <Contact></Contact> */}
        </main>
        {/* <footer></footer> */}
      </ScrollAnimation>
    </>
  )
}

export default App