// class Circle {
//     constructor(radius) {
//       this.radius = radius;
//     }
  
//     draw() {
//       console.log(`Drawing circle R: ${this.radius}`);
//     }
//   }
  
//   const circle = new Circle(1);
//   circle.draw();|




// class User {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     sayName() {
//         console.log(`Hello my name is ${this.name}`);
//     }
  
//     sayAge() {
//         console.log(`I am ${this.age}`);
//     }
//   }
  
//   class Admin extends User {
//     constructor(name, age, userRole) {
//       super(name, age);
//       this.userRole = userRole;
//     }
  
//     sayName() {
//       super.sayName();
//       console.log(` super hero of this site`);
//     }
  
//     sayRole() {
//       console.log(`I am ${this.userRole}.`);
//     }
//   }
  
//   const vasya = new Admin("Вася", 20, "admin");
//   vasya.sayName();
//   vasya.sayAge();
//   vasya.sayRole();




// let x = { order: 20 };
// let y = x;

// x.order = 50;

// console.log(x);
// console.log(y);

// let x = 10;
// let y = x;

// x = 20;

// console.log(x);
// console.log(y);




// class Restaurant {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type 
//         this.isOpen = false;
//         this.served = 0;
//     }

//     sayName () {
//         console.log(`The name of restaurant ${this.name} `);
//     }

//     sayType () {
//         console.log(`The type of restaurant ${this.type}`);
//     }

//     setOpenStatus(status) {
//         this.isOpen = status;
//     }

//     checkStatus () {
//         if (this.isOpen) {
//             console.log(`The restaurant ${this.name}  open`)
//         } else {
//             console.log(`The restaurant ${this.name} close`)
//         }
//     }

//     serve() {
//         this.served += 1;
//     }

//     setServed(count) {
//         if (count >= 0) {
//             this.served = count
//         } else {
//             console.log(`Negative number`)
//         }

//     }

//     showTotalServed() {
//         console.log(`Total served customers ${this.served}`)
//     }
// }

// const myRestaurant = new Restaurant ("Blizzard", "Chinese")

// myRestaurant.sayName();
// myRestaurant.sayType();
// myRestaurant.setOpenStatus(true);
// myRestaurant.checkStatus();

// myRestaurant.serve();
// myRestaurant.setServed(3)
// myRestaurant.showTotalServed()




// class User {
//     constructor(firstName, lastName, email, age, location) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.location = location;
//     }

//     describeUser() {
//         console.log(`User Profile:
//         Name: ${this.firstName} ${this.lastName}
//         Email: ${this.email}
//         Age: ${this.age}
//         Location: ${this.location}`);
//     }

//     greetUser() {
//         console.log(`Hello, ${this.firstName}! Welcome to your profile.`);
//     }
// }

// const user1 = new User ("Bektur", "Zhamalbekov", "fdsfs@gmail.com", 17, "Bishkek");

// user1.describeUser();
// user1.greetUser();




class Cars {
    constructor(brand, release, power, colour) {
        this.brand = brand;
        this.release = release;
        this.power = power;
        this.colour = colour;
    }

    describeCar() {
        console.log(`Brand: ${this.brand}
        Release: ${this.release}
        Power: ${this.power}
        Colour: ${this.colour}`);
    }
}

const car1 = new Cars ("BMW", "2020", "800HP", "Black");

car1.describeCar();

class Electrocars extends Cars {
    constructor(brand, release, power, colour, batteryCapacity) {
        super(brand, release, power, colour);
         this.batteryCapacity = batteryCapacity;
    } 

    describeCar() {
        super.describeCar();
        console.log(`Battery capacity ${this.batteryCapacity}`);
    }  

    promote() {
        console.log(`Check out our new electric car with a battery capacity of ${this.batteryCapacity}! It's eco-friendly and powerful!`);
    }

}

const car2 = new Electrocars ("Tesla", "2022", "500HP", "White", "150kWh");

car2.describeCar();
car2.promote();