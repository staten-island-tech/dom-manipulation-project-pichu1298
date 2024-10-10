const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

products.forEach((products) =>
  console.log(products.name + " this costs " + products.price)
);

products.forEach((products) =>
  console.log(products.name + " this now costs " + products.price * 1.1)
);

const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);

const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics);
const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);

const highRated = products.filter((product) => product.rating >= 4.5);
console.log("High Rated Products:", highRated);

highRated.forEach((product) => console.log(product.name));

const affordableElectronics = products.filter(
  (products) => products.category === "Electronics" && products.price < 1000
);
affordableElectronics.forEach((product) => console.log(product.name));
