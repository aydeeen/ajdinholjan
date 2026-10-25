import React from 'react'
import { ArticleJsonLd } from 'next-seo'
import ContentRenderer from '@/components/ContentRenderer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import Date from '@/components/Date'
import ImageGallery from '@/components/ImageGallery'
import Sep from '@/components/Sep'
import { siteMetaData } from '../theme.config'
import authorImage from '../public/hero-mobile.jpg'

const Layout = ({
  content,
  title,
  description,
  link,
  date,
  seo = {},
  tags = [],
  images = [],
  attributes = [],
  pageUrl,
  slug = [],
}) => {
  const { siteUrl, authorName } = siteMetaData || {}
  const isProject = slug[0] === 'projects'

  return (
    <>
      <ArticleJsonLd
        type="BlogPosting"
        url={pageUrl}
        title={title}
        images={images.map((img) => siteUrl + img?.src)}
        datePublished={date}
        authorName={authorName}
        description={seo?.description || description}
      />
      <div className="relative mx-auto my-auto w-full p-5 lg:p-20">
        <div className="prose prose-invert">
          <header className="mx-auto max-w-3xl space-y-10 text-center">
            <div>
              {tags?.map((tag) => (
                <Tag key={tag.title} slug={tag.slug} className="m-0.5 font-mono text-sm lg:mx-1">
                  {tag.title}
                </Tag>
              ))}
            </div>
            <h1 className="mb-0">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gradient-500 underline transition-colors"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h1>
            {/* Projects show no date, so the avatar and byline sit centred as a pair. */}
            <div className={`flex items-center justify-center ${isProject ? 'gap-6' : ''}`}>
              <div className={isProject ? 'order-2' : 'basis-1/3 text-right'}>
                By <strong>{authorName}</strong>
              </div>
              <div
                className={`not-prose box-content h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-alpha bg-alpha ${
                  isProject ? 'order-1' : 'mx-6'
                }`}
              >
                <Image
                  src={authorImage}
                  alt="Picture of the author"
                  animation="fade-in"
                  className="rounded-full object-cover"
                  priority
                  fill
                />
              </div>
              {!isProject && (
                <div className="basis-1/3 text-left">
                  <Date date={date} />
                </div>
              )}
            </div>
          </header>

          {attributes.length > 0 && (
            <div className="dark:bg-gradient-omega-900 mt-12 md:dark:shadow-2xl">
              <Sep line />
              <dl className="grid grid-cols-fluid gap-4 p-4 [--tw-fluid-col-min:8rem] md:gap-6 md:px-12 md:py-6">
                {attributes.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="mb-2 dark:text-alpha">{label}</dt>
                    <dd className="m-0">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="not-prose mt-6 text-center md:mt-12">
            <ImageGallery images={images} />
          </div>

          <div
            className={`prose prose-invert mx-auto ${
              images.length < 2 && 'mt-6 md:mt-12'
            } prose-pre:max-w-[90vw]`}
          >
            <ContentRenderer source={content} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
