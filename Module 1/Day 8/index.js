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
        return this.hour * gajiPart + (this.hour - 6) * (gajiPart - 20000);
      } else {
        return "over work";
      }
    } else if (this.type == "fulltime") {
      let gajiFull = 100000;
      if (this.hour > 0 && this.hour <= 6) {
        return this.hour * gajiFull;
      } else if (this.hour > 6 && this.hour <= 24) {
        return this.hour * gajiFull + (this.hour - 6) * (gajiFull - 75000);
      } else {
        return "over work";
      }
    }
    return `${this.gaji}`;
  }
}

employee1 = new Salary("adi", "kuli", 30, 27, "parttime");
employee2 = new Salary("bagas", "kuli", 35, 9, "fulltime");
employee3 = new Salary("coro", "kuli", 35, 6, "parttime");

console.log(employee1.gaji());

// Exercise - Shooting Game

// class Player {
//   constructor(name, health = 100, power = 10) {
//     this.name = name;
//     this.health = health;
//     this.power = power;
//   }

//   hit(power) {
//     this.health -= power;
//   }

//   useItem(item) {
//     this.health += item.health;
//     this.power += item.power;
//   }

//   showStatus() {
//     console.log(`Health => ${this.health}, Power => ${this.power}`);
//   }
// }

class ShootingGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    getRandomItem() {
      const health = Math.random() < 0.5 ? 0 : 10;
      const power = Math.random() < 0.5 ? 0 : 10;
      return { health, power };
    }
  
    start() {
      let turn = 1;
      while (true) {
        console.log(`Turn ${turn}`);
  
        // Get random item for each player
        const item1 = this.getRandomItem();
        const item2 = this.getRandomItem();
  
        // Show each player status before shooting
        console.log(`Player ${this.player1.name} status:`);
        this.player1.showStatus();
        console.log(`Player ${this.player2.name} status:`);
        this.player2.showStatus();
  
        // Player 1 shoots player 2
        console.log(`Player ${this.player1.name} shoots player ${this.player2.name}`);
        this.player2.hit(this.player1.power);
        console.log(`Player ${this.player2.name} health: ${this.player2.health}`);
  
        // Check if player 2 is dead
        if (this.player2.health <= 0) {
          console.log(`Player ${this.player1.name} wins!`);
          break;
        }
  
        // Player 2 shoots player 1
        console.log(`Player ${this.player2.name} shoots player ${this.player1.name}`);
        this.player1.hit(this.player2.power);
        console.log(`Player ${this.player1.name} health: ${this.player1.health}`);
  
        // Check if player 1 is dead
        if (this.player1.health <= 0) {
          console.log(`Player ${this.player2.name} wins!`);
          break;
        }
  
        // Apply items to players
        this.player1.useItem(item1);
        this.player2.useItem(item2);
  
        turn++;
      }
    }
  }
  
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
  
    showStatus() {
      console.log(`Health => ${this.health}, Power => ${this.power}`);
    }
  }
  
  // Example usage
  const player1 = new Player("A");
  const player2 = new Player("B");
  const game = new ShootingGame(player1, player2);
  game.start();
  