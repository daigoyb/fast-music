import { groq } from 'next-sanity'
import { client } from '../client/sanity.client'
import { HomeSanityProps } from '@/types/home'

export function getHome(): Promise<HomeSanityProps[]> {
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
                instrumentSlug{
                    current
                },
                instrumentName,
                _id
            },
        }`, 
        {
            next: {
                revalidate: 3600
            }
        }
    );
}

