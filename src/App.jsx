import { Navbar, Picture, About, Project, Content, Contact, Footer } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen flex flex-col'>
        <Picture />
        <About />
        <Project />
        <Content />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App