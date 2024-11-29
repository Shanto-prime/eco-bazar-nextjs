import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { getNewProducts } from "@/utils/apiCaller"
import Product from "../partials/Product"
import { useEffect, useState } from "react"
import SectionHeader from "../partials/SectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

export default function NewProduct() {
    const [newProducts, setNewProducts] = useState([]);
    useEffect(() => {
        const test = getNewProducts();
        setNewProducts(test);
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <SectionHeader
                    align="text-left"
                    styleClass="justify-start"
                    title="Newest Products" />
                <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={20}
                    breakpoints={{
                        425: { slidesPerView: 2, },
                        768: { slidesPerView: 3, },
                        1024: { slidesPerView: 5, },
                    }}
                    navigation
                >
                    {newProducts.map((product, id) => {
                        return (
                            <SwiperSlide key={id} className='swiper cursor-pointer'>
                                <Product product={product} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    )
}