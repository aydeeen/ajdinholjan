import NextImage from 'next/image'

const Image = (props) => {
  const { src, className, quality = 100 } = props

  return (
    <div>
      {/* Wide logos stay 150px wide; square ones (e.g. ProLife) are capped at 64px tall. */}
      <NextImage
        src={src}
        alt="Logo"
        quality={quality}
        width={150}
        className={className}
        style={{ width: 'auto', height: 'auto', maxWidth: '150px', maxHeight: '64px' }}
      />
    </div>
  )
}

export default Image
