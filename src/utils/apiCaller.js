import products from "@/data/products.json" with { type: "json" };

export function getFeaturedProducts() {
    return products.filter((product) => product.isFeatured);
}