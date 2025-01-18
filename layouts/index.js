import dynamic from 'next/dynamic'

const layouts = {
  About: dynamic(() => import(`@/layouts/About`)),
  Home: dynamic(() => import(`@/layouts/Home`)),
  Post: dynamic(() => import(`@/layouts/Post`)),
  Blog: dynamic(() => import(`@/layouts/Blog`)),
  Projects: dynamic(() => import(`@/layouts/Projects`)),
  Fallback: dynamic(() => import(`@/layouts/Fallback`)),
  Blank: dynamic(() => import(`@/layouts/Blank`)),
  BlankCentered: dynamic(() => import(`@/layouts/BlankCenter`)),
}

export default layouts
