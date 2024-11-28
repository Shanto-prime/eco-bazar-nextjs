import CategoryOffer from "../partials/CategoryOffer";

export default function Offers() {
    return (
        <>
            <div className="container mx-auto my-5">
                <div className="flex flex-col lg:flex-row items-center md:justify-between gap-5">
                    <CategoryOffer 
                    subTitle="Best deals"
                    title="Sale of the Month"
                    countDown={1295999}
                    bgImg="/vegetable-offer.png"
                    isStarting="hidden"
                    isUpto="hidden"
                    />
                    <CategoryOffer 
                    subTitle="85% fat free"
                    title="Low-Fat Meat"
                    isCount="hidden"
                    bgImg="/meat-offer.png"
                    starting={79.99}
                    isUpto="hidden"
                    />
                    <CategoryOffer 
                    subTitle="Summer sale"
                    title="100% Fresh Fruit"
                    textColor="!text-gray-900"
                    isCount="hidden"
                    bgImg="/fruit-offer.png"
                    isStarting="hidden"
                    upto="64% off"
                    />
                </div>
            </div>
        </>
    )
}