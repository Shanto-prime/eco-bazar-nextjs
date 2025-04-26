import productMap from "./src/data/productMap.json" with { type: "json" };
import tags from "./src/data/tags.json" with { type: "json" };
import categories from "./src/data/categories.json" with { type: "json" };
import fs from 'fs';

const prefixes = [
    "Supper",
    "New",
    "Best",
    "Green",
    "Red",
    "Blue",
]
const maxId = prefixes.length * productMap.length + productMap.length;
let IDs = []
for (let index = 1; index <= maxId; index++) {
    IDs.push(index)
}
IDs.sort(() => 0.5 - Math.random())

function getTags() {
    const shuffled = [...tags].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
}

function getCategory() {
    const shuffled = [...categories].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 1)[0];
}

const products = productMap.map((product) => {
    return generateProduct(product)
});

productMap.map((product) => {
    prefixes.map((prefix) => {
        let modifiedProduct = {
            name: prefix + " " + product.name,
            image: product.image
        }
        let generatedProduct = generateProduct(modifiedProduct)
        products.push(generatedProduct)
    })

});

function generateProduct(product) {
    let price = (Math.random() * 100 * Math.random() * 10).toFixed(2);
    let isDiscount = (Math.random() * 10).toFixed(0) > 5;
    let discount = null;
    if (isDiscount) {
        let percentage = Math.abs((Math.random() * 100).toFixed(0) - 29);
        let discountedAmount = (price * percentage / 100).toFixed(2);
        let discountedPrice = (price - discountedAmount).toFixed(2);
        discount = {
            percentage,
            discountedAmount,
            discountedPrice
        }
    }
    let isFeatured = (Math.random() * 10).toFixed(0) > 5;
    let isHot = (Math.random() * 10).toFixed(0) > 5;
    let isBestSeller = (Math.random() * 10).toFixed(0) > 5;
    let isPopular = (Math.random() * 10).toFixed(0) > 5;
    let rating = Math.abs((Math.random() * 10) - 5).toFixed(1)
    if (rating < 1) {
        rating = "0"
    }
    let isTopRated = rating >= 4;
    let category = getCategory()

    let newProduct = {
        id: IDs.pop(),
        name: product.name,
        image: product.image,
        price,
        isFeatured,
        isHot,
        isBestSeller,
        isPopular,
        rating,
        isTopRated,
        discount,
        tags: getTags(),
        category_id: category.id,
        category
    }
    return newProduct;
}
products.sort((a, b) => a.id - b.id)
console.log(products);

fs.writeFile("./src/data/products.json", JSON.stringify(products), (err) => {
    if (err) {
      console.error("Error writing file", err);
    } else {
      console.log("File written successfully");
    }
  });