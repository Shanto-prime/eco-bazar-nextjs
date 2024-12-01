import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Pagination } from 'swiper/modules';
import { getReviews } from "@/utils/apiCaller";
import SectionHeader from "../partials/SectionHeader";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import Image from "next/image";
import Rating from "../partials/Rating";
import RightArrow from "../icons/RightArrow";



export default function UserReview() {
    const [reviews, setReviews] = useState([]);
    const swiperRef = useRef(null);
    useEffect(() => {
        setReviews(getReviews())
    }, []);

    return (
        <>
            <div className="bg-greenGray-100 px-4 md:px-0">
                <div className="container mx-auto pt-8 pb-32 overflow-hidden">
                    <div className="flex justify-between items-center">
                        <SectionHeader
                            align="left"
                            styleClass="justify-start"
                            title="Clint Testimonial"
                        />
                        <div className="flex flex-row justify-end">
                            <div className="btn hover:bg-base hover:text-white border-2 transition-all duration-700 border-gray-200 bg-white rounded-full" onClick={() => swiperRef.current.swiper.slidePrev()} ><RightArrow isLeft={true} /></div>
                            <div className="btn hover:bg-base hover:text-white border-2 transition-all duration-700 border-gray-200 bg-white rounded-full" onClick={() => swiperRef.current.swiper.slideNext()} ><RightArrow /></div>
                        </div >
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5 justify-center ">
                        <Swiper
                            className="review"
                            ref={swiperRef}
                            grabCursor={true}
                            keyboard={{
                                enabled: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Keyboard, Pagination]}
                            breakpoints={{
                                425: { slidesPerView: 1, slidesPerGroup: 1 },
                                768: { slidesPerView: 2, slidesPerGroup: 2 },
                                1024: { slidesPerView: 3, slidesPerGroup: 3 },
                            }}
                        >
                            {reviews.map((review) => (
                                <SwiperSlide key={review.name} className="review">
                                    <div className="p-6 bg-white rounded-lg shadow-xl mb-10 h-full">
                                        <Image
                                            src="/review.svg"
                                            alt="quote"
                                            height={26}
                                            width={32}
                                            className="!w-8 !h-6 mb-4"
                                        />
                                        <p className="mb-6">{review.description}</p>
                                        <div className="flex flex-row items-center justify-between ">
                                            <div className="flex flex-row items-center gap-3">
                                                <Image
                                                    className="!w-14 !h-14 rounded-full"
                                                    src={review.imageSrc}
                                                    alt="PP"
                                                    height={56}
                                                    width={56}
                                                />
                                                <div className="flex flex-col">
                                                    <h4>{review.name}</h4>
                                                    <p>{review.userType}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-row">
                                                <Rating rating={review.rating} w={20} h={20} />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}