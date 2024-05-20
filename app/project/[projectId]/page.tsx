import { FaGithub } from 'react-icons/fa'
import { getProjectById } from '@/app/lib/data'
import Header from '@/app/ui/header'

export default async function Page({
  params,
}: {
  params: { projectId: string }
}) {
  const project = await getProjectById(Number(params.projectId))

  return (
    <>
      <Header />
      <main className="px-3">
        <div className="flex flex-col justify-center gap-y-3 md:flex-row mb-4 md:mb-6">
          <div className="md:w-[50%] lg:w-[45%] rounded-md overflow-hidden">
            <img src={project?.preview_img_path} alt="preview image" />
          </div>
          <div>
            <h1 className="text-2xl text-center font-medium mb-1">
              {project?.name}
            </h1>
            <p className="w-[70%] mx-auto">{project?.description}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a href={project?.repo}>
            <FaGithub className="text-7xl hover:text-slate-800 transition" />
          </a>
        </div>
      </main>
    </>
  )
}
