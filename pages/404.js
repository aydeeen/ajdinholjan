import { getPageBySlug } from '@/lib/mdx'
import Page from './[[...slug]]'

// Next.js serves this page, with a real 404 status, for any URL without a content file.
export async function getStaticProps() {
  const page = await getPageBySlug(['not-found'])

  return { props: { page } }
}

export default Page
