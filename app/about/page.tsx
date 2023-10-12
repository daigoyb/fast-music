import React from 'react';
import { getAbout } from '@/sanity/queries/abouts';

export async function AboutPage() {
    const aboutData = await getAbout();

    return (
        <div className="bg-primary_900 text-white">
            <div className="container mx-auto py-16">
                <h1 className="text-4xl font-bold">{}</h1>
            </div>
        </div>
    );
};


export default AboutPage;
