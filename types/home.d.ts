export type HomeSanityProps = {
    carousel: CarouselProps[],
    classes: InstrumentClass[]
}

export type CarouselProps = {
    subtitle: string,
    title: string,
    _key: string,
    alt: string,
    redirect?: string,
    image: string
}

export type InstrumentClass = {
    instrumentIcon: {
        provider: string,
        name: string
    },
    instrumentSlug: {
        current: string,
    },
    instrumentName: string,
    _id: string
}