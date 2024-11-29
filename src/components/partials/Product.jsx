import Image from "next/image";
import ShoppingBag from "../icons/ShoppingBag";
import Eye from "../icons/Eye";
import Wishlist from "../icons/Wishlist";
import Rating from "./Rating";

const Product = ({ product }) => {

    return (
        <>
            <div className=" !bg-white border-2 rounded-lg border-gray-200 transition-all duration-700 hover:shadow-green-200 hover:shadow-md hover:border-base-hard relative p-4" key={product.id}>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={246}
                    height={246}
                />
                <div className="py-4 ps-4 flex justify-between">
                    <div className="">
                        <h3 className="text-sm text-gray-800">{product.name}</h3>
                        {product.discount?
                        ( <p className="font-medium text-gray-900">$<span>{product.discount.discountedPrice}</span>  $<span className="line-through font-normal text-gray-500">{product.price}</span></p>
                        ):(
                        <p className="font-medium text-gray-900">$ <span>{product.price}</span></p>
                        )}
                        
                        <div className="flex flex-row">
                            <Rating rating={product.rating}/>
                        </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                        <ShoppingBag w={15} h={15} />
                    </button>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                        <Wishlist w={15} h={15} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white hover:bg-base text-gray-900 hover:text-white flex justify-center items-center transition-all duration-300">
                        <Eye w={15} h={15} />
                    </button>
                </div>
                {product.discount?(

                    <div className="text-sm text-white flex flex-row py-1 px-2 rounded gap-2 absolute top-4 left-4 bg-red ">
                        <p>Sale</p>
                        <p className="font-medium">{product.discount.percentage}%</p>
                    </div>
                ):(<></>)}
                
            </div>
        </>
    );
};

export default Product;
