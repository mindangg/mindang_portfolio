import { Card } from '../components'

const Experience = () => {
    return (
        <section className='relative top-60 mx-auto' id='experience'>
            <div className='w-180 h-auto'>
                <h1 className='text-3xl font-semibold text-center mb-8'>Experience</h1>

                <div className='flex flex-col items-center gap-8 w-full'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>  
        </section>
    )
}

export default Experience