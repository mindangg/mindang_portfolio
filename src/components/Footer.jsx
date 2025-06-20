const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='relative top-90 bottom-0 w-full text-black py-5 flex justify-center items-center bg-[#08dc64]'>
            <p>© {currentYear} _mindang. All rights reserved.</p>
        </footer>
    )
}

export default Footer