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
    this.count = this.items.reduce((acc, { quantityProduct }) => acc + quantityProduct, 0);
    return this.count;
  },
  calculateItemPrice() {
    return this.items.reduce((acc, { priceProduct, quantityProduct }) =>
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

// cart.add('Пиво', 100);
// cart.add('Квас', 50, 4);
// cart.add('Сидр', 80);
// cart.increaseCount(2);
// cart.add('Пуаре', 180, 4);
// cart.increaseCount(8);
// console.log(cart.calculateItemPrice());
// console.log(cart.items);
// console.log(cart.getTotalPrice());
// console.log(cart.increaseCount());

const Cart = function (items = []) {
  this.goods = items;
  this.totalPrice = 0;
  this.count = 0;

  this.calculateGoodsPrice = function () {
    return this.goods.reduce((acc, { productprice }) => acc + productprice, 0);
  };

  this.addGoods = function (productName, productprice) {
    this.goods.push({ productName, productprice });
    this.count += 1;
    this.totalPrice = this.calculateGoodsPrice();
  };

  this.getTotalPrice = function () {
    return this.totalPrice;
  };

  this.clear = function () {
    this.goods = [];
    this.totalPrice = 0;
    this.count = 0;
  };

  this.print = function () {
    console.log(JSON.stringify(this.goods));
    console.log(JSON.stringify(this.totalPrice));
  };
};


const myCart = new Cart();
myCart.addGoods('пиво', 200);
myCart.addGoods('Вино', 1000);

myCart.print();


const Goods = function (price, name, discount) {
  this.price = price;
  this.name = name;
  this.discount = discount;
}

const FoodGoods = function (price, name, discount, calories) {
  Goods.call(this, price, name, discount);
  this.calories = calories;
};

Object.setPrototypeOf(FoodGoods.prototype, Goods.prototype);

const СlothingGoods = function (price, name, discount, material) {
  Goods.call(this, price, name, discount);
  this.material = material;
};
 
Object.setPrototypeOf(СlothingGoods.prototype, Goods.prototype);

const TechnicsGoods = function (price, name, discount, equipment) {
  Goods.call(this, price, name, discount);
  this.equipment = equipment;
};

Object.setPrototypeOf(TechnicsGoods.prototype, Goods.prototype);

console.dir(Goods);
console.dir(TechnicsGoods.prototype === Goods.prototype);
