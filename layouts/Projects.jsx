import ProjectCardHorizontal from '@/components/ProjectCardHorizontal'
import ContentRenderer from '@/components/ContentRenderer'

const Layout = ({ projects }) => {
  return (
    <div className="mx-auto p-3 md:p-6 lg:p-12">
      <div className="prose prose-headings:mb-4 dark:prose-invert">
        <ContentRenderer source={projects} />
        <div className="mt-4 grid gap-4 md:mt-12 md:gap-6">
          {projects?.collection?.records?.map((item, i) => (
            <ProjectCardHorizontal key={item.slug} index={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout
