import React from 'react'
import { NextSeo } from 'next-seo'
import { siteMetaData } from '../theme.config'

const Seo = (props) => {
  const { seo = {}, title, description, images, pageUrl } = props

  const metaData = {
    ...siteMetaData,
    title,
    description,
    ...seo,
  }

  const openGraph = {
    url: pageUrl,
    title: metaData.title,
    description: metaData.description,
    site_name: metaData.siteName,
    locale: metaData.locale,
  }

  if (images?.[0]?.src) {
    openGraph.images = [{ url: metaData.siteUrl + images[0].src }]
  }

  return <NextSeo {...metaData} openGraph={openGraph} />
}

export default Seo
