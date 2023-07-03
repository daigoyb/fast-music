import SearchInput from '@/components/SearchFormInput';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <header>
          <div className='flex justify-between mr-2'>
          <a href="/">
            <Image 
              src='/logo-fast.png'
              alt='logo da fast music'
              width={396}
              height={90}
              className='max-w-max'
            />
          </a>
          <nav className='flex items-center gap-4'>
            <SearchInput />
            <a href="" className='text-white hover:text-primary_300 transition'>Contato</a>
            <a href="" className='text-white hover:text-primary_300 transition'>Entrar</a>
            <a href="" className='p-2 bg-primary_300 text-center rounded-lg hover:bg-primary_500 text-white transition'>Matricular-se</a>
          </nav>
        </div>
      </header>
      <section className="">FAST-MUSIC</section>
    </main>
  )
}
