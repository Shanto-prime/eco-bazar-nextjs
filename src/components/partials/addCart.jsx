import { useCartStore } from "@/store/cartStore"

export default function AddCart() {
    const increaseItem = useCartStore((state) => state.increaseItem)
    const decreaseItem = useCartStore((state) => state.decreaseItem)
    return (
        <>
            <button onClick={increaseItem}>Add to cart</button>
            <button onClick={decreaseItem}>Remove from cart</button>
        </>
    )
}