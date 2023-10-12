import { groq } from 'next-sanity'
import { client } from '../client/sanity.client'
import { HomeSanityProps } from '@/types/home'

export async function getAbout(): Promise<HomeSanityProps[]> {
    return client.fetch(
        groq`*[_type == "about"]{
            about{
                title,
                aboutArray
            }
        }`
    , {
        next: {
            revalidate: 3600
        }
    })
}

