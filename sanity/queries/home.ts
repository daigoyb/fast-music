import { groq } from 'next-sanity'
import { client } from '../client/sanity.client'
import { HomeSanityProps } from '@/types/home'

export async function getHome(): Promise<HomeSanityProps[]> {
    return client.fetch(
        groq`*[_type == "home"]{
            carousel[]{
                title,
                subtitle,
                _key,
                alt,
                redirect,
                'image': carouselImage.asset->url
            },
            "classes": instrumentClasses[]->{
                instrumentIcon,
                instrumentSlug,
                instrumentName,
                _id
            },
        }`
    )
}

