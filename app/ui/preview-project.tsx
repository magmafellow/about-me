export default function PreviewProject() {
  return (
    <div className="px-3">
      <div className="w-full h-32 mx-auto bg-slate-700"></div>
      <p className="">direct chat app provides a set of tools to communicate</p>
      <div className="flex gap-2 mb-2 pl-2">
        <span className="odd:bg-zinc-100 even:bg-white text-zinc-800 border border-zinc-400 py-0.5 px-2 rounded-lg">
          markup
        </span>
        <span className="odd:bg-zinc-100 even:bg-white text-zinc-800 border border-zinc-400 py-0.5 px-2 rounded-lg">
          nextjs
        </span>
        <span className="odd:bg-zinc-100 even:bg-white text-zinc-800 border border-zinc-400 py-0.5 px-2 rounded-lg">
          typescript
        </span>
      </div>
      <div className="text-center">
        <a
          className="bg-sky-300 text-sky-700 py-1 px-2 rounded-md hover:bg-sky-400 hover:text-sky-800"
          href="#"
        >
          Visit
        </a>
      </div>
    </div>
  )
}
