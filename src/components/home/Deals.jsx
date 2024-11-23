"use client";
import Image from "next/image";
import Star from "../icons/Star";
import StarBase from "../icons/StarBase";
import ShoppingBag from "../icons/ShoppingBag";

export default function Deals() {
    return (
        <>
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-auto px-4 gap-6">
                <div className="">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-medium">Hot Deals</h2>
                        {/* card details */}
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j2">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j5j">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j8j">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-medium">Best Seller</h2>
                        {/* card details */}
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j2">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j5j">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j8j">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-medium">Top Rated</h2>
                        {/* card details */}
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j2">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j5j">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j8j">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {featuredProduct.map((product) => (
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
                    ))} */}
                </div>
                <div className="">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-medium">Hot Deals</h2>
                        {/* card details */}
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j2">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j5j">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-4 flex flex-row" key="j8j">
                            <Image
                                src="/corn.png"
                                alt=""
                                width={102}
                                height={102}
                            />
                            <div className="p-4 flex justify-between group">
                                <div className="relative">
                                    {/* Product Details */}
                                    <h3 className="text-sm text-base-hard">Corn</h3>
                                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                                        <p className="font-medium text-gray-900">$ <span>120</span></p>
                                        <div className="flex flex-row">
                                            <Star /><Star /><Star /><Star /> <StarBase />
                                        </div>
                                    </div>
                                    {/* Shopping Bag Buttons */}
                                    <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                            <ShoppingBag w={15} h={15} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
