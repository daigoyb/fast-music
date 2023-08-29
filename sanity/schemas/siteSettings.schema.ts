import { BsFillGearFill } from 'react-icons/bs'
import { defineType, defineField } from 'sanity'

export const siteSettingsType = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon: BsFillGearFill,
    fields: [
      defineField({
        name: 'title',
        title: 'Site Title',
        type: 'string'
      }),
      defineField({
        name: 'description',
        title: 'Site Description',
        type: 'text'
      })
    ]
  })