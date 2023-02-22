
// task 1

class User{
   #name;
   constructor(name, login, age){
      this.#name = name;
      this.login = login;
      this.age = age;
   }
}
const user1 = new User('Mike', 'MK_18', 18);
const user2 = new User('', 'NRG', 22);
console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

// task 2

