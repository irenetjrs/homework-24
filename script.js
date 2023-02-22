
// task 1/2
"use strict"
class User{
   #name;
   constructor(name, login, age){
      this.#name = name;
      this.login = login;
      this.age = age;
   }
   getName(isAdmin){
      if(isAdmin==false){
         return 'Permission denied';
      }
      else if(!this.#name){
         return this.login;
      }
      else{
         return this.#name;
      }
   }
}
const user1 = new User('Mike', 'MK_18', 18);
const user2 = new User('', 'NRG', 22);
console.log(user1.getName(true));
console.log(user2.getName(true));
console.log(user2.getName(false));
console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

// task 3

