import React from 'react';
import Image from "next/image";



const Footer = ({ product }) => {
    // console.log(product,"product")
    return (
        <>
            <div>
                <p>hi</p>
            </div>
            <div className="bg-[#1A1A1A] flex items-center justify-center p-10">
                <div className="w-full max-w-7xl grid grid-cols-12 gap-6">

                    <div className="col-span-4 bg-[#1A1A1A] p-6 rounded shadow">
                        <h2 className="text-2xl font-bold mb-4">About Shopery</h2>
                        <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                        <div className='footer_about_contacts'>
                            <p className='text-[#808080] flex flex-row gap-4'>
                                <span>(219) 555-0114</span>
                                or
                                <span>Proxy@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <div className='col-span-5 grid grid-cols-12'>
                        <div className="col-span-4 bg-[#1A1A1A] p-6 rounded shadow">
                            <h2 className="text-xl font-semibold mb-4">Main Title 2</h2>
                            <ul className="space-y-2">
                                <li>My Account</li>
                                <li>Order History</li>
                                <li>Shoping Cart</li>
                                <li>Wishlist</li>
                                <li>Settings</li>
                            </ul>
                        </div>
                        <div className="col-span-4 bg-[#1A1A1A] p-6 rounded shadow">
                            <h2 className="text-xl font-semibold mb-4">Main Title 3</h2>
                            <ul className="space-y-2">
                                <li>Contact</li>
                                <li>Faqs</li>
                                <li>Terms & Condition</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col-span-4 bg-[#1A1A1A] p-6 rounded shadow">
                            <h2 className="text-xl font-semibold mb-4">Main Title 4</h2>
                            <ul className="space-y-2">
                                <li>About</li>
                                <li>Shop</li>
                                <li>Product</li>
                                <li>Products Details</li>
                                <li>Track Order</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-3 bg-[#1A1A1A] py-6 rounded shadow">
                        <h2 className="text-xl font-bold mb-4">Download our Mobile App</h2>
                        <div className='mobile_apps'>
                            <div className='app'>
                                <div className='store_wrapper'>
                                    <Image
                                        src={"/app-store.png"}
                                        alt={"google-play"}
                                        width={102}
                                        height={102}
                                    />
                                </div>
                                <div className='store_name'>
                                    <span>Download on the</span>
                                    <p>App Store</p>
                                </div>
                            </div>
                            <div className='app'>
                                <div className='store_wrapper'>
                                    <Image
                                        src={"/google-play.png"}
                                        alt={"google-play"}
                                        width={102}
                                        height={102}
                                    />
                                </div>
                                <div className='store_name'>
                                    <span>Download on the</span>
                                    <p>Google play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer
