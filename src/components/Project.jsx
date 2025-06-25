import manga from '../assets/onlymanga.png'
import healthshark from '../assets/healthshark.jpg'
import sgu from '../assets/SGU STORE.png'

const Project = () => {
    return (
        <section className='flex justify-center relative top-60 mx-auto' id='project'>
            <div className='w-[95%] max-w-[750px] h-auto flex flex-col items-center justify-center gap-8'>
                <h1 className='text-3xl font-semibold text-center'>Project</h1>

                <div className='flex flex-col md:flex-row w-full rounded-2xl bg-[#e0dcdc] hover:bg-white transition-all duration-200 hover:scale-101 md:hover:scale-103 cursor-pointer
                                outline-none border-none'>
                    <div className='w-full md:w-1/3 flex flex-col items-center p-3'>
                        <p className='text-md text-black font-semibold mb-2'>Febuary 2025 - April 2025</p>
                        <img src={manga} className='w-[85%] object-cover rounded-2xl'/>
                    </div>

                    <div className='w-full md:w-2/3 text-black p-5 rounded-lg flex flex-col justify-between'>
                        <div className='mb-5 md:mt-0'>
                            <h1 className='text-2xl font-bold mb-3'>Only Manga</h1>
                            <p className='text-md md:text-[15px]'>Developed a Full-stack E-Commerce Web Application to sells manga with an admin dashboard for managing the website</p>
                        </div>

                        <div className='flex flex-wrap gap-2 items-center text-xs font-semibold text-blue-800'>
                            <span className='bg-blue-100 hover:bg-blue-200 rounded-full px-2.5 py-0.5'>
                                React.js</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                Javascript</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                Node.js</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                Express.js</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                MongoDB</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                Restful API</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row w-full rounded-2xl bg-[#e0dcdc] hover:bg-white transition-all duration-200 hover:scale-101 md:hover:scale-103 cursor-pointer
                                outline-none border-none'>
                    <div className='w-full md:w-1/3 flex flex-col items-center p-3'>
                        <p className='text-md text-black font-semibold mb-2'>March 2025 - May 2025</p>
                        <img src={sgu} className='w-[85%] object-cover rounded-2xl'/>
                    </div>

                    <div className='w-full md:w-2/3 text-black p-5 rounded-lg flex flex-col justify-between'>
                        <div className='mb-5 md:mt-0'>
                            <h1 className='text-2xl font-bold mb-3'>SGU Store</h1>
                            <p className='text-md md:text-[15px]'>Developed an AI Chatbot to treat emotional disorders with animated UI for better experience</p>
                        </div>

                        <div className='flex flex-wrap gap-2 items-center text-xs font-semibold text-blue-800'>
                            <span className='bg-blue-100 hover:bg-blue-200 rounded-full px-2.5 py-0.5'>
                                React.js</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                Javascript</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                Node.js</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                Express.js</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                MongoDB</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                Restful API</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                Python</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                FastAPI</span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row w-full rounded-2xl bg-[#e0dcdc] hover:bg-white transition-all duration-200 hover:scale-101 md:hover:scale-103 cursor-pointer
                                outline-none border-none'>
                    <div className='w-full md:w-1/3 flex flex-col items-center p-3'>
                        <p className='text-md text-black font-semibold mb-2'>March 2025 - May 2025</p>
                        <img src={healthshark} className='w-[85%] object-cover rounded-2xl'/>
                    </div>

                    <div className='w-full md:w-2/3 text-black p-5 rounded-lg flex flex-col justify-between'>
                        <div className='mb-5 md:mt-0'>
                            <h1 className='text-2xl font-bold mb-3'>Health Shark</h1>
                            <p className='text-md md:text-[15px]'>Developed a Full-stack E-Commerce Web Application to sells mobile phone with an admin dashboard for managing the website</p>
                        </div>

                        <div className='flex flex-wrap gap-2 items-center text-xs font-semibold text-blue-800'>
                            <span className='bg-blue-100 hover:bg-blue-200 rounded-full px-2.5 py-0.5'>
                                React.js</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                Javascript</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                PHP</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                MySQL</span>
                            <span className='bg-blue-100 hover:bg-blue-200  rounded-full px-2.5 py-0.5'>
                                Restful API</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Project