import PreviewProject from "@/app/ui/preview-project"

export default function Home() {
  const arr = [1, 2, 3]

  return (
    <>
      <header className="h-24 flex justify-center items-center">
        <h1 className="text-2xl font-semibold">Alex Romanov Projects</h1>
      </header>
      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
          {arr.map((temp) => <PreviewProject />)}
        </section>
      </main>
    </>
  )
}
