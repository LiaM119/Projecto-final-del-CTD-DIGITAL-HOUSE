const products = [
    {
        name: 'Iphone 12',
        price: '799 USD',
        image: 'https://i5.walmartimages.com/seo/Verizon-iPhone-12-64GB-Green_d5ac2c35-0d39-488d-8b21-500705c4fb53.7fa441353efb921ff4b830962b56b536.jpeg'
    },
    {
        name: 'iPhone 13',
        price: '999 USD',
        image: 'https://i5.walmartimages.com/asr/4d610f63-c91a-4341-bc28-50a19ff21abb.6c44ae50bda77171f8395ab654a9acbe.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
    },
    {
        name: 'Iphone 14 pro max',
        price: '1250 USD',
        image: 'https://i5.walmartimages.com/asr/fee4af78-110f-467c-86d2-6d6f27ba1afe.8422413b3b9eb231cea3f43d11a5a5c4.jpeg'
    }
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productElement.appendChild(productImage);

        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productElement.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;
        productElement.appendChild(productPrice);

        productList.appendChild(productElement);
    });
}

document.addEventListener('DOMContentLoaded', displayProducts);
