import NextImage from 'next/image'

const ImageGallery = (props) => {
  const { images } = props

  if (!images || !images.length) return null

  return (
    <div>
      {images.map((image, i) => (
        <div key={i} className="[&:not(:last-child)]:mb-[clamp(24px,2vw+1rem,40px)]">
          <NextImage src={image?.src} alt={image?.alt} width="2000" height="1000" quality={100} />
        </div>
      ))}
    </div>
  )
}

export default ImageGallery
