import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
import ContentRenderer from '@/components/ContentRenderer'

const Layout = ({ projects }) => {
  return (
    <div className="w-full mx-auto p-[clamp(24px,2vw+1rem,40px)]">
      <div className="prose prose-headings:mb-4 dark:prose-invert">
        <ContentRenderer source={projects} />
        <div className="grid gap-[clamp(24px,2vw+1rem,40px)]">
          {projects?.collection?.records?.map((item, i) => (
            <ProjectCardHorizontal key={item.slug} index={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout
