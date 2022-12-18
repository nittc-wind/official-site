import Link from 'next/link'
export default function Header() {
  return (
    <header className="">
      <h1>
        <Link href="/">
            <img 
                className='sm:max-w-md'
                src="/icon.color.svg" alt='豊田高専吹奏楽部' />
        </Link>
      </h1>
      <nav className='flex justify-between'>
        <ul className='flex space-x-4'>
           <li><Link href="/about">部活紹介</Link></li> 
           <li><Link href="/about">年間予定</Link></li>
           <li><Link href="/about">ニュース</Link></li>
           <li><Link href="/about">コンタクト</Link></li>
        </ul>
      </nav>
    </header>
  )
}