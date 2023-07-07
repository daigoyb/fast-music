'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchInput() {
    return (
    <div className="p-2 border-2 border-primary_300 rounded-xl">
        <form className="flex items-center p-1 gap-2 bg-transparen">
            <input className='bg-transparent text-white focus:outline-none' type="text" placeholder='O que você quer aprender?' />
            <button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' className="text-white"/>
            </button>
        </form>
    </div>
    )
}