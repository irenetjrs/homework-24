
// task 1/2/3
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
   ChangeName(newName, password){
      if(password==='123'){
         let previousName = this.#name;
         this.#name = newName;
         return `Name changed from ${previousName} to ${newName}.`
      }
      else{
         return 'Permission denied';
      }
   }
}
const user1 = new User('Mike', 'MK_18', 18);
const user2 = new User('', 'NRG', 22);
// console.log(user1.ChangeName('Bill', '123'));
// console.log(user1.getName(true));
// console.log(user2.getName(true));
// console.log(user2.getName(false));
// console.log(user1.login);
// console.log(user1.age);
// console.log(user2.login);
// console.log(user2.age);


// task 4

class Admin extends User{
   #isAdmin;
   constructor(name, login, age, isAdmin){
   super(name, login, age);
   this.#isAdmin = true;
   }
   getUserName(user){
      return user.getName(this.#isAdmin);
   }
}
const user = new User('Mike', 'MK_18', 18);
const admin = new Admin('', 'NRG', 22);
// console.log(admin.getUserName(user1));