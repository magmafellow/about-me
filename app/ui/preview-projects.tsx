import { getAllProjects } from '@/app/lib/data'
import PreviewProject from './preview-project'

export default async function PreviewProjects() {
  const projects = await getAllProjects()

  
  
  return (
    <>
      <div className='mb-4 md:mb-6 lg:mb-8 md:text-center'>
        <label htmlFor="commonQuery">find by:{' '}</label>
        <input className='border focus:outline-none py-0.5 px-2 border-slate-800 rounded-md' placeholder='start typing title, description' type="search" name="commonQuery" id="commonQuery" />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-x-2">
        {projects?.map((project) => (
          <PreviewProject key={project.id} projectId={project.id} />
        ))}
      </section>
    </>
  )
}
