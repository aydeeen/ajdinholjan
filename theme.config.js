/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/

/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import {
  IoNewspaperSharp,
  IoHomeSharp,
  IoLaptopSharp,
  IoImagesSharp,
} from 'react-icons/io5'

/**
 * Main Menu Items
 */

export const menu = [
  {
    name: 'Home',
    slug: '/',
    Icon: IoHomeSharp,
  },
  {
    name: 'About',
    slug: '/about',
    Icon: IoLaptopSharp,
  },
  {
    name: 'Projects',
    slug: '/projects',
    Icon: IoImagesSharp,
  },
  {
    name: 'Articles',
    slug: '/blog',
    Icon: IoNewspaperSharp,
  },
]

/**
 * General configurations
 */

export const config = {
  dateLocale: 'en-US',
  dateOptions: {
    // dateOptions is passed to JavaScript's toLocaleDateString()
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  },
  convertKit: {
    tipUrl: 'https://fantastic-mover-3439.ck.page/products/blog',
  },
  contactForm: {
    inputs: require('./content/contact-form.json'),
    recipient: 'RECIPIENT@EXAMPLE.com',
    sender: 'SENDER@EXAMPLE.com',
    subject: 'EMAIL NOTIFICATION SUBJECT',
  },
}

/**
 * MDX/Markdown configurations
 */

export const mdxConfig = {
  publicDir: 'public',
  pagesDir: 'content',
  fileExt: '.md',
  collections: ['/blog', '/projects'],
  remarkPlugins: [],
  rehypePlugins: [],
}

/**
 * Global SEO configuration for next-seo plugin
 * https://github.com/garmeeh/next-seo
 */

export const siteMetaData = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || 'http://localhost:3000',
  authorName: 'Ajdin Holjan',
  siteName: 'Ajdin Holjan',
  defaultTitle: 'Carl Hanson Personal Site',
  titleTemplate: 'Ajdin Holjan | %s',
  description: 'A short description goes here.',
  email: 'aydinholjan@gmail.com',
  locale: 'en_US',
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
}
