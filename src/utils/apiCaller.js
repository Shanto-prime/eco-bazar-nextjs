import products from "@/data/products.json" with { type: "json" };

export function getFeaturedProducts(length = 5) {
    return products.filter((product) => product.isFeatured).slice(0, length);
}
export function getHotDeals(length = 3) {
    return products.filter((product) => product.isHot).slice(0, length);
}
export function getBestSellerDeals(length = 3) {
    return products.filter((product) => product.isBestSeller).slice(0, length);
}
export function getTopRatedDeals(length = 3) {
    return products.filter((product) => product.isTopRated).slice(0, length);
}
export function getNewProducts(length = 10) {
    return products.slice( (-1) * length);
}