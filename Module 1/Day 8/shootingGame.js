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
  