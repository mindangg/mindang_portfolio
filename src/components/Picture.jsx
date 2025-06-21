import profile from '../assets/profile.jpg'   

const Picture = () => {
    return (
        <section className='relative top-15 flex flex-col items-center gap-3'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Trần Minh Đăng</h1>
            <p className='text-sm md:text-base lg:text-lg'>SGU Software Engineer Student TA</p>
            <p className='text-sm md:text-base lg:text-lg'>Part-Time Content Creator</p>
            <img src={profile} alt="profile" className='rounded-full' width={190} height={190} />
        </section>
    )
}

export default Picture