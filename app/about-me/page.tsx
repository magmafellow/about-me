import Header from "@/app/ui/header";

export default function Page(){
  return (
    <>
      <Header />
      <main className="px-3">
        <section className="grid justify-start mb-4 grid-cols-1 gap-y-3 grid-rows-1 md:grid-cols-2 md:grid-rows-1">
          <div className="w-[300px] h-[300px] mx-auto bg-yellow-800 overflow-hidden rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover object-center" src="/me-bycicle.jpg" alt="me" />
          </div>
          <div>
            <p className="mb-4">Hello every one! I am Alex. And I am a software engineer</p>
            <p className="mb-4">I have been working on my projects for 3 months already</p>
            <p className="mb-4">My learning have been lasting aproximately 3 years</p>
            <p className="mb-4">I am interested in web development frontend as well backend. So I am well aware of both. It would be good to be a fullstack</p>
          </div>
        </section>
        <div className="font-semibold text-lg">My preferred stack:</div>
        <ul className="pl-3 md:pl-5 lg:pl-7 xl:pl-10 font-medium">
          <li className="mb-1 text-xl text-sky-800">React</li>
          <li className="mb-1 text-xl text-sky-800">NextJS</li>
          <li className="mb-1 text-xl text-sky-800">Javascript (Typescript)</li>
          <li className="mb-1 text-xl text-sky-800">PostgreSQL</li>
          <li className="mb-1 text-xl text-sky-800">Tailwindcss</li>
        </ul>
      </main>
    </>
  )
}