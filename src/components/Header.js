import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="">
      <h1>
        <Link href="/">
          <Image width={450} height={80} priority={true}
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