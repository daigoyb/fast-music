import { GrCircleInformation, GrImage } from 'react-icons/gr'
import { defineType, defineField } from 'sanity'

export const aboutType = defineType({
    name: 'about',
    title: 'Sobre',
    type: 'document',
    icon: GrCircleInformation,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'aboutSite',
            title: 'Sobre o site',
            type: 'array',
            of: [
                {type: 'image', icon: GrImage},
                {
                    type: 'block',
                    lists: [
                        {title: 'Bullet', value: 'bullet'},
                        {title: 'Numbered', value: 'number'}
                    ]
                },
            ]
        })
    ]
})