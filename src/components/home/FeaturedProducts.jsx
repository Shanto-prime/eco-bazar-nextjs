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
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 mx-auto container justify-items-center">
                    {featuredProduct.map((product) => (
                        <Product key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}
