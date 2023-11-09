const searchInput = document.querySelector("#search");
const productsDOM = document.querySelector(".products-center");
const btns = document.querySelectorAll(".btn");

let allProductsData = [{
  "id": 1,
  "title": "watch product",
  "class":"watch",
  "price": 10.99,
  "image": "./assets/images/1.png"
},
{
  "id": 2,
  "title": "watch product",
  "class":"watch",
  "price": 14.99,
  "image": "./assets/images/2.png"
},
{
  "id": 3,
  "title": "shirt product",
  "class":"shirt",
  "price": 7.99,
  "image": "./assets/images/3.png"
},
{
  "id": 4,
  "title": "shirt product",
  "class":"shirt",
  "price": 11.99,
  "image": "./assets/images/4.png"
},
{
  "id": 5,
  "title": "shirt product",
  "class":"shirt",
  "price": 4.99,
  "image": "./assets/images/5.png"
},
{
  "id": 6,
  "title": "gown product",
  "class":"gown",
  "price": 23.99,
  "image": "./assets/images/6.png"
},
{
  "id": 7,
  "title": "shirt product",
  "class":"shirt",
  "price": 42.99,
  "image": "./assets/images/7.png"
},
{
  "id": 8,
  "title": "shirt product",
  "class":"shirt",
  "price": 24.99,
  "image": "./assets/images/8.png"
},
{
  "id": 9,
  "title": "Jewelry product",
  "class":"Jewelry",
  "price": 24.99,
  "image": "./assets/images/9.png"
}
,   {
  "id": 10,
  "title": "Jewelry product",
  "class":"Jewelry",
  "price": 24.99,
  "image": "./assets/images/10.png"
}
,   {
  "id": 11,
  "title": "Jewelry product",
  "class":"Jewelry",
  "price": 24.99,
  "image": "./assets/images/11.png"
}
,   {
  "id": 12,
  "title": "Jewelry product",
  "class":"Jewelry",
  "price": 24.99,
  "image": "./assets/images/12.png"
}
,   {
  "id": 13,
  "title": "watch product",
  "class":"watch",
  "price": 24.99,
  "image": "./assets/images/13.png"
}];

// let allProductsData = [];

const filters = {
  searchItems: "",
};

//  for lunch without live sever we get data from allProductsData 
document.addEventListener("DOMContentLoaded", () => {
  // axios
  //   .get("http://localhost:3000/items")
  //   .then((res) => {
  //     allProductsData = res.data;

      // render products on DOM
      renderProducts(allProductsData, filters);
    // })
    // .catch((err) => console.log(err));
});

function renderProducts(_products, _filters) {
  const filteredProducts = _products.filter((p) => {
    return p.title.toLowerCase().includes(_filters.searchItems.toLowerCase());
  });
  productsDOM.innerHTML = "";
  // render to DOM
  filteredProducts.forEach((item, index) => {
    // create
    const productsDiv = document.createElement("div");
    productsDiv.classList.add("product");
    // content
    productsDiv.innerHTML = `
        <div class="img-container">
        <img src=${item.image} alt="p-${index}">
    </div>
    <div class="product-desc">
        <p class="product-title">${item.title}</p>
        <p class="product-price">${item.price}</p>
    </div>`;
    // append to DOM
    productsDOM.appendChild(productsDiv);
  });
}

searchInput.addEventListener("input", (e) => {
  filters.searchItems = e.target.value;
  renderProducts(allProductsData, filters);
});

// filter based on group
btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const filter = e.target.dataset.filter;
        console.log(e);
        filters.searchItems = filter;
        renderProducts(allProductsData,filters);
    })
})