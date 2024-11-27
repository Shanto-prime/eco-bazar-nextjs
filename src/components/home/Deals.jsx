"use client";

import { getHotDeals, getBestSellerDeals, getTopRatedDeals } from "@/utils/apiCaller";
import { useEffect, useState } from "react";
import Deal from "../partials/Deal";
import Image from "next/image";
import BtnDefault from "../partials/buttons/BtnDefault";


export default function Deals() {
    const [hotDeals, setHotDeals] = useState([]);
    const [bestSellerDeals, setBestSellerDeals] = useState([]);
    const [topRatedDeals, setTopRatedDeals] = useState([]);

    useEffect(() => {
        setHotDeals(getHotDeals(3));
        setBestSellerDeals(getBestSellerDeals(3));
        setTopRatedDeals(getTopRatedDeals(3));
    }, []);

    return (
        <>
            <div className="container mx-auto relative">
                <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto px-4 lg:px-0 gap-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-medium">Hot Deals</h2>
                        {hotDeals.map((product) => (
                            <Deal key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-medium">Best Seller</h2>
                        {bestSellerDeals.map((product) => (
                            <Deal key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-medium">Top Rated</h2>
                        {topRatedDeals.map((product) => (
                            <Deal key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="bg-[url('/vegetable-bag.png')] bg-cover bg-bottom">
                        <div className="flex flex-col justify-center">
                            <p className="mt-12 uppercase font-medium text-xs text-gray-900 text-center">Summer sale</p>
                            <h5 className=" mt-2 mb-4 text-base font-semibold !text-[32px] text-center">75% off</h5>
                            <BtnDefault element="Shop Now"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
