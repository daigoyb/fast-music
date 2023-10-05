import { defineType, defineField } from 'sanity'

export const submoduleType = defineType({
    name: 'submodule',
    title: 'Submódulo',
    type: 'document',
    fields: [
        defineField({
            name: 'submoduleInstrument',
            title: 'Instrumento',
            type: 'reference',
            to: [{type: 'instrument'}],
            description: 'A qual instrumento o submódulo pertence',
        }),
        defineField({
            name: 'submoduleDificulty',
            title: 'Dificuldade',
            type: 'array',
            of: [defineField({ name: 'dificulty', type: 'string'})],
            options: {
                list: [
                    {title: 'Profissional', value: 'pro'},
                    {title: 'Difícil', value: 'hard'},
                    {title: 'Intermediário', value: 'intermediary'},
                    {title: 'Fácil', value: 'easy'},
                ]
            }
        }),
        defineField({
            name: 'submoduleVideos',
            title: 'Vídeos do submódulo',
            type: 'array',
            of: [
                defineField({
                    name: 'class',
                    type: 'class'
                })
            ]
        }),

    ]
});

export const classType = defineType({
    name: 'class',
    title: 'Aula',
    type: 'object',
    fields: [
        defineField({
            name: 'className',
            title: 'Título',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'classDescription',
            title: 'Descrição',
            type: 'Text'
        }),
        defineField({
            name: 'classThumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'classProfessor',
            title: 'Professor',
            type: 'reference',
            to: [{type: 'professor'}]
        }),
        defineField({
            name: 'classUrl',
            title: 'URL do vídeo',
            type: 'url'
        }),
        defineField({
            name: 'classSubmodule',
            title: 'Submódulo',
            type: 'reference',
            to: [{type: 'submodule'}]
        }),
    ]
})