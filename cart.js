const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    this.totalPrice += this.calculateItemPrice()
    return this.totalPrice;
  },
  add(productName, priceProduct, quantityProduct) {
    let product = {};
    priceProduct = +priceProduct;
    if (quantityProduct === undefined || quantityProduct === '' || quantityProduct === null || Number.isNaN(quantityProduct)) {
      product = {
        productName: productName,
        priceProduct: +priceProduct,
        quantityProduct: 1,
      };
      this.count += 1;
    } else {
      product = {
        productName: productName,
        priceProduct: +priceProduct,
        quantityProduct: +quantityProduct,
      };
      this.count += quantityProduct;
    }
    this.items.push(product);
  },
  increaseCount(number) {
    if (number === undefined || number === '' || number === null || Number.isNaN(number)) {
      this.count += 0;
    } else {
      this.count += number;
      this.items[cart.items.length - 1].quantityProduct += number;
    }
    return this.count;
  },
  calculateItemPrice() {
    let rest = [];
    for (let i = 0; i < this.items.length; i++) {
      rest[i] = [this.items[i].priceProduct * this.items[i].quantityProduct];
    }
    return (rest.flat().reduce((sum, current) => sum + current, 0));
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

cart.add('Пиво', 100, 3);
cart.add('Cидр', 75);
cart.increaseCount(7);
cart.add('Квас', 80, 2);
console.log('Предварительная сумма товаров = ' + cart.calculateItemPrice());
console.log(cart.items);
console.log('Общее количество товаров в корзине = ' + cart.count);
console.log('Количество товаров последнего добавленного товара = ' + cart.items[cart.items.length - 1].quantityProduct);
console.log('Общая сумма товаров = ' + cart.getTotalPrice());

