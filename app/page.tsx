import PreviewProjects from "@/app/ui/preview-projects"
import Header from "@/app/ui/header"

export default function Home() {
  

  return (
    <>
      <Header />
      <main className="px-3">
        <PreviewProjects />
      </main>
    </>
  )
}
