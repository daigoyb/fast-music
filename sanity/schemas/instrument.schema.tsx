import { defineType, defineField } from 'sanity';
import { GiGuitarHead } from 'react-icons/gi'
import * as GiIcons from 'react-icons/gi'
import * as Fa6 from 'react-icons/fa6'

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
                providers: ["fa", "mdi", "hi", "fi", "si"],
                configurations: [
                    {
                        title: 'Game Icons',
                        provider: 'gi',
                        icons: (_options: any) => 
                            Object.entries(GiIcons).map(([name, Component]) => ({
                                name,
                                component: () => <Component width="1.5em" height="1em" />,
                                tags: [name],
                              })),
                    },
                    {
                        title: 'Font awesome 6',
                        provider: 'fa6',
                        icons: (_options: any) => 
                            Object.entries(Fa6).map(([name, Component]) => ({
                                name,
                                component: () => <Component width="1.5em" height="1em" />,
                                tags: [name],
                              })),
                    }
                ]
            }
        })
    ]
})