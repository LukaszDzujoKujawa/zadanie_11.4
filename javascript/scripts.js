function Phone(brand, price, color) {
  this.brand = brand;
  this.price = price;
  this.color = color;
}

Phone.prototype.printInfo = function() {
  console.log('Marka telefonu ' + this.brand + ', kolor ' + this.color + ' cena wynosi ' + this.price + ' zł.');
}

const iPhone8plus = new Phone('Apple', 3450, 'srebrny');
const SamsungS9 = new Phone('Samsung', 2200, 'złoty');
const HuaweiP20Pro = new Phone('Huawei', 3400 , 'brąz');

iPhone8plus.printInfo();
SamsungS9.printInfo();
HuaweiP20Pro.printInfo();

Phone.prototype.springSale = function () {
  let date;
  for(date = 0; date <= 31; date++) {
    if(date >= 20 && date < 21) {
      console.log('Wiosenna wyprzedaż ' + this.brand + ', kolor ' + this.color + ' cena wynosi ' + this.price * 0.8 + ' zł.');
    }
  }
}

iPhone8plus.springSale();
SamsungS9.springSale();
HuaweiP20Pro.springSale();