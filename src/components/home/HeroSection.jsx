"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import slides from './slide.json';


export default function HeroSection() {
    return (
        <>
            <div className='-mx-10'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-40"
                    loop={true}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-row p-24 items-center'>
                                <div className='flex flex-col items-start text-left my-5'>
                                    <h6 className='base-color my-2'>{slide.heading}</h6>
                                    <h4 className='text-7xl font-semibold base-gray mb-7'>{slide.title}</h4>
                                    <h5 className='text-3xl mb-3'>{slide.offer} <span className='base-orange font-semibold'>{slide.percentage}</span></h5>

                                    <p className='text-sm light-gray mb-8'>{slide.description}</p>
                                    <button className='btn base-bg rounded-full !hover:base-gray text-white'>Shop Now <box-icon name='right-arrow-alt' color='white'></box-icon></button>
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
            <div className='flex flex-row justify-between p-10 shadow-xl absolute container z-10 bg-white rounded-lg -bottom-20'>
                <div className='flex flex-row items-center gap-4'>
                    <Image
                        src="/shipping.png"
                        alt="banner"
                        width={40}
                        height={30}
                    />
                    <div>
                        <p className='font-semibold'>Free Shipping</p>
                        <p className='light-gray'>Free shipping on all your order</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <Image
                        src="/support.png"
                        alt="banner"
                        width={40}
                        height={30}
                    />
                    <div>
                        <p className='font-semibold'>Customer Support 24/7</p>
                        <p className='light-gray'>Instant access to support</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <Image
                        src="/bag.png"
                        alt="banner"
                        width={40}
                        height={30}
                    />
                    <div>
                        <p className='font-semibold'>Secure Payment</p>
                        <p className='light-gray'>We ensure your money is save</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-4'>
                    <Image
                        src="/bag.png"
                        alt="banner"
                        width={40}
                        height={30}
                    />
                    <div>
                        <p className='font-semibold'>Money Back Guarantee</p>
                        <p className='light-gray'>30 Days Money-Back Guarantee</p>
                    </div>
                </div>
            </div>
        </>
    )
}