import Link from 'next/link'

export default function Header() {
  return (
    <header className="m-2">
      <h1 className='inline-block'>
        <Link href="/">
          <img
                className='sm:max-w-md'
                src="/icon.color.svg" alt='豊田高専吹奏楽部' />
        </Link>
      </h1>
      <nav className='mt-2 flex justify-center'>
        <ul className='flex space-x-4'>
           <li className='hover:underline'><Link href="/about">部活紹介</Link></li> 
           <li className='hover:underline'><Link href="/about">年間予定</Link></li>
           <li className='hover:underline'><Link href="/about">ニュース</Link></li>
           <li className='hover:underline'><Link href="/about">コンタクト</Link></li>
        </ul>
      </nav>
    </header>
  )
}