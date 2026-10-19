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
  IoLogoGithub,
  IoLogoLinkedin,
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

export const social = [
  {
    name: 'GitHub',
    url: 'https://github.com/aydeeen',
    Icon: IoLogoGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ajdin-holjan-16b795247/',
    Icon: IoLogoLinkedin,
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
    recipient: process.env.CONTACT_FORM_RECIPIENT || 'RECIPIENT@EXAMPLE.com',
    sender: process.env.CONTACT_FORM_SENDER || 'SENDER@EXAMPLE.com',
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
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://ajdinholjan.com',
  authorName: 'Ajdin Holjan',
  siteName: 'Ajdin Holjan',
  defaultTitle: 'Ajdin Holjan | WordPress & Next.js Developer',
  titleTemplate: 'Ajdin Holjan | %s',
  description:
    'Portfolio and articles by Ajdin Holjan, a WordPress and Next.js developer building fast, custom websites and web apps with React, TypeScript and Tailwind CSS.',
  email: 'aydinholjan@gmail.com',
  locale: 'en_US',
  twitter: {
    cardType: 'summary_large_image',
  },
}
