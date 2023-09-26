
import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function SignInPage() {
    return (
        <div className='flex flex-col items-center'>
            <div className='pt-20'>
                <Link href={'/'}>
                    <Image 
                        src='/logo-fast.png'
                        alt='logo da fast music'
                        width={396}
                        height={90}
                    />
                </Link>
            </div>
            <div className='pt-4'>
                <SignIn
                    appearance={
                        {
                            elements: {
                                formButtonPrimary: "bg-primary_300 hover:bg-primary_500"
                            }
                        }
                    }
                />
            </div>
        </div>
    );
}