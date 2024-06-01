'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx';

export default function Header() {
  const pathname = usePathname();

  console.log(pathname)
  
  return (
    <header className="border-b-2 border-slate-950 mb-4">
      <section className="py-4 flex justify-center items-center">
        <h1 className={clsx(
          "text-2xl font-semibold",
          {
            'drop-shadow-md': pathname === '/about-me'
          }
        )}><Link href="/about-me">Alex Romanov</Link></h1>
      </section>
      <ul className="flex gap-3 justify-around mb-3 text-lg">
        <li>
          <Link className={clsx(
            "hover:underline py-1 px-2 rounded",
            {
              'text-purple-500': pathname === '/',
                'hover:no-underline': pathname === '/',
                'bg-purple-100': pathname === '/',
            }
          )} href="/">
            main
          </Link>
        </li>
        <li>
          <Link className={
            clsx(
              "hover:underline py-1 px-2 rounded",
              {
                'text-purple-500': pathname === '/about-me',
                'hover:no-underline': pathname === '/about-me',
                'bg-purple-100': pathname === '/about-me',
              }
            )
          } href="/about-me">
            about me
          </Link>
        </li>
        <li>
          <Link className={
            clsx(
              "hover:underline py-1 px-2 rounded",
              {
                'text-purple-500': pathname === '/contacts',
                'hover:no-underline': pathname === '/contacts',
                'bg-purple-100': pathname === '/contacts',

              }
            )
          } href="/contacts">
            contacts
          </Link>
        </li>
      </ul>
    </header>
  )
}
