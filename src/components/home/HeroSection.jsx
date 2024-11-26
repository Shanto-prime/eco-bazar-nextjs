"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import slides from '../../../src/store/slide.json';
import RightArrow from '../icons/RightArrow';


export default function HeroSection() {
    return (
        <>
            <div className="container mx-auto relative">
                <div className='mx-auto'>
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mb-5 md:mb-10 lg:mb-40"
                        loop={true}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex flex-col-reverse lg:flex-row p-5 md:p-16 lg:p-24 items-center'>
                                    <div className='flex flex-col items-start text-left my-5'>
                                        <h6 className='text-base my-2'>{slide.heading}</h6>
                                        <h4 className='text-xl lg:text-7xl font-semibold text-gray-900 mb-7'>{slide.title}</h4>
                                        <h5 className='text-2xl lg:text-3xl mb-3'>{slide.offer} <span className='text-orange font-semibold'>{slide.percentage}</span></h5>

                                        <p className='text-sm text-gray-600 mb-8'>{slide.description}</p>
                                        <button className='btn bg-base rounded-full hover:text-gray-900 text-white'>Shop Now
                                            <RightArrow />
                                        </button>
                                    </div>
                                    <div>
                                        <Image
                                            src={slide.imageSrc}
                                            alt={slide.imageAlt}
                                            width={820}
                                            height={484}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='lg:absolute lg:top-[550px] z-10 w-full px-10 box-border flex justify-center'>
                    <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row justify-between gap-12 mb-5 p-5 md:p-10 shadow-xl lg:py- bg-white rounded-lg '>
                        <div className='flex flex-row md items-center gap-4'>
                            <Image
                                src="/delivery.svg"
                                alt="delivery van"
                                width={40 | `${10}`}
                                height={30 | `${8}`}
                            />
                            <div>
                                <p className='font-semibold'>Free Shipping</p>
                                <p className='text-gray-500'>Free shipping on all your order</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <Image
                                src="/headphones.svg"
                                alt="customer support"
                                width={40}
                                height={30}
                            />
                            <div>
                                <p className='font-semibold'>Customer Support 24/7</p>
                                <p className='text-gray-500'>Instant access to support</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <Image
                                src="/shopping-bag.svg"
                                alt="shopping bag"
                                width={40}
                                height={30}
                            />
                            <div>
                                <p className='font-semibold'>Secure Payment</p>
                                <p className='text-gray-500'>We ensure your money is save</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <Image
                                src="/moneyBack.svg"
                                alt="moneyBack"
                                width={40}
                                height={30}
                            />
                            <div>
                                <p className='font-semibold'>Money Back Guarantee</p>
                                <p className='text-gray-500'>30 Days Money-Back Guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}