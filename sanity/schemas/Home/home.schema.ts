import { defineType, defineField } from 'sanity';

export const homeType = defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        defineField({
            name: 'carousel',
            title: 'Carousel',
            type: 'carousel'
        }),
        defineField({
            name: 'instrumentClasses',
            title: 'Instruments',
            type: 'array',
            of: [defineField({
                name: 'instrument',
                type: 'reference',
                to: [{type: 'instrument'}],
                title: 'Referência do instrumento'
            })],
            validation: (rule) => [rule.max(6).error('Máximo de 6 instrumentos')],
            options: {
                sortable: true,
            }
        })
    ]
})