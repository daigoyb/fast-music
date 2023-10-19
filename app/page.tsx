import Carousel from '@/components/Carousel';
import { getHome } from '@/sanity/queries/home';
import Header from '@/components/Header';
import InstrumentsCards from '@/components/InstrumentsCard';

export default async function Home() {
  const home = await getHome();

  return (
    <main className="max-w-[1880px] mx-4 md:mx-auto">
      <Header />
      <Carousel carouselItems={home[0].carousel}/>
      <InstrumentsCards instrumentCards={home[0].classes} />
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
