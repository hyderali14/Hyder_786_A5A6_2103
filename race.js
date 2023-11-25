class Car {
    constructor(brand, model, year, color, price, gas) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
      this.gas = gas;
    }
  
    honk() {
      console.log("Tuut tuut");
      console.log(`Brand: ${this.brand}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Color: ${this.color}`);
      console.log(`Price: $${this.price}`);
      console.log(`Gas: ${this.gas} litres`);
      console.log("------------------------");
    }
  
    race(turns) {
      for (let i = 1; i <= turns; i++) {
        // Each turn, cars lose 5 litres of gas
        this.gas -= 5;
  
        // If the car is not for the current year, lose 1 more litre for each year the build is before the current year
        if (this.year < new Date().getFullYear()) {
          this.gas -= new Date().getFullYear() - this.year;
        }
  
        // Display the remaining gas after each turn
        console.log(`Turn ${i}: ${this.brand} - Remaining Gas: ${this.gas} litres`);
      }
    }
  }
  
  // Create car objects
  const honda = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
  const ford = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
  const bmw = new Car("BMW", "X5", 2022, "Green", 60000, 65);
  const mazda = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
  const audi = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
  const kia = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);
  
  // Invoke the honk method for each car
  honda.honk();
  ford.honk();
  bmw.honk();
  mazda.honk();
  audi.honk();
  kia.honk();
  
  // Simulate a race for 7 turns
  console.log("Race Starts!");
  honda.race(7);
  ford.race(7);
  bmw.race(7);
  mazda.race(7);
  audi.race(7);
  kia.race(7);
  