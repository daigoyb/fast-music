import { faDrum, faGuitar, faChevronCircleRight, faChevronCircleLeft, faDrumSteelpan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image';
import Link from 'next/link';

import Card from '@/components/Card';
import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <main className="max-w-[2880px] mx-4 md:mx-auto">
      <header>
          <div className='mx-4 md:flex md:justify-between'>
            <div className='flex justify-center'>
              <Link href="/">
                <Image 
                  src='/logo-fast.png'
                  alt='logo da fast music'
                  width={396}
                  height={90}
                />
              </Link>
            </div>
            <nav className='flex flex-col-reverse items-center gap-2 mt-2 md:flex-row md:gap-8 md:mt-0'>
              <Link href="" className='text-white hover:text-primary_300 transition'>Contato</Link>
              <Link href="" className='text-white hover:text-primary_300 transition'>Entrar</Link>
              <Link href="" className='p-2 bg-primary_300 text-center rounded-lg hover:bg-primary_500 text-white transition uppercase text-sm'>Matricule-se</Link>
            </nav>
          </div>
      </header>
      <Carousel />
      <section className='grid grid-cols-2 gap-4 mt-4 md:grid-cols-6'>
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
