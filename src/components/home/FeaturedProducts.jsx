"use client";
import SectionHeader from "../partials/SectionHeader";
import featuredProduct from "../../../src/store/featuredProduct.json"
import Product from "../partials/Product";

export default function FeaturedProducts() {
    return (
        <>
        <div className="container mx-auto relative">
            <SectionHeader title="Featured Products" styleClass="text-gray-900" />
            <div className="my-12">
                <div className="flex flex-row gap-5 justify-center items-center flex-wrap mx-auto container justify-items-center">
                    {featuredProduct.map((product) => (
                        <Product key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}
