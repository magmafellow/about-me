import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b-2 border-slate-950 mb-4">
      <section className="py-4 flex justify-center items-center">
        <h1 className="text-2xl font-semibold">Alex Romanov</h1>
      </section>
      <ul className="flex gap-3 justify-around mb-3 text-lg">
        <li>
          <Link className="hover:underline" href="/">
            main
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/about-me">
            about me
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/contacts">
            contacts
          </Link>
        </li>
      </ul>
    </header>
  )
}
