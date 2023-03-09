// Exercise - Employee Salary

class Employee {
  constructor(nama, jabatan, age) {
    this.nama = nama;
    this.jabatan = jabatan;
    this.age = age;
  }
}

class Salary extends Employee {
  constructor(nama, jabatan, age, hour, type) {
    super(nama, jabatan, age);
    this.hour = hour;
    this.type = type;
  }
  gaji() {
    if (this.type == "parttime") {
      let gajiPart = 50000;
      if (this.hour > 0 && this.hour <= 6) {
        return this.hour * gajiPart;
      } else if (this.hour > 6 && this.hour <= 24) {
        return 6 * gajiPart + (this.hour - 6) * (gajiPart - 20000);
      } else {
        return "over work";
      }
    } else if (this.type == "fulltime") {
      let gajiFull = 100000;
      if (this.hour > 0 && this.hour <= 6) {
        return this.hour * gajiFull;
      } else if (this.hour > 6 && this.hour <= 24) {
        return 6 * gajiFull + (this.hour - 6) * (gajiFull - 25000);
      } else {
        return "over work";
      }
    }
  }
}

employee1 = new Salary("adi", "kuli", 30, 6, "parttime");
employee2 = new Salary("bagas", "kuli", 35, 5, "fulltime");
employee3 = new Salary("coro", "kuli", 35, 6, "parttime");

console.log(employee1.gaji());

// Exercise - Shooting Game

class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }
}

class ShootingGame {
  constructor(player1, player2, randomItem, start) {
    this.player1= player1
    this.player2=player2
    this.randomItem = randomItem
    ;
  }
}
