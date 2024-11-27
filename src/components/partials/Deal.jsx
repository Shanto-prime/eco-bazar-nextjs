import Image from "next/image";
import ShoppingBag from "../icons/ShoppingBag";
import Eye from "../icons/Eye";
import Wishlist from "../icons/Wishlist";
import Rating from "./Rating";

const Deal = ({ product }) => {

    return (
        <>
            <div className="relative shadow-xl border-2 transition-all duration-700 border-transparent hover:border-base-hard rounded-md p-1 flex flex-row" key={product.id}>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={102}
                    height={102}
                />
                {product.discount && (
                    <div className="absolute top-3 left-3">
                        <h5 className="bg-red px-2 py-1 rounded-lg text-sm text-white">
                            <span className="font-medium">{product.discount.percentage}% </span>
                            OFF
                        </h5>
                    </div>
                )}
                <div className="p-4 flex justify-between group">
                    <div className="relative">
                        {/* Product Details */}
                        <h3 className="text-sm text-base-hard">{product.name}</h3>
                        <div className="group-hover:opacity-0 transition-opacity duration-300">
                            {product.discount ? (
                                <p className="font-medium text-gray-900">$<span>{product.discount.discountedPrice}</span>  $<span className="line-through font-normal text-gray-500">{product.price}</span></p>
                            ) : (
                                <p className="font-medium text-gray-900">$ <span>{product.price}</span></p>
                            )}
                            <div className="flex flex-row">
                                <Rating rating={product.rating}/>
                            </div>
                        </div>

                        {/* Shopping Bag Buttons */}
                        <div className="absolute top-6 left-0 flex flex-row gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                <ShoppingBag w={15} h={15} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                <Eye w={15} h={15} />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                                <Wishlist w={15} h={15} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Deal;
