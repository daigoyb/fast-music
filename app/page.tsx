import { faDrum, faGuitar, faDrumSteelpan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import SearchInput from '@/components/SearchFormInput';
import Card from '@/components/Card';

export default function Home() {
  return (
    <main className="max-w-7xl mx-4 md:mx-auto">
      <header>
          <div className='md:flex md:justify-between mt-2'>
            <Link href="/">
              <Image 
                src='/logo-fast.png'
                alt='logo da fast music'
                width={396}
                height={90}
                className='max-w-max'
              />
            </Link>
            <nav className='flex flex-col-reverse items-center gap-2 mt-2 md:flex-row md:gap-8 md:mt-0'>
              <SearchInput />
              <Link href="" className='text-white hover:text-primary_300 transition'>Contato</Link>
              <Link href="" className='text-white hover:text-primary_300 transition'>Entrar</Link>
              <Link href="" className='p-2 bg-primary_300 text-center rounded-lg hover:bg-primary_500 text-white transition uppercase text-sm'>Matricule-se</Link>
            </nav>
          </div>
      </header>
      <section className="my-6 md:flex gap-2">
        {
          /* 
            ! aqui fazer um componente que recebe um titulo e uma imagem. Docs do sanity
            Talvez fazer um carrosel? Permite mais informações e mostrar cursos novos.
            ! SIM FAZER UM CARROSSEL
          */
        }
        <div className='mb-2 md:mb-0'>
            <Image 
              src='/beware.png'
              alt='banda'
              width={645}
              height={412}
              className='max-w-full'
              />

        </div>
        <div>
            <Image 
              src='/beware.png'
              alt='banda'
              width={645}
              height={412}
              className='max-w-full'
              />

        </div>
      </section>
      <section className='grid grid-cols-2 gap-4 md:grid-cols-6'>
        {/* Cards de aulas -> docs do sanity */}
        <Card 
          icon={<FontAwesomeIcon size='3x' icon={faGuitar}/>}
          cardText={<div><p>Aulas de <strong>Violão</strong></p></div>}
          slug='/'
        />
        <Card 
          icon={<FontAwesomeIcon size='3x' icon={faDrum}/>}
          cardText={<div><p>Aulas de <strong>Bateria</strong></p></div>}
          slug='/'
        />
        <Card 
          icon={<FontAwesomeIcon size='3x' icon={faDrumSteelpan}/>}
          cardText={<div><p>Aulas de <strong>Teclado</strong></p></div>}
          slug='/'
        />
        <Card 
          icon={<FontAwesomeIcon size='3x' icon={faGuitar}/>}
          cardText={<div><p>Aulas de <strong>Violão</strong></p></div>}
          slug='/'
        />
        <Card 
          icon={<FontAwesomeIcon size='3x' icon={faGuitar}/>}
          cardText={<div><p>Aulas de <strong>Violão</strong></p></div>}
          slug='/'
        />
        <Card 
          icon={<FontAwesomeIcon size='3x' icon={faGuitar}/>}
          cardText={<div><p>Aulas de <strong>Violão</strong></p></div>}
          slug='/'
        />
      </section>
      <section>
        {/* Razões para estudar na fast-music */}
      </section>
      <section>
        {/* Embed do canal do youtube e propaganda do canal */}
      </section>
      <section>
        {/*Conheça o jeito de ensinar na fast-music */}
        {/*Cards de aulas com fotos */}
      </section>
      <section>
        {/* PLANOS de pagamento */}
      </section>
      <footer>
        {/* footer aqui com infos */}
      </footer>
    </main>
  )
}
