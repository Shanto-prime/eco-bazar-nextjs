"use client";

import Image from 'next/image'
import 'boxicons'
const Nav = () => {
    return (
        <>
            <div className="flex mx-auto justify-center">
                <div className="container flex justify-between py-4">
                    <p className="text-[#666666] poppins text-[13px]">Free shipping on all orders over $50</p>
                    <div className="text-[#666666] flex flex-row gap-4 poppins">
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
            </div>
            <div className="container flex justify-between py-7 mx-auto">
                <div className='flex flex-row gap-2 items-center'>
                    <Image
                        src="/logo.jpeg"
                        alt="eco"
                        width={25}
                        height={25}
                    />
                    <h1 className='poppins text-2xl font-medium text-[#002603]'>Ecobazar</h1>
                </div>
                <div>
                    <label className="input w-[500px] flex items-center justify-between gap-2 pl-5 pr-0">
                        <box-icon name='search' animation='flashing' ></box-icon>
                        <input type="text" className="w-full" placeholder="Search Here" />
                        <button className='bg-[#00B307] py-3 px-5 rounded-lg rounded-tl-none rounded-bl-none'>Search</button>
                    </label>
                </div>
                <div className='flex items-center gap-3'>
                    <box-icon name='heart' ></box-icon>
                    <hr className='border-[#CCCCCC] border-r-2 h-1/2 ' />
                    <box-icon name='shopping-bag' ></box-icon>
                    <div className='poppins'>
                        <p className='text-xs text-[#4D4D4D]'>shopping cart:</p>
                        <p className='text-[#1A1A1A] font-medium text-sm'>$57.00</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#333333]">
                <div className='container flex justify-between py-7 mx-auto'>
                    <div className='flex flex-row gap-3 items-center text-[#999999]'>
                        <div className='flex flex-row text-white items-center'>
                            <h4 className=''>Home</h4>
                            <box-icon name='chevron-down' color="#fff"></box-icon>
                        </div>
                        <div className='flex flex-row text-[#999999] items-center'>
                            <h4 className=''>Shop</h4>
                            <box-icon name='chevron-down' color="#999999"></box-icon>
                        </div>
                        <div className='flex flex-row text-[#999999] items-center'>
                            <h4 className=''>Pages</h4>
                            <box-icon name='chevron-down' color="#999999"></box-icon>
                        </div>
                        <div className='flex flex-row text-[#999999] items-center'>
                            <h4 className=''>Blog</h4>
                            <box-icon name='chevron-down' color="#999999"></box-icon>
                        </div>
                        <div>About Us</div>
                        <div>Contact Us</div>
                    </div>
                    <div className='flex flex-row gap-2 text-white'>
                        <box-icon name='phone-call' animation='tada' color="white"></box-icon>
                        <p>(219)555 - 0114</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nav

