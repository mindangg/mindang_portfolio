import { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState('about')
    const [showSideNav, setShowSideNav] = useState(false)

    const navLinks = [
        { id: 'about', label: 'About Me' },
        { id: 'project', label: 'Project' },
        { id: 'content', label: 'Content' },
        { id: 'contact', label: 'Contact' },
        { id: 'resume', label: 'Resume' }
    ]

    return (
        <header className='fixed top-0 left-0 w-full flex justify-between items-center py-3  px-4 md:px-10 xl:px-20 z-2'>
            <div>
                <h1 className='text-2xl font-bold'>_.mindang</h1>
                <p>Hello there it's me</p>
            </div>

            {/* Desktop */}
            <nav className='nav hidden md:flex'>
                {navLinks.map(link => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={toggle === link.id ? 'active' : ''}
                        onClick={() => setToggle(link.id)}
                    >{link.label}</a>
                ))}
            </nav>

            {/* Mobile */}
            <nav className={`sidenav ${showSideNav ? 'open' : ''} flex md:hidden`}>
                {navLinks.map(link => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={toggle === link.id ? 'active' : ''}
                        onClick={() => setToggle(link.id)}
                    >{link.label}</a>
                ))}
            </nav>

            {showSideNav && (
            <div
                className='fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-40 md:hidden'
                onClick={() => setShowSideNav(false)}
            />
            )}

            <span className='md:hidden z-50'>
                {showSideNav ? (
                    <i className="fa-solid fa-xmark cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                        onClick={() => setShowSideNav(false)}></i>
                ) : (
                    <i className="fa-solid fa-bars cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                        onClick={() => setShowSideNav(true)}></i>
                )}
            </span>
        </header>
    )
}

export default Navbar