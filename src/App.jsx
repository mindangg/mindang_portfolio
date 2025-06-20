import React from 'react'
import { Navbar, Picture, About, Experience, Content, Contact, Footer } from './components'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen flex flex-col mx-32 my-30'>
        <Picture />
        <About />
        <Experience />
        <Content />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App