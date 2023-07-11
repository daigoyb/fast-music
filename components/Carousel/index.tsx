"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft, faChevronCircleRight, faCircle, faDotCircle } from "@fortawesome/free-solid-svg-icons"

type tCarousel = {
    slides: tCarouselItem[];
    carouselTimer: number;
}

type tCarouselItem = {
    imgUrl: string;
    title?: string;
    subTitle?: string;
    titlePlace?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    slug?: string;
    textColor?: string;
}

export default function Carousel() {
    const carouselPhotos = [
        'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ]
    
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 5000)

        return () => clearTimeout(timer)
    })

    function prevSlide() {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? carouselPhotos.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  
    function nextSlide() {
      const isLastSlide = currentIndex === carouselPhotos.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex)
    }

    function goToSlide(slideIndex: number) {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="max-w-[2880px] mt-2 py-4 w-full relative group">
            <div className="transition-colors transform max-w-[100%] h-full bg-center bg-cover">
                <Image
                    src={carouselPhotos[currentIndex]}
                    alt='photo'
                    width={2880}
                    height={1620}
                />
            </div>
            {/* arrow right */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-4xl rounded-full p-2 text-primary_300/30 cursor-pointer hover:text-primary_500/50'>
                <FontAwesomeIcon onClick={nextSlide} icon={faChevronCircleRight}/>
            </div>
            {/* arrow left */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-4xl rounded-full p-2 text-primary_300/30 cursor-pointer hover:text-primary_500/50'>
                <FontAwesomeIcon onClick={prevSlide} icon={faChevronCircleLeft} />
            </div>
            {/* title */}
            <div className='absolute top-[65%] lg:top-[75%] p-2 md:p-4 text-white'>
                <h2 className='text-3xl md:text-6xl'>Titulo principal</h2>
                <h4 className='mt-1/2 md:mt-4 text-xl md:text-3xl'>Titulo secundário</h4>
            </div>
            <div className="flex gap-3 top-4 justify-center py-2">
                {carouselPhotos.map((ph, index) => (
                    <div key={index} className="text-lg text-white">
                        <FontAwesomeIcon onClick={() => goToSlide(index)} icon={currentIndex === index ? faDotCircle : faCircle}/>
                    </div>
                ))}
            </div>
        </div>
    )

}