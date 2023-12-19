const items = [
  { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
  { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
  { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
  { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
  { id: 6, name: "milk", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
];

const cart = [];

// ------------------ Complete the functions written below ------------------------------ //

//TODO: use the .forEach() method to log out the name of each item

function logItemNames() {
  //TODO: use the .forEach() method to log out the name of each item
  items.forEach((item) => {
    console.log(item.name);
  })
}

/**
 * @param {number} id
 * @returns {{id: number, name: string, price: number, category: string, inventory: number}} item
 */
// TODO: Use the .find() method to return the item who's id matches the passed in id
  function findItemById(id) {
  const foundItem = items.find(item => item.id === id);
  return foundItem;
  }

/**
 * @returns {items[]} Returns a new array with capitalized names
 */
// TODO:  Use the .map() and possibly .slice() methods and return a new items array with the item names capitalized
// DO NOT MUTATE THE ORIGINAL ARRAY IN YOU LOGIC
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function capitalizeNames(items) {
    return items.map(item => ({
      ...item,
      name: capitalizeFirstLetter(item.name)
    }));
  }

  const itemsWithCapitalizedNames = capitalizeNames(items);
  console.log(itemsWithCapitalizedNames);


/**
 * @returns {number} the sum of all inventory items
 */
  function calculateTotalInventory(items) {
// TODO Use the .reduce() method to return the total number of items in inventory
    return items.reduce((total, item) => total + item.quantity, 0);
    }

    const totalItemsInInventory = calculateTotalInventory(items);
    console.log('Total number of items in inventory:', totalItemsInInventory);

/**
 * @returns {number} the total price of all inventory items combined
 */

// TODO Use the .reduce() method to return the total price of all the items in inventory
  function calculateAllInventoryPrice(items) {
    return items.reduce((total, item) => total + item.price, 0);
  }

  const totalInventoryPrice = calculateAllInventoryPrice(items);
  console.log('Total price of all items in inventory:', totalInventoryPrice);

/**
 * @param {string} name
 * @returns {number} the price of the item passed in
 */
// TODO: Use your knowledge of objects and arrays to get the price of the item passed in
  function getItemPriceByName(name) {
  const foundItem = items.find(item => item.name === itemName);

    if (foundItem) {
      return foundItem.price;
    } else {
      return 'Item not found';
    }
  }

/**
 * @param {categoryId} id of category to find
 * @returns {items[]} array of all items which belong to the given category
 */
// TODO: use the .filter() method to filter out all items which don't belong the passed in category
  function filterItemsByCategoryId(categoryId) {
    return items.filter(item => item.category === categoryId);
  }

// TODO: Loop through your cart and use the indexes to log the names of all items in your cart
  function logCartItems(cart) {
    for (let i = 0; i < cart.length; i++) {
      console.log(`Item ${i + 1}: ${cart[i].name}`);
    }
  }

  logCartItems(cart);

/**
 * @returns { number } returns the total price of items in your cart
 */
function calculateTotalCartPrice() {
  // TODO: Loop through your cart and return the total price of all items in your cart
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }

  return totalPrice;
}

const totalCartPrice = calculateTotalCartPrice(cart);
console.log('Total price of all items in the cart:', totalCartPrice);

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

const ids = prompt(
  "enter numbers separated by commas for the ids of the items you want to add to your cart",
  "1, 3, 5"
);
// Split the string of numbers into an array of strings.
const idArr = ids.split(", ");

idArr.forEach((id) => cart.push(id));
console.log(`The names of all the items are: `);
logItemNames();
const itemId = prompt("enter the id of an item you are trying to find", "1");
console.log(
  `The item with id ${itemId} is  ${JSON.stringify(
    findItemById(+itemId),
    null,
    2
  )}`
);
console.log(
  "We can map over an array and return a new array with the names capitalized like so: ",
  capitalizeNames()
);
console.log(
  "The total inventory of all grocery items is: ",
  calculateTotalInventory()
);
console.log(
  "The total price of all items in inventory is: ",
  calculateAllInventoryPrice()
);

const itemToFind = prompt(
  "Enter the name of an item to find the price of",
  "apple"
);
console.log(`The price of ${itemToFind} is: `, getItemPriceByName(itemToFind));

const categoryId = prompt(
  "Enter a number between 1-4 to filter only items with that categoryId",
  2
);
console.log(
  `The items in category ${categoryId} are: `,
  filterItemsByCategoryId(+categoryId)
);

console.log("Cart items: ");
logCartItems();

console.log(
  `The total price of the items in your cart is: `,
  calculateTotalCartPrice()
);
