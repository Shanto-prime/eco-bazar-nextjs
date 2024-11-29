"use client";

import AddCart from "@/components/addCart";
import Cart from "@/components/cart";
import Deals from "@/components/home/Deals";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import Nav from "@/components/Nav";
import MainLayout from "@/layout/MainLayout";
import TopCategory from "./TopCategory";
import Offers from "./Offers";
import NewProduct from "./NewProduct";

export default function Home() {
    return (
        <>
            <MainLayout>
                <HeroSection />
                <FeaturedProducts />
                <Deals />
                <TopCategory/>
                <Offers/>
                <NewProduct/>
                <div className="bg-[#2093ff] mt-5 py-5 px-4 container mx-auto">
                    <p>Offers</p>
                    <p>Newest Products</p>
                    <p>Reviews</p>
                    <p>Newsletters</p>
                    <Cart></Cart>
                    <AddCart></AddCart>
                </div>
            </MainLayout>
        </>
    );
}
