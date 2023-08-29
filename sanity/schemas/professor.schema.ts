import { defineType, defineField } from 'sanity';
import { GiTeacher } from 'react-icons/gi';

export const professorType = defineType({
    name: 'professor',
    title: 'Professor',
    icon: GiTeacher,
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Nome',
            type: 'string'
        },
        {
            name: 'profilePhoto',
            title: 'Foto de perfil',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'profileBio',
            title: 'Bio',
            type: 'text'
        }
    ]
})