import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import Skills from './sections/Skills'
import Achievements from './sections/Achievements'
// import Experience from './sections/Experience'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Achievements />
        {/*<Experience />*/}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
