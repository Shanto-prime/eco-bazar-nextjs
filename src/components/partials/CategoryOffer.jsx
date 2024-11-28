import { useState, useEffect } from 'react';
import BtnDefault from "./buttons/BtnDefault";

export default function CategoryOffer({ upto, isUpto, countDown, isCount, title, textColor = "text-white", subTitle, bgImg, starting, isStarting }) {
    const [counter, setCounter] = useState(countDown);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (counter > 0) {
                setCounter(prevCounter => prevCounter - 1);
            } else {
                clearInterval(intervalId); // Stop the countdown when it reaches zero
            }
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
    }, [counter]);

    // Calculate the days, hours, minutes, and seconds
    const days = Math.floor(counter / (60 * 60 * 24));
    const hours = Math.floor((counter % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((counter % (60 * 60)) / 60);
    const seconds = counter % 60;

    return (
        <div className=''>
            <div className="bg-cover bg-bottom w-[340px] h md:w-80 h-[480px] lg:w-[424px] lg:h-[536px]" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="flex flex-col justify-center items-center mb-6">
                    <p className={`mt-12 uppercase font-medium text-xs text-center ${textColor}`}>{subTitle}</p>
                    <h5 className={`mt-2 mb-4 font-semibold !text-[32px] text-center ${textColor}`}>{title}</h5>
                    <div className={isStarting}>
                        <p className='text-lg text-white'>Started at <span className='text-orange text-xl font-semibold'>${starting}</span></p>
                    </div>
                    <div className={isUpto}>
                        <p className=' text-black text-lg my-4'>Up to <span className='bg-gray-900 font-semibold text-lg px-3 py-[6px] rounded-lg text-[#FCC900] z-10'>{upto}</span></p>
                    </div>
                    <div className={isCount}>
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max text-white">
                            <div className="flex flex-col uppercase">
                                <span className="countdown text-2xl lg:text-5xl">
                                    <span style={{ "--value": days }}></span>
                                </span>
                                days
                            </div>
                            <p className='text-2xl lg:text-5xl'>:</p>
                            <div className="flex flex-col uppercase">
                                <span className="countdown text-2xl lg:text-5xl">
                                    <span style={{ "--value": hours }}></span>
                                </span>
                                hours
                            </div>
                            <p className='text-2xl lg:text-5xl'>:</p>
                            <div className="flex flex-col uppercase">
                                <span className="countdown text-2xl lg:text-5xl">
                                    <span style={{ "--value": minutes }}></span>
                                </span>
                                min
                            </div>
                            <p className='text-2xl lg:text-5xl'>:</p>
                            <div className="flex flex-col uppercase">
                                <span className="countdown text-2xl lg:text-5xl">
                                    <span style={{ "--value": seconds }}></span>
                                </span>
                                sec
                            </div>
                        </div>
                    </div>
                </div>
                <BtnDefault element="Shop Now" />
            </div>
        </div>
    );
}
