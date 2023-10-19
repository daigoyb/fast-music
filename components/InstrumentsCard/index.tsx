import { InstrumentClass } from "@/types/home";
import Card from "../Card";
import { DynamicIcon } from "../DynamicIcon";

type InstrumentCards = {
    instrumentCards: InstrumentClass[]
}

function InstrumentsCards({instrumentCards}: InstrumentCards) {
    return (
        <div className='flex justify-center align-middle'>
            <section className='grid grid-cols-2 gap-4 mt-4 md:grid-cols-4'>
            {
                instrumentCards.map((instrument) => (
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
    )
}

export default InstrumentsCards;