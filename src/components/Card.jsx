import manga from '../assets/onlymanga.png'

const Card = () => {    
    return (
        <a>
            <div className='flex w-full rounded-2xl bg-[#e0dcdc] hover:bg-white transition-all duration-200 hover:scale-105 cursor-pointer
                            outline-none border-none'>
                <img src={manga} className='w-1/3 object-cover rounded-l-2xl'/>
                <div className='w-2/3 text-black p-5 rounded-lg flex flex-col justify-between'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Only Managa - May 2025</h3>
                        <p className='text-[15px]'>Developed a Full-stack E-Commerce Web Application to sells manga with an admin dashboard for managing the website</p>
                    </div>
                    <div className='flex flex-wrap gap-2 items-center'>
                        <span className='text-[12px] font-semibold text-blue-800 bg-blue-100 rounded-full px-2.5 py-0.5'>
                            React.js</span>
                        <span className='text-[12px] font-semibold text-blue-800 bg-blue-100 rounded-full px-2.5 py-0.5'>
                            Javascript</span>
                        <span className='text-[12px] font-semibold text-blue-800 bg-blue-100 rounded-full px-2.5 py-0.5'>
                            Node.js</span>
                        <span className='text-[12px] font-semibold text-blue-800 bg-blue-100 rounded-full px-2.5 py-0.5'>
                            Express.js</span>
                        <span className='text-[12px] font-semibold text-blue-800 bg-blue-100 rounded-full px-2.5 py-0.5'>
                            MongoDB</span>
                        <span className='text-[12px] font-semibold text-blue-800 bg-blue-100 rounded-full px-2.5 py-0.5'>
                            Restful API</span>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Card