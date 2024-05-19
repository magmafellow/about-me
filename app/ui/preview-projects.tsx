import { getAllProjects } from '@/app/lib/data'
import PreviewProject from './preview-project'

export default async function PreviewProjects() {
  const projects = await getAllProjects()
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-x-2">
      {projects?.map((project) => <PreviewProject key={project.id} projectId={project.id} />)}
    </section>
  )
}
