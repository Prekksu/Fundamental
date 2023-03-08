class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

Product1 = new Product("mi", 3000);
Product2 = new Product("gorengan", 1000);
Product3 = new Product("botol", 5000);

class Transaction extends Product {
  constructor(name, price, total, product) {
    super(name, price);
    this.total = total;
    this.product = product;
  }
}
Transaction1 = new Transaction(Product1, );

console.log(Transaction1);
