import { defineType, defineField } from 'sanity';
import { GiTeacher } from 'react-icons/gi';

export const professorType = defineType({
    name: 'professor',
    title: 'Professor',
    icon: GiTeacher,
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome',
            type: 'string'
        }),
        defineField({
            name: 'nameSlug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                slugify: (input: string) => input
                                     .toLowerCase()
                                     .replace(/\s+/g, '-')
                                     .slice(0, 200)
              }
        }),
        defineField({
            name: 'profilePhoto',
            title: 'Foto de perfil',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'profileBio',
            title: 'Bio',
            type: 'text',
            validation: (rule) => rule.max(500).error('A bio não pode conter mais de 500 caractéres')
        })
    ]
})