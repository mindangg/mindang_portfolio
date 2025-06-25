import hackathon  from '../assets/hackathon.jpg'

const Achievement = () => {
    return (
        <section className='w-full relative top-45'>
            <div className='w-[95%] max-w-[750px] text-center flex flex-col justify-center items-center mx-auto gap-4'>

                <h1 className='text-3xl font-semibold'>Achievement</h1>
                <h2 className='text-2xl font-medium'>Third Place Winner – SGU Hackathon 2024-2025</h2>
                <p className='text-md md:text-lg'><span className='font-semibold'>HealthShark </span>| AI chatbot treats emotional disorders</p>
                <img src={hackathon} alt='hackathon' width={540} className='rounded-3xl'/>
            </div>
        </section>
    )
}

export default Achievement