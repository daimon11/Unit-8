const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add: function (productName, priceProduct, quantityProduct) {
    this.items.push(productName);
    this.totalPrice += priceProduct*quantityProduct;
    this.count += quantityProduct;
  },
  increaseCount(number) {
    for (i = 0; i < number; i++) {
      this.count *= number[i]
    };
    return this.count;
  },
  calculateItemPrice() {
    this.totalPrice += priceProduct * quantityProduct;
    return this.totalPrice;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
console.log(JSON.stringify(this.items));
console.log(JSON.stringify(this.totalPrice));
  },
}

console.log(cart);
console.log(cart.totalPrice);
cart.add('Пиво', 50, 2);
cart.add('Сидр', 70, 3);
cart.print();
cart.add('Вино', 550, 5);
cart.add('Квас', 105, 1);
console.log(cart);
cart.print();
cart.clear();
console.log(cart);