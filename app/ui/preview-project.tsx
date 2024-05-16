export default function PreviewProject() {
  return (
    <div className="px-2 mb-4">
      <div className="w-full h-[200px] rounded-md overflow-hidden mx-auto mb-2">
        <img
          className="object-cover object-center w-full h-full"
          src="/preview_sun.jpeg"
          alt="sunlight"
        />
      </div>
      <p className="text-center font-semibold text-lg">Nature World</p>
      <p className="tracking-wide px-1 mb-2">
        direct chat app provides a set of tools to communicate
      </p>
      <div className="flex gap-2 mb-4 pl-2">
        <span className="flex justify-center items-center odd:bg-zinc-100 even:bg-white text-zinc-800 border border-zinc-400 text-sm py-0.5 px-1 rounded-md">
          markup
        </span>
        <span className="flex justify-center items-center odd:bg-zinc-100 even:bg-white text-zinc-800 border border-zinc-400 text-sm py-0.5 px-1 rounded-md">
          nextjs
        </span>
        <span className="flex justify-center items-center odd:bg-zinc-100 even:bg-white text-zinc-800 border border-zinc-400 text-sm py-0.5 px-1 rounded-md">
          typescript
        </span>
      </div>
      <div className="flex justify-center items-center mb-4 gap-3">
        <a
          className="inline-block border hover:bg-slate-300 border-slate-800 text-slate-900 py-1 px-2 rounded-md transition"
          href="#"
        >
          about
        </a>
        <a
          className="inline-block active:scale-105 bg-zinc-300 text-zinc-700 py-1 px-2 rounded-md hover:bg-stone-400 hover:text-stone-800 transition"
          href="#"
        >
          website
        </a>
      </div>
      <div className="w-full h-[1px] bg-slate-700"></div>
    </div>
  )
}
