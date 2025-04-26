"use client";

import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import SectionHeader from "../partials/SectionHeader";
import categories from "@/data/categories.json";
import products from "@/data/products.json";
import Image from 'next/image';

export default function TopCategory() {
    const getCategoryProductCount = (categoryId) => {
        return products.filter((product) => product.category_id === categoryId).length;
    };

    return (
        <div className='container mx-auto px-4 md:px-0'>
            <SectionHeader title="Top Category" />
            <div className="">
                <Swiper
                    className='category '
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={20}
                    breakpoints={{
                        425: { slidesPerView: 2, },
                        768: { slidesPerView: 4, },
                        1024: { slidesPerView: 6, },
                    }}
                    navigation
                    scrollbar={{ draggable: true }}
                >
                    {categories.map((category, id) => {
                        const productCount = getCategoryProductCount(category.id);
                        return (
                            <SwiperSlide key={id} className='swiper-category cursor-pointer'>
                                <div className='border-2 rounded-xl flex flex-col justify-center items-center'>
                                    <div className='w-20 h-20 mt-8 mx-16'>
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            width={78}
                                            height={78}
                                        />
                                    </div>
                                    <h3 className='text-base-hard text-lg font-medium mt-5 mb-2'>{category.name}</h3>
                                    <p className='text-gray-600 text-sm mb-6'>
                                        {productCount} Products
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}
