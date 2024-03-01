let items = [
  { name: "item1", id: 1, isAvailable: true, price: 100 },
  { name: "item2", id: 2, isAvailable: false, price: 99 },
];

const availableitems = items.filter((item) => item.isAvailable);
const itemprice = availableitems.reduce((sum, item) => sum + item.price, 0);

console.log(availableitems);
console.log(itemprice);

//!new
const products = [
  { Name: "Hotdog", Price: 45, isAvailable: true },
  { Name: "Siomai", Price: 20, isAvailable: false },
  { Name: "Fried Chicken", Price: 80, isAvailable: true },
  { Name: "Rice", Price: 50, isAvailable: true },
  { Name: "Donut", Price: 30, isAvailable: false },
];

const getAvailability = products.filter((items) => {
  //!filter to filter, map to list all, some and every are almost same in functionality will show boolean results.
  return items.isAvailable;
});
const totalprice = getAvailability.reduce((sum, items) => sum + items.Price, 0);
console.log(getAvailability);
console.log(totalprice);

//!find
const findproduct = products.find((items) => {
  return items.Name === "Hotdog";
});
console.log(findproduct);

//!forEach Similar to for loop
products.forEach((item) => {
  console.log(item);
});
