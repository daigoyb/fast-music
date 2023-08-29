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
    ]
})