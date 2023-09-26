"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { BsRecordCircle, BsRecordCircleFill } from 'react-icons/bs'
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle } from 'react-icons/bi'
import { CarouselProps } from "@/types/home"
import Link from "next/link"
import { Url } from "next/dist/shared/lib/router/router"

interface Carousel {
    carouselItems: CarouselProps[]
}


export default function Carousel({carouselItems}: Carousel) {    
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide()
        }, 8000)

        return () => clearTimeout(timer)
    })

    function prevSlide() {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? carouselItems.length - 1 : currentIndex - 1
      setCurrentIndex(newIndex)
    }
  
    function nextSlide() {
      const isLastSlide = currentIndex === carouselItems.length - 1
      const newIndex = isLastSlide ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
    }

    function goToSlide(slideIndex: number) {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="max-w-[2880px] mt-2 py-4 w-full relative group">
            <div className="transition-colors transform max-w-[100%] h-full bg-center bg-cover">
                <Link target="_blank" href={carouselItems[currentIndex].redirect ? carouselItems[currentIndex].redirect as Url : '/'}>
                <Image
                    src={carouselItems[currentIndex].image}
                    alt={carouselItems[currentIndex].alt}
                    width={2880}
                    height={1620}
                />
                </Link>
            </div>
            {/* arrow right */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-6xl rounded-full p-2 text-white/50 cursor-pointer hover:text-primary_300 transition'>
                <BiSolidRightArrowCircle onClick={nextSlide} />
            </div>
            {/* arrow left */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-6xl rounded-full p-2 text-white/50 cursor-pointer hover:text-primary_300 transition'>
                <BiSolidLeftArrowCircle onClick={prevSlide}/>
            </div>
            {/* title */}
            <div className='absolute left-8 top-[65%] lg:top-[75%] p-2 md:p-4 text-white'>
                <h2 className='text-3xl md:text-6xl'>{carouselItems[currentIndex].title}</h2>
                <h4 className='mt-1/2 md:mt-4 text-xl md:text-3xl'>{carouselItems[currentIndex].subtitle}</h4>
            </div>
            <div className="absolute top-[85%] left-[45%] lg:left-[50%] lg:top-[90%] flex gap-3 justify-center py-2">
                {carouselItems.map((photo, index) => (
                    <div key={photo._key} className="text-base lg:text-xl text-white hover:text-primary_300 transition">
                        {
                            currentIndex === index ? <BsRecordCircle onClick={() => goToSlide(index)}/> : < BsRecordCircleFill onClick={() => goToSlide(index)}/>
                        }
                    </div>
                ))}
            </div>
        </div>
    )

}