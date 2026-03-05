import React from 'react'

const Contact = () => {
    return (
        <section className='relative top-90 mx-auto' id='contact'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-3xl text-center font-semibold'>Contact Me</h1>
                <p>Discuss a project or just want to talk</p>
                <a href="tel:0902404915">0902404915</a>
                <a href='mailto:minhdang875425@gmail.com' target='_blank'>mindang875425@gmail.com</a>
                <div className='flex justify-center gap-5 text-2xl'>
                    <a href='https://github.com/mindangg' target='_blank' 
                        className='bg-black w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-1'>
                        <i className="fa-brands fa-github text-white"></i>
                    </a>
                    {/*<a href='https://www.instagram.com/_.mindang/' target='_blank' */}
                    {/*    className='bg-pink-500 w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-1'>*/}
                    {/*    <i className="fa-brands fa-instagram"></i>*/}
                    {/*</a>*/}
                    {/*<a href='https://www.tiktok.com/@_.mindangg' target='_blank' */}
                    {/*    className='bg-black w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-1'>*/}
                    {/*    <i className="fa-brands fa-tiktok text-white"></i>*/}
                    {/*</a>*/}
                    <a href='https://www.facebook.com/minhdangg19/' target='_blank' 
                        className='bg-[#1877F2] w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-1'>
                        <i className="fa-brands fa-facebook-f text-white"></i>
                    </a>
                    <a href='mailto:minhdang875425@gmail.com' target='_blank' 
                        className='bg-[#f04434] w-10 h-10 flex items-center justify-center rounded-full transition-transform duration-300 hover:-translate-y-1'>
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact