let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let howMany = 0;
  for (let user in obj){
    if(obj[user].online === true){  //user is a variable defined in the for in loop so 'Alan', 'Jeff' etc
      howMany++
    }
  }
  return howMany
}

console.log(countOnline(users));



const obj = {name:"Sarah",age:23,role:"Zombie Slayer"};
const job = "role";

console.log(obj.role); // this works
console.log(obj["role"]);  // this also works
console.log(obj[job]);  // this also works

console.log(obj.job);  // this does not work