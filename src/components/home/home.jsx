"use client";

import AddCart from "@/components/partials/addCart";
import Cart from "@/components/partials/cart";
import Deals from "@/components/home/Deals";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import MainLayout from "@/layout/MainLayout";
import TopCategory from "./TopCategory";
import Offers from "./Offers";
import NewProduct from "./NewProduct";
import UserReview from "./UserReview";
import SocialMedia from "./SocialMedia";

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
                <UserReview/>
                <SocialMedia/>
                {/* <div className="bg-[#2093ff] mt-5 py-5 px-4 container mx-auto">
                    <Cart></Cart>
                    <AddCart></AddCart>
                </div> */}
            </MainLayout>
        </>
    );
}
