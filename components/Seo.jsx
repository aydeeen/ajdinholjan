import React from 'react'
import { NextSeo } from 'next-seo'
import { siteMetaData } from '../theme.config'

// Used for link previews on pages that don't set their own images.
const DEFAULT_SHARE_IMAGE = '/og-image.png'

const Seo = (props) => {
  const { seo = {}, title, description, images, pageUrl } = props

  const metaData = {
    ...siteMetaData,
    title,
    description,
    ...seo,
  }

  const canonical = pageUrl?.split(/[?#]/)[0]

  const openGraph = {
    url: canonical,
    title: metaData.title,
    description: metaData.description,
    site_name: metaData.siteName,
    locale: metaData.locale,
    images: [{ url: metaData.siteUrl + (images?.[0]?.src || DEFAULT_SHARE_IMAGE) }],
  }

  return <NextSeo {...metaData} canonical={canonical} openGraph={openGraph} />
}

export default Seo
