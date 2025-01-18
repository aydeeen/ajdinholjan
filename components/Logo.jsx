import NextImage from 'next/image'

const Image = (props) => {
  const { src, className, quality = 100 } = props

  return (
    <div>
      <NextImage src={src} alt="Logo" quality={quality} width={150} className={className} />
    </div>
  )
}

export default Image
