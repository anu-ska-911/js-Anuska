// primitive 

// 7 types : string, number, null, boolean, undefined, symbol(unique banauna), BigInt

const score = 100
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id == anotherID);
//reference type(non-primitive)

//Array, Objects, functions, 

const app = ["daraz","Insta","facebook"]
{
    name = "anuska",
    age = 22,
    email = "anuska@google.com";
}

const MyFunction = function(){
    console.log("Hello  JS  users");
}

console.log(typeof outsideTemp);





//++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (non-primitive)

let myYoutubename = "anuskarauniyar.com"

let anothername = myYoutubename
anothername = "MeroSaathi"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "anuska@google.com",
    upi: "anuska@ybl"
}

let userTwo = userOne

userTwo.email = "anuska123@google.com"

console.log(userOne.email);
console.log(userTwo.email);


