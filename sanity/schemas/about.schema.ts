import { GrCircleInformation, GrImage } from 'react-icons/gr'
import { defineType, defineField } from 'sanity'

export const aboutType = defineType({
    name: 'about',
    title: 'Sobre',
    type: 'document',
    icon: GrCircleInformation,
    fields: [
        defineField({
            name: 'aboutSite',
            title: 'Sobre o site',
            type: 'array',
            of: [
                {type: 'block'},
                {type: 'image', icon: GrImage}
            ]
        })
    ]
})