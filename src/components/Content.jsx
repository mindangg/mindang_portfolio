import TiktokEmbed from './TiktokEmbed'

const Content = () => {
    return (
        <section className='relative top-80 mx-auto' id='content'>
            <div className='w-[95%] max-w-[750px]'>
                <h1 className='text-3xl text-center font-semibold mb-10'>Content Creation</h1>
                <div className='flex flex-col md:flex-row flex-wrap gap-5'>
                    <TiktokEmbed videoId={'7485610149114154258'}/>
                    <TiktokEmbed videoId={'7513826299220184326'}/>
                    <TiktokEmbed videoId={'7474501382209277191'}/>
                </div>
            </div>  

            <div>
                <h1 className='text-3xl text-center font-semibold mt-10'>Follow Me !</h1>
                <div className='flex justify-center'>
                    <div className='flex flex-col items-center gap-4'>
                        <h1 className='text-2xl font-semibold'>TikTok</h1>
                        <iframe 
                        src='https://livecounts.io/embed/tiktok-live-follower-counter/_.mindangg' 
                        width="220"
                        height="80"           
                        frameBorder="0">
                        </iframe>
                        <a className='text-[20px] py-2 px-6 border-2 border-white rounded-[7px] transition-all duration-200 hover:bg-white hover:text-black'
                            href='https://www.tiktok.com/@_.mindangg' target='_blank'>Follow</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content