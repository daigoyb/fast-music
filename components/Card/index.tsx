"use client"

import Link from "next/link";
import { ReactNode } from "react"

type tCard = {
    icon: ReactNode,
    cardText: ReactNode,
    slug: string;
}

export default function Card({icon, cardText, slug}: tCard) {
    return (
        <div className="p-5 border-2 border-gray_500 text-white rounded-xl hover:border-primary_300 hover:text-primary_300 transition">
            <Link href={slug} className="flex flex-col justify-center items-center gap-4">
                {icon}
                {cardText}
            </Link>
        </div>
    )
}