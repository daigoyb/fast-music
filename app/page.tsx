import Card from '@/components/Card';
import Carousel from '@/components/Carousel';
import { getHome } from '@/sanity/queries/home';
import { DynamicIcon } from '@/components/DynamicIcon';
import Header from '@/components/Header';

export default async function Home() {
  const home = await getHome();

  return (
    <main className="max-w-[1880px] mx-4 md:mx-auto">
      <Header />
      <Carousel carouselItems={home[0].carousel}/>
      <div className='flex justify-center align-middle'>
        <section className='grid grid-cols-2 gap-4 mt-4 md:grid-cols-4'>
          {/* Cards de aulas -> docs do sanity */}
          {
            home[0].classes.map((instrument) => (
              <Card
                key={instrument._id}
                cardText={
                  <div>
                    <p>
                      Aulas de <strong>{instrument.instrumentName}</strong>
                    </p>
                  </div>
                  }
                icon={
                  <DynamicIcon 
                    provider={instrument.instrumentIcon.provider}
                    nameIcon={instrument.instrumentIcon.name}
                    propsIcon={{ size: 80 }}
                  />
                }
                slug={instrument.instrumentSlug.current}
              />
            ))
          }
        </section>
      </div>
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
