
import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';


export default function SignUpPage() {
    return (
        <>
            <div className='flex justify-center pt-20'>
                <Image 
                    src='/logo-fast.png'
                    alt='logo da fast music'
                    width={396}
                    height={90}
                />
            </div>
            <div className='flex justify-center items-center w-full h-auto pt-4'>
                <SignUp />
            </div>
        </>
    );
}