import Header from '../ui/header'

export default function Page() {
  return (
    <>
      <Header />
      <main className="px-3">
        <h3 className="font-medium text-lg mb-3">
          You can contact me by help of these methods.
        </h3>
        <div className="mb-2 md:mb-4 lg:mb-5">
          <span className="">Telegram: </span>
          <span className="text-emerald-200 bg-emerald-800 py-0.5 px-1 rounded-md">
            @polrekost
          </span>
        </div>
        <div className='mb-3 md:mb-4 lg:mb-5'>
          <span>Gmail: </span>
          <span className="text-amber-200 bg-amber-800 py-0.5 px-1 rounded-md">
            magmafellow@gmail.com
          </span>
        </div>
        <div className='mb-3 md:mb-4 lg:mb-5'>
          <span>Phone: </span>
          <span className='text-neutral-200 bg-neutral-800 py-0.5 px-1 rounded-md'>+7 926 939 34 57</span>
        </div>
      </main>
    </>
  )
}
