import { defineType, defineField } from 'sanity';
import { GiGuitarHead } from 'react-icons/gi'

export const instrumentType = defineType({
    name: 'instrument',
    title: 'Instrumento',
    type: 'document',
    icon: GiGuitarHead,
    fields: [
        defineField({
            name: 'instrumentName',
            title: 'Instrument name',
            type: 'string'
        }),
        defineField({
            name: 'instrumentSlug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'instrumentName',
                slugify: (input: string) => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              }
        }),
        defineField({
            name: 'instrumentIcon',
            title: 'Instrument Icon',
            type: 'iconPicker',
            options: {
                outputFormat: 'react',
            }
        })
    ]
})