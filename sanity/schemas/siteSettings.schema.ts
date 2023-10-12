import { BsFillGearFill } from 'react-icons/bs';
import { defineType, defineField } from 'sanity';

export const siteSettingsType = defineType({
    name: 'siteSettings',
    title: 'Configuração geral',
    type: 'document',
    icon: BsFillGearFill,
    fields: [
      defineField({
        name: 'title',
        title: 'Título principal do site',
        type: 'string'
      }),
      defineField({
        name: 'description',
        title: 'Descrição do site',
        type: 'text'
      }),
      defineField({
        name: 'contactsArray',
        title: 'Contatos',
        type: 'array',
        of: [{
          name: 'contactsRef',
          title: 'Referência do instrumento',
          type: 'reference',
          to: [{type: 'contacts'}],
        }],
      })
    ]
  })

  export const contacts = defineType({
    name: 'contacts',
    title: 'Contatos',
    type: 'object',
    fields: [
      defineField({
            name: 'mediaIcon',
            title: 'Ícone',
            type: 'iconPicker',
            options: {
                outputFormat: 'react',
            }
        }),
      defineField({
        name: 'contactString',
        title: 'Texto do contato',
        type: 'string'
      }),
      defineField({
        name: 'redirect',
        title: 'URL de redirecionamento',
        type: 'url'
      }),
    ]
  })