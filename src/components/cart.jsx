import { useCartStore } from "@/store/cartStore"

export default function Cart() {
    const products = useCartStore((state) => state.products);
    return (
        <>
            <h1>Cart items count: {products}</h1>
        </>
    )
}