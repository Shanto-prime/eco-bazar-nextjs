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
            <div className="bg-cover bg-bottom w-[320px] lg:w-80 xl:w-[400px] 2xl:w-[496px] max-w-[496px] h-[510px] lg:h-[600px] xl:h[690px] 2xl:h-[780px]" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="flex flex-col basis-auto justify-center items-center mb-6">
                    <p className={`mt-12 uppercase font-medium text-xs lg:text-lg xl:text-xl 2xl:text-2xl text-center ${textColor}`}>{subTitle}</p>
                    <h5 className={`mt-2 mb-4 font-semibold text-[32px] lg:text-[36px] xl:text-[42px] 2xl:text-[46px] text-center ${textColor}`}>{title}</h5>
                    <div className={isStarting}>
                        <p className='text-lg text-white'>Started at <span className='text-orange text-xl font-semibold'>${starting}</span></p>
                    </div>
                    <div className={isUpto}>
                        <p className=' text-black text-lg my-4'>Up to <span className='bg-gray-900 font-semibold text-lg px-3 py-[6px] rounded-lg text-[#FCC900] z-10'>{upto}</span></p>
                    </div>
                    <div className={isCount}>
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max text-white">
                            <div className="flex flex-col uppercase">
                                <span className="countdown text-xl lg:text-2xl xl:text-4xl">
                                    <span style={{ "--value": days }}></span>
                                </span>
                                days
                            </div>
                            <p className='text-xl lg:text-2xl xl:text-4xl'>:</p>
                            <div className="flex flex-col uppercase">
                                <span className="countdown text-xl lg:text-2xl xl:text-4xl">
                                    <span style={{ "--value": hours }}></span>
                                </span>
                                hours
                            </div>
                            <p className='text-xl lg:text-2xl xl:text-4xl'>:</p>
                            <div className="flex flex-col uppercase">
                                <span className="countdown text-xl lg:text-2xl xl:text-4xl">
                                    <span style={{ "--value": minutes }}></span>
                                </span>
                                min
                            </div>
                            <p className='text-xl lg:text-2xl xl:text-4xl'>:</p>
                            <div className="flex flex-col uppercase">
                                <span className="countdown text-xl lg:text-2xl xl:text-4xl">
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
