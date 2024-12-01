"use client";
import SectionHeader from "../partials/SectionHeader";
import Product from "../partials/Product";
import { getFeaturedProducts } from "@/utils/apiCaller";
import { useEffect, useState } from "react";

export default function FeaturedProducts() {
    const [featuredProduct, setFeaturedProduct] = useState([]);

    useEffect(() => {
        setFeaturedProduct(getFeaturedProducts());
    }, []);


    return (
        <>
            <div className="container mx-auto relative">
                <SectionHeader title="Featured Products"/>
                <div className="my-12">
                    <div className="flex flex-row gap-5 justify-center lg:justify-between items-center flex-wrap mx-auto container justify-items-center">
                        {featuredProduct.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
