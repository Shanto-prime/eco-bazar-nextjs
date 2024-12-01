import { getInstagramPosts } from "@/utils/apiCaller";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SocialMedia() {
    const [instagramPosts, setInstagramPosts] = useState([])
    useEffect(() => {
        setInstagramPosts(getInstagramPosts())
    }, [])
    return (
        <>
            <div className="container mx-auto px-4 md:px-0">
                <h2 className="text-center mt-24 mb-8 font-semibold text-4xl">Follow us on Instagram</h2>
                <div className="grid grid-cols-6 gap-2 md:gap-6 justify-items-center">
                    {instagramPosts.map((post) => (
                        <div key={post.id} className="relative group col-span-3 md:col-span-3 lg:col-span-2 xl:col-span-1 w-[190px] h-[190px]">
                            <div className=" relative rounded-[10px]">
                                <Image
                                    src={post.image}
                                    alt="Instagram Post"
                                    width={190}
                                    height={190}
                                    className="w-full h-full object-cover rounded-[10px]"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-[#2b572e] bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-in-out rounded-[10px]"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease-in-out rounded-[10px]">
                                    <Image
                                        src="/instagram.svg"
                                        alt="Instagram Logo"
                                        width={25}
                                        height={25}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}