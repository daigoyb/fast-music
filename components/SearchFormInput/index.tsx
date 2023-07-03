'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"

export default function SearchInput() {
    return (
    <div className="border-2 border-primary_300 rounded-xl border-spacing-5">
        <form className="flex items-center p-1 gap-2 bg-transparen">
            <input className='bg-transparent text-white focus:outline-none' type="text" placeholder='O que você quer aprender?' />
            <button type="submit">
                <MagnifyingGlass size={32} className="text-white"/>
            </button>
        </form>
    </div>
    )
}