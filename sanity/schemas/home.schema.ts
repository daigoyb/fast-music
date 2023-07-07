import { SchemaTypeDefinition } from '@sanity/types'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const homeSchema: SchemaTypeDefinition = {
    name: 'homepage',
    title: 'Home page',
    type: 'document',
    description: '/',
    icon: FontAwesomeIcon({icon: faHouse}),
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        }
    ]
}