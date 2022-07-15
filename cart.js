const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    this.totalPrice += this.calculateItemPrice()
    return this.totalPrice;
  },
  add(productName, priceProduct, quantityProduct = 1) {
    const product = {
      productName: productName,
      priceProduct: priceProduct,
      quantityProduct: quantityProduct,
    };
    this.items.push(product);
  },
  increaseCount(number = 0) {
    this.items[cart.items.length - 1].quantityProduct += number;
    this.count = this.items.reduce((acc, {quantityProduct}) => acc + quantityProduct, 0);
    return this.count;
  },
  calculateItemPrice() {
    return this.items.reduce((acc, {priceProduct, quantityProduct}) =>
      acc + priceProduct * quantityProduct, 0);
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

cart.add('Пиво', 100);
cart.add('Квас', 50, 4);
cart.add('Сидр', 80);
cart.increaseCount(2);
cart.add('Пуаре', 180, 4);
cart.increaseCount(8);
console.log(cart.calculateItemPrice());
console.log(cart.items);
console.log(cart.getTotalPrice());
console.log(cart.increaseCount());