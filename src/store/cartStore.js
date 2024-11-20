import { create } from 'zustand'

export const useCartStore = create((set) => ({
    products: [],
    increaseItem: () => set((state) => ({ products: state.products +++ 1 })),
    decreaseItem: () => set((state) => ({ products: state.products - 1 })),
}))