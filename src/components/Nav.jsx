"use client";

import Image from 'next/image'
import React, { useState } from 'react';
import 'boxicons'
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeSidebar = () => setIsOpen(false);

    return (
        <>
            <div className="flex flex-col mx-auto justify-center px-4 overflow-hidden">
                <div className="container flex justify-between py-4 mx-auto">
                    <p className="text-[#666666] poppins text-[13px]">Free shipping on all orders over $50</p>
                    <div className="text-[#666666] md:flex flex-row gap-4 poppins hidden">
                        <div className='flex flex-row flex-wrap items-center'>
                            <p>Eng</p>
                            <box-icon name='chevron-down' color="#666666"></box-icon>
                        </div>
                        <div className='flex flex-row flex-wrap items-center'>
                            <p>USD</p>
                            <box-icon name='chevron-down' color="#666666"></box-icon>
                        </div>
                        <div className='flex flex-row flex-wrap items-center gap-1'>
                            <p>Sign In</p>
                            <box-icon name='minus' animation='spin' ></box-icon>
                            <p>Sign Up</p>
                        </div>
                    </div>
                </div>
                <hr className='border-b-2 w-full mt-3 border-gray-200'/>
            </div>
            <div className="container md:flex justify-between md:py-7 py-3 mx-auto px-4">
                <div className='flex flex-row gap-2 items-center'>
                    <Image
                        src="/logo.jpeg"
                        alt="eco"
                        width={25}
                        height={25}
                    />
                    <h1 className='poppins text-2xl font-medium text-[#002603]'>Ecobazar</h1>
                </div>
                <div className='w-full md:w-96 my-5'>
                    <label className="input w-full md:w-[380px] lg:w-[500px] flex items-center justify-between gap-2 pl-5 pr-0">
                        <box-icon name='search' animation='flashing' ></box-icon>
                        <input type="text" className="w-full" placeholder="Search Here" />
                        <button className='bg-[#00B307] py-3 px-5 rounded-lg rounded-tl-none rounded-bl-none'>Search</button>
                    </label>
                </div>
                <div className='flex items-center lg:justify-between lg:gap-3 md:w-40'>
                    <div className='flex items-center lg:gap-3'>
                        <box-icon name='heart' ></box-icon>
                        <hr className='border-[#CCCCCC] border-r-2 h-1/2 ' />
                        <box-icon name='shopping-bag' ></box-icon>
                    </div>
                    <div className='poppins'>
                        <p className='text-xs text-[#4D4D4D]'>shopping cart:</p>
                        <p className='text-[#1A1A1A] font-medium text-sm'>$57.00</p>
                    </div>
                </div>
            </div>
            <nav className="px-4 py-5 lg:bg-[#333333]">
                <div className='container mx-auto'>
                    {/* Navbar for larger devices */}
                    <div className="hidden lg:flex justify-between items-center">
                        <div className="flex justify-between gap-3 items-center text-white">
                            <div className="group relative">
                                <details className="dropdown">
                                    <summary className=" m-1">Home</summary>
                                    <ul className=" dropdown-content z-10 w-24 p-2 shadow  rounded-xl text-white flex flex-col gap-2">
                                        <li className='bg-base-light rounded-md py-2 text-center hover:text-gray-800 hover:bg-base'>Home 1</li>
                                        <li className='bg-base-light rounded-md py-2 text-center hover:text-gray-800 hover:bg-base'>Home 2</li>
                                    </ul>
                                </details>
                            </div>
                            <div className="group relative">
                                <details className="dropdown">
                                    <summary className=" m-1">Shop</summary>
                                    <ul className=" dropdown-content z-10 w-24 p-2 shadow-md  rounded-xl text-white flex flex-col gap-2">
                                        <li className='bg-base-light rounded-md py-2 text-center hover:text-gray-800 hover:bg-base'>Fast Food</li>
                                        <li className='bg-base-light rounded-md py-2 text-center hover:text-gray-800 hover:bg-base'>Soft Drinks</li>
                                        <li className='bg-base-light rounded-md py-2 text-center hover:text-gray-800 hover:bg-base'>Vegetables</li>
                                        <li className='bg-base-light rounded-md py-2 text-center hover:text-gray-800 hover:bg-base'>Fruits</li>
                                    </ul>
                                </details>
                            </div>
                            <div className="flex items-center text-white">
                                <box-icon name="chevron-right" color="#999999"></box-icon>
                                <h4>Pages</h4>
                            </div>
                            <div className="flex items-center text-white">
                                <box-icon name="chevron-right" color="#999999"></box-icon>
                                <h4>Blog</h4>
                            </div>
                            <div>About Us</div>
                            <div>Contact Us</div>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <box-icon name="phone-call" animation="tada" color="white"></box-icon>
                            <p>(219)555 - 0114</p>
                        </div>
                    </div>

                    {/* Navbar for small devices */}
                    <div className="lg:hidden flex items-center justify-between">
                        <label onClick={() => setIsOpen(true)}>
                            <svg
                                className="swap-off fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                            >
                                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                            </svg>
                        </label>
                    </div>

                    {/* Sidebar and overlay */}
                    {isOpen && (
                        <>
                            <div
                                className="fixed inset-0 z-10 bg-black bg-opacity-50"
                                onClick={closeSidebar}
                            ></div>
                            <div className="fixed top-0 left-0 z-20 max-w-72 h-full bg-gray-800 text-white p-8">
                                <ul>
                                    <li className="mb-4">
                                        <div className="cursor-pointer">
                                            Home
                                            <ul className="pl-4 mt-2">
                                                <li>Submenu 1</li>
                                                <li>Submenu 2</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="mb-4">
                                        <div className="cursor-pointer">
                                            Shop
                                            <ul className="pl-4 mt-2">
                                                <li>Submenu 1</li>
                                                <li>Submenu 2</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="mb-4">Pages</li>
                                    <li className="mb-4">Blog</li>
                                    <li className="mb-4">About Us</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </>
    )
}
export default Nav

