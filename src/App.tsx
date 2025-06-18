import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import ScrollAnimation from './components/ScrollAnimation'

function App() {
  return (
    <>
      <Header></Header>
      <ScrollAnimation>
        <main className='w-full h-full bg-[#0a0a0a]'>
          <Home></Home>
          <section className='w-full h-screen bg-amber-300'>
            <h2>About Me</h2>
          </section>
          {/* <AboutMe></AboutMe> */}
          {/* <Projects></Projects> */}
          {/* <Skills></Skills> */}
          {/* <Contact></Contact> */}
        </main>
        {/* <footer></footer> */}
      </ScrollAnimation>
    </>
  )
}

export default App