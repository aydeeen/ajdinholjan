/** *************************************************************
 * Please refer to the Theme Options section in documentation   *
 ****************************************************************/

/**
 * Icons from react-icons: https://react-icons.github.io/react-icons
 */

import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoNewspaper,
  IoNewspaperSharp,
  IoPersonSharp,
  IoHomeSharp,
  IoPencilSharp,
  IoManSharp,
  IoAppsSharp,
  IoCardSharp,
  IoImageSharp,
  IoAlbumsSharp,
  IoColorWandSharp,
  IoTrendingUpSharp,
  IoLaptopSharp,
  IoLaptopOutline,
  IoMailOpenSharp,
  IoMailSharp,
  IoMailUnreadSharp,
  IoAlertCircleSharp,
  IoListSharp,
  IoListCircleSharp,
  IoTextSharp,
} from 'react-icons/io5'
import {
  TfiArchive,
  TfiEnvelope,
  TfiGallery,
  TfiHome,
  TfiLayout,
  TfiLayoutListPost,
  TfiPencilAlt,
  TfiPencilAlt2,
  TfiText,
  TfiWrite,
} from 'react-icons/tfi'
import {
  SlUser,
  SlBriefcase,
  SlEnvolope,
  SlTrophy,
  SlEnvolopeLetter,
  SlEnvelopeOpen,
  SlPhone,
  SlStar,
  SlGameController,
} from 'react-icons/sl'
import {
  MdArticle,
  MdComputer,
  MdContactEmergenc,
  MdContactless,
  MdContactMail,
  MdContacts,
  MdContactSupport,
  MdDesignServices,
  MdDeveloperBoard,
  MdDeveloperMode,
  MdLaptopMac,
  MdMiscellaneousServices,
  MdNewReleases,
  MdOutlineArticle,
  MdOutlineDesignServices,
  MdPodcasts,
} from 'react-icons/md'
import {
  BiCode,
  BiCodeBlock,
  BiEnvelopeOpen,
  BiLaptop,
  BiListPlus,
  BiNews,
  BiShapePolygon,
} from 'react-icons/bi'
import { HiDesktopComputer, HiOutlinePencil } from 'react-icons/hi'

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
    Icon: IoPersonSharp,
  },
  {
    name: 'Services',
    slug: '/services',
    Icon: IoLaptopSharp,
  },
  {
    name: 'Projects',
    slug: '/projects',
    Icon: IoAppsSharp,
  },
  {
    name: 'Articles',
    slug: '/blog',
    Icon: IoNewspaperSharp
  },
  {
    name: 'Contact',
    slug: '/contact',
    Icon: IoMailSharp,
  },
]

/**
 * Social Links under the Main Menu
 */

export const social = [
  {
    name: 'Email',
    url: 'mailto:aydinholjan@gmail.com',
    Icon: SlEnvolope,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/ajdin-holjan-16b795247/',
    Icon: IoLogoLinkedin,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/holjanajdin/',
    Icon: IoLogoInstagram,
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
