import { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState('about')

    const [showSideNav, setShowSideNav] = useState(false)

    return (
        <header className='fixed top-0 left-0 w-full flex justify-between items-center py-3 px-30 z-2'>
            <div>
                <h1 className='text-2xl font-bold'>_.mindang</h1>
                <p>Hello there it's me</p>
            </div>

            <nav className='nav'>
                <a href='#about' className={toggle === 'about' ? 'active' : ''} onClick={() => (setToggle('about'))}>About Me</a>
                <a href='#experience' className={toggle === 'experience' ? 'active' : ''} onClick={() => (setToggle('experience'))}>Experience</a>
                <a href='#content' className={toggle === 'content' ? 'active' : ''} onClick={() => (setToggle('content'))}>Content</a>
                <a href='#contact' className={toggle === 'contact' ? 'active' : ''} onClick={() => (setToggle('contact'))} >Contact</a>
                <a href='#resume' className={toggle === 'resume' ? 'active' : ''} onClick={() => (setToggle('resume'))} >Resume</a>
            </nav>

            <span>
                
            </span>
        </header>
    )
}

export default Navbar