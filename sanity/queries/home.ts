import { groq } from 'next-sanity'
import { client } from '../client/sanity.client'

export async function getHome() {
    return client.fetch(
        groq`*[_type == "home"]{
            carousel,
            "classes": instrumentClasses[]->,
        }`
    )
}

