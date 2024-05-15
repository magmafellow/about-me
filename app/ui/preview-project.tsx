export default function PreviewProject() {
  return (
    <div className="px-3">
      <div className="w-full h-32 mx-auto bg-slate-700"></div>
      <p className="">direct chat app provides a set of tools to communicate</p>
      <div className="flex gap-2 mb-2 pl-2">
        <span className="bg-purple-400 text-purple-700 py-0.5 px-1 rounded-lg">
          laying out
        </span>
        <span className="bg-amber-400 text-amber-700 py-0.5 px-1 rounded-lg">
          nextjs
        </span>
        <span className="bg-red-400 text-red-700 py-0.5 px-1 rounded-lg">
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
