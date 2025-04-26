import RightArrow from "@/components/icons/RightArrow";

export default function BtnDefault({ element }) {
    return (
        <div className="flex justify-center ">
            <button className="transition-all duration-700 hover:bg-base hover:text-white py-4 px-8 flex flex-row justify-center items-center gap-1 bg-white rounded-full text-base">
                <p className="text-sm font-semibold">{element}</p>
                <RightArrow />
            </button>
        </div>
    )
}