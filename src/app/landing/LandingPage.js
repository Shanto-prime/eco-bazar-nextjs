"use client";

import AddCart from "@/components/addCart";
import Cart from "@/components/cart";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import Nav from "@/components/Nav";

export default function LandingPage() {
    return (
        <>
            <Nav />
            <div className="container mx-auto relative">
                <HeroSection /> {/*  heroSection */}
            </div>
            <div className="container mx-auto relative">
            <FeaturedProducts /> {/*  Featured Products */}
            </div>

            


            <div className="bg-[#00ff33] pt-5">
                <p>Cards</p>
                <p>Top category</p>
                <p>Offers</p>
                <p>Newest Products</p>
                <p>Reviews</p>
                <p>Newsletters</p>
            </div>
            <Cart></Cart>
            <AddCart></AddCart>
        </>
    );
}
