import Star from "../icons/Star";

export default function Rating({ rating, w = 12, h = 12 }) {
    const filledStars = Math.floor(rating);
    const emptyStars = 5 - filledStars;

    return (
        <>
            {Array.from({ length: filledStars }).map((_, index) => (
                <Star key={`filled-${index}`} fill="#FF8A00" width={w} height={h} />
            ))}
            {/* Render empty stars */}
            {Array.from({ length: emptyStars }).map((_, index) => (
                <Star key={`empty-${index}`} fill="#D3D3D3" width={w} height={h}/>
            ))}
        </>
    )
}