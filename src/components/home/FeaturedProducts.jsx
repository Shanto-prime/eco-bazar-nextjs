import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import Star from "../icons/Star";
import StarBase from "../icons/StarBase";
import ShoppingBag from "../icons/ShoppingBag";
import featuredProduct from "../../../src/store/featuredProduct.json"

export default function FeaturedProducts() {
    return (
        <>
            <SectionHeader title="Featured Products" styleClass="text-gray-900" />
            <div className="my-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mx-auto container justify-items-center">
                    {featuredProduct.map((product) => (
                        <div className="shadow-xl relative p-4" key={product.id}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={246}
                                height={246}
                            />
                            <div className="p-4 flex justify-between">
                                <div className="">
                                    <h3 className="text-sm text-gray-800">{product.name}</h3>
                                    <p className="font-medium text-gray-900">$ <span>{product.price.toFixed(2)}</span></p>
                                    <div className="flex flex-row">
                                        {Array.from({ length: product.rating }).map((_, index) => (
                                            <Star key={index} />
                                        ))}
                                        {Array.from({ length: 5 - product.rating }).map((_, index) => (
                                            <StarBase key={index} />
                                        ))}
                                    </div>
                                </div>
                                <div className="">
                                    <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                        <ShoppingBag w={15} h={15} />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 flex flex-col gap-2">
                                <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                    <ShoppingBag w={15} h={15} />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                    <ShoppingBag w={15} h={15} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
