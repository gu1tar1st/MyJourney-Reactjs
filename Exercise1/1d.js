const socks_price = 10;
const t_shirts = 8;

let num_socks = 1;
let num_shirt = 2;

let productCost = socks_price * num_socks + t_shirts * num_shirt;
console.log(productCost);

export function getProductCost() {
    return productCost;
}