import { getAllTagsByProjectId, getProjectById } from '@/app/lib/data'
import { FaGithub } from 'react-icons/fa'

export default async function PreviewProject({
  projectId,
}: {
  projectId: number
}) {
  const project = await getProjectById(projectId)

  if (!project) return undefined

  const tags = await getAllTagsByProjectId(projectId)

  return (
    <div className="mb-4">
      <div img-wrap='working' className="w-full rounded-md overflow-hidden border border-slate-700 mx-auto mb-2">
        <img
          className="object-cover object-center w-full h-full"
          src={project.preview_img_path}
          alt="sunlight"
        />
      </div>
      <p className="text-center font-semibold text-lg">{project.name}</p>
      <p className="tracking-wide px-1 mb-2">{project.description}</p>
      <div className="flex gap-2 mb-4 pl-2">
        {tags?.map((tag) => (
          <span
            key={tag.id}
            className="flex justify-center items-center odd:bg-zinc-200 even:bg-white text-zinc-800 border border-zinc-400 text-sm py-0.5 px-1 rounded-md"
          >
            {tag.name}
          </span>
        ))}
      </div>
      <div className="flex justify-center items-center mb-4 gap-3">
        <a
          className="inline-block active:scale-105 border hover:bg-slate-300 border-slate-800 text-slate-900 py-1 px-2 rounded-md transition"
          href={`/project/${project.id}`}
        >
          about
        </a>
        <a
          className="inline-block active:scale-105 bg-zinc-300 text-zinc-700 py-1 px-2 rounded-md hover:bg-stone-400 hover:text-stone-800 transition"
          href={`${project.path}`}
        >
          website
        </a>
        <a
          className=""
          href={`${project.repo}`}
        >
          <FaGithub className='text-2xl hover:text-sky-700 transition' />
        </a>
      </div>
      {/* <div className="w-full h-[1px] bg-slate-700"></div> */}
    </div>
  )
}
