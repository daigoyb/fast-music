import { defineType, defineField } from 'sanity'

export const submoduleType = defineType({
    name: 'submodule',
    title: 'Submódulo',
    type: 'document',
    fields: [
        defineField({
            name: 'instrument',
            title: 'Instrumento',
            type: 'reference',
            to: [{type: 'instrument'}],
            description: 'A qual instrumento o submódulo pertence',
        }),
        defineField({
            name: 'dificulty',
            title: 'Dificuldade',
            type: 'array',
            of: [{ type: 'string'}],
            options: {
                list: [
                    {title: 'Profissional', value: 'pro'},
                    {title: 'Difícil', value: 'hard'},
                    {title: 'Intermediário', value: 'intermediary'},
                    {title: 'Fácil', value: 'easy'},
                ]
            }
        })

    ]
});

export const classType = defineType({
    name: 'class',
    title: 'Aula',
    type: 'object',
    fields: [{
        name: 'className',
        title: 'Título',
        type: 'string'
    }]
})