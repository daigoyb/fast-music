'use client'

import Link from "next/link";
import Image from "next/image"
import { UserButton, useUser } from "@clerk/nextjs";


export default function Header() {
    const { isSignedIn } = useUser();

    return (
        <header>
            <div className='mx-4 md:flex md:justify-between'>
            <div className='flex justify-center'>
                <Link href="/">
                <Image 
                    src='/logo-fast.png'
                    alt='logo da fast music'
                    width={396}
                    height={90}
                />
                </Link>
            </div>
            <nav className='flex flex-col-reverse items-center gap-2 mt-2 md:flex-row md:gap-8 md:mt-0'>
                    <Link href="/contacts" className='text-white hover:text-primary_300 transition'>Contato</Link>
                    { isSignedIn ? 
                        (
                            <>
                                <div>
                                    <UserButton afterSignOutUrl="/"/>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link href="/sign-in" className='text-white hover:text-primary_300 transition'>Entrar</Link>
                                <Link 
                                    href="/sign-up" 
                                    className='p-2 bg-primary_300 text-center rounded-lg hover:bg-primary_500 text-white transition uppercase text-sm'
                                >
                                    Matricule-se
                                </Link>
                            </>
                        )
                    }
            </nav>
            </div>
        </header>
    )
}