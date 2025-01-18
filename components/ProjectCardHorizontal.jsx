import React from 'react'
import Link from 'next/link'
import classNames from 'clsx'
import Image from '@/components/Image'
import Logo from '@/components/Logo'
import Tag from '@/components/Tag'

const ProjectCardHorizontal = ({
  title,
  logo,
  images,
  slug,
  tags,
  description,
  attributes,
  index,
}) => (
  <Link
    href={slug.join('/')}
    aria-label={title}
    className={classNames(
      'group grid items-center transition-all duration-200 md:grid-cols-2 md:gap-10',
      'dark:bg-gradient-omega-900 prose prose-zinc bg-white dark:prose-invert dark:md:shadow-lg'
    )}
  >
    {images && (
      <div className="not-prose relative block h-96 w-full p-4">
        {images[0] && (
          <>
            <Image
              src={images[0].src}
              alt={images[0].alt || title}
              animation="fade-in mask-left"
              wrapperClassName="transition-transform md:group-hover:scale-105 duration-300 ease-out"
              className="!h-[35v]"
              sizes="(min-width: 768px) 540px, 100vw"
              priority={index === 0}
              fill
            />
          </>
        )}
      </div>
    )}
    <div className="p-4 md:p-10 md:pl-0">
      {logo?.src ? (
        <Logo src={logo} className="mt-0" />
      ) : (
        <h6 className="text-omega-400">{logo.alt}</h6>
      )}
      <div href={slug.join('/')} aria-label={title}>
        <h4 className="mt-6 transition-colors group-hover:text-accent dark:group-hover:text-alpha">
          {title}
        </h4>
      </div>
      <small className="mt-6 block">{description}</small>
      {tags && (
        <>
          <div className="mb-2 mt-6 font-bold dark:text-accent-400">Technologies</div>
          <div className="mt-2">
            {tags?.map((tag) => (
              <Tag
                key={tag.title}
                slug={tag.slug}
                isProject
                className="m-0.5 font-mono text-sm lg:mr-2"
              >
                {tag.title}
              </Tag>
            ))}
          </div>
        </>
      )}
      {attributes && Array.isArray(attributes) && (
        <dl className="mt-2 flex flex-wrap">
          {attributes.map(({ label, value }) => (
            <div key={label} className="basis-1/2 py-2">
              <dt className="mb-1 font-bold dark:text-accent-400">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  </Link>
)

export default ProjectCardHorizontal
