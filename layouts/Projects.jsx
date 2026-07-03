import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
import ContentRenderer from '@/components/ContentRenderer'

const Layout = ({ projects }) => {
  return (
    <div className="mx-auto w-full p-[clamp(24px,2vw+1rem,40px)]">
      <div className="prose dark:prose-invert prose-headings:mb-4">
        <ContentRenderer source={projects} />
        <div className="mt-6 grid gap-[clamp(24px,2vw+1rem,40px)]">
          {projects?.collection?.records?.map((item, i) => (
            <ProjectCardHorizontal key={item.slug} index={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout
