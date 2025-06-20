const TiktokEmbed = ({ videoId }) => {
    return (
      <div className='flex-1 flex justify-center'>
        <blockquote 
          className='w-full rounded-3xl'
          cite={`https://www.tiktok.com/@_.mindangg/video/${videoId}`} 
          data-video-id={videoId} 
          id={`v${videoId}`}
        >
          <iframe 
            name={`__tt_embed__${videoId}`} 
            sandbox='allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin' 
            src={`https://www.tiktok.com/embed/v2/${videoId}?lang=vi-VN`} 
            className='w-full aspect-[9/16] block rounded-3xl'
          />
        </blockquote>
      </div>
    )
}

export default TiktokEmbed