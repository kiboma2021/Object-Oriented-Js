class User {
  constructor (name,email) {
    this.name = name;
    this.email = email;
  }
}

var userOne = new User("Ben", "ben@gmail.com")
var userTwo = new User("Ann", "ann@yahoo.com")

console.log(userOne);
console.log(userTwo);