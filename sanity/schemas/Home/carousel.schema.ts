import { defineType, defineField } from 'sanity';
import { MdViewCarousel } from 'react-icons/md'

export const carouselItemType = defineType({
    name: 'carouselItem',
    title: 'Carousel Item',
    type: 'document',
    icon: MdViewCarousel,
    fields: [
        defineField({
            title: 'Imagem do Carrosel',
            name: 'carouselImage',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            title: 'Título',
            name: 'title',
            type: 'string',
        }),
        defineField({
            title: 'Subtítulo',
            name: 'subtitle',
            type: 'string'
        }),
        defineField({
            title: 'Descrição da image',
            name: 'alt',
            type: 'string',
        }),
        defineField({
            title: 'Redirect',
            name: 'redirect',
            type: 'url'
        })
    ]
});

export const carouselType = defineType({
    name: 'carousel',
    title: 'Carousel',
    type: 'array',
    of: [
        defineField({
            name: 'carouselItem',
            type: 'carouselItem'
        })
    ],
    validation: (rule) => [
        rule.max(8).error('O carrossel pode ter até 8 itens'),
        rule.min(2).error('O carrossel deve ter no mínimo 2 itens')
    ]
});
