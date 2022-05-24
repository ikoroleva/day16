import { Product } from './classes/Product'

const products = [

    new Product('Apple Pencil', 47.56, 56),
    new Product('Sceptre 24" Professional Thin 75Hz 1080p LED Monitor', 132.51, 45),
    new Product('Samsung Galaxy Tab A8 Android Tablet', 179.99, 100),
    new Product('Lenovo Flex 5 Laptop', 599.99, 9),
    new Product('Apple iPad Pro Tablet', 202.00, 23),
    new Product('CYBERRPOWERPC Gamer Xtreme VR Gaming PC', 1199.59, 3),
    new Product('Apple Apple iPad Air', 89.00, 15)
]

//console.log(products);

const container = document.createElement('table');
container.classList.add('products');

document.body.appendChild(container);

const tableHead = document.createElement('tr');
tableHead.classList.add('products_header');
tableHead.innerHTML += `<th class="header_item">Name</th>
<th class="header_item">Price</th>
<th class="header_item">Quantity</th>
<th class="header_item"> </th>`;
container.appendChild(tableHead);

const tableBody = document.createElement('tbody');
tableBody.classList.add('products_body');
container.appendChild(tableBody);

products.forEach((item) => {

    const product = document.createElement('tr');
    product.classList.add('product_item');

    tableBody.appendChild(product);

    product.innerHTML = `<td class="product product_name">${item.name}</td>
    <td class="product product_price">${item.price}</td>
    <td class="product product_quantity">${item.quantity}</td>
    <td class="product product_properties"><button class="sell_btn">Buy</button><button class="store_btn">Store</button></td>`

    const sellBtn = product.querySelector('.sell_btn');
    sellBtn.addEventListener('click', () => {
        item.sell();

        const productQuantity = product.querySelector('.product_quantity');
        productQuantity.textContent = item.quantity;
    })

    const storeBtn = product.querySelector('.store_btn');
    storeBtn.addEventListener('click', () => {

        item.store(1);

        const productQuantity = product.querySelector('.product_quantity');
        productQuantity.textContent = item.quantity;
    })

})
