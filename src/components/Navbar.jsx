import { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState('about')

    // const [showSideNav, setShowSideNav] = useState(true)
    const [showSideNav, setShowSideNav] = useState(false)

    return (
        <header className='fixed top-0 left-0 w-full flex justify-between items-center py-3  px-4 md:px-10 xl:px-20 z-2'>
            <div>
                <h1 className='text-2xl font-bold'>_.mindang</h1>
                <p>Hello there it's me</p>
            </div>

            <nav className={showSideNav ? 'sidenav' : 'nav hidden md:flex'}>
                {showSideNav && <i className="fa-solid fa-xmark text-[18px] text-[rgba(0, 0, 0, 0.9)] absolute top-4 right-4 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                                onClick={() => setShowSideNav(false)}></i>}
                <a href='#about' className={toggle === 'about' ? 'active' : ''} onClick={() => (setToggle('about'))}>About Me</a>
                <a href='#experience' className={toggle === 'experience' ? 'active' : ''} onClick={() => (setToggle('experience'))}>Experience</a>
                <a href='#content' className={toggle === 'content' ? 'active' : ''} onClick={() => (setToggle('content'))}>Content</a>
                <a href='#contact' className={toggle === 'contact' ? 'active' : ''} onClick={() => (setToggle('contact'))} >Contact</a>
                <a href='#resume' className={toggle === 'resume' ? 'active' : ''} onClick={() => (setToggle('resume'))} >Resume</a>
            </nav>

            <span className='md:hidden'>
                <i className="fa-solid fa-bars cursor-pointer transition-transform duration-300 hover:-translate-y-[5px]"
                    onClick={() => setShowSideNav(true)}></i>
            </span>
        </header>
    )
}

export default Navbar