const About = () => {
    return (
        <section className='flex justify-center relative top-35 mx-auto' id='about'>
            <div className='w-[95%] max-w-[750px] text-center flex flex-col items-center gap-3 rounded-2xl border border-white/45 p-10 backdrop-blur-md bg-white/20'>
                <div className='absolute top-10 left-5 w-32 h-32 md:bg-white/30 rounded-full blur-xl'></div>
                <h2 className='text-[27px] md:text-3xl font-semibold'>About Me</h2>

                <p className='text-sm md:text-base lg:text-lg'>I love creating content that helps people, inspires or makes them laugh.</p>
                <p className='text-sm md:text-base lg:text-lg'>As for my technical side, I like to build stuff that are useful to people. I want to solve problems, make peoples 
                    lives easier and if my actions help to inspires others in the process, that would be my dream.
                </p>
                <p className='text-sm md:text-base lg:text-lg'>Thank you for your time, I hope we get to meet one day.</p>

                <div className='absolute top-17 right-22 w-10 h-10 md:bg-white/50 rounded-full blur-xl'></div>
                <div className='absolute bottom-5 right-7 w-20 h-20 md:bg-white/30 rounded-full blur-xl'></div>
            </div>
        </section>
    )
}

export default About