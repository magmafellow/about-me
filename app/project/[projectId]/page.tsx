import Header from "@/app/ui/header";

export default function Page({params}: {params: {projectId: string}}){
  return (
    <>
      <Header />
      <main className="px-3">
        Info about project #{params.projectId}
      </main>
    </>
  )
}