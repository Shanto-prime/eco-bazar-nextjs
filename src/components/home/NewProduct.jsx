import { getNewProducts } from "@/utils/apiCaller"
import Product from "../partials/Product"
import { useEffect, useRef, useState } from "react"
import SectionHeader from "../partials/SectionHeader";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import RightArrow from "../icons/RightArrow";
SwiperCore.use([Navigation]);

export default function NewProduct() {
    const [newProducts, setNewProducts] = useState([]);
    const swiperRef = useRef(null);
    useEffect(() => {
        const test = getNewProducts();
        setNewProducts(test);
    }, []);

    return (
        <>
            <div className="container mx-auto my-24 px-4 md:px-0">
                <div className="flex justify-between items-center">
                    <SectionHeader
                        align="text-left"
                        styleClass="justify-start"
                        title="Newest Products" />
                    <div className="flex flex-row justify-end">
                        <div className="btn hover:bg-base hover:text-white border-2 transition-all duration-700 border-gray-200 bg-white rounded-full" onClick={() => swiperRef.current.swiper.slidePrev()} ><RightArrow isLeft={true} /></div>
                        <div className="btn hover:bg-base hover:text-white border-2 transition-all duration-700 border-gray-200 bg-white rounded-full" onClick={() => swiperRef.current.swiper.slideNext()} ><RightArrow /></div>
                    </div >
                </div>

                <Swiper
                    ref={swiperRef}
                    spaceBetween={20}
                    breakpoints={{
                        425: { slidesPerView: 2, },
                        768: { slidesPerView: 3, },
                        1024: { slidesPerView: 4, },
                        1280: { slidesPerView: 5, },
                        1540: { slidesPerView: 6, },
                    }}
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