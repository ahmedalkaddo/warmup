// ex 1
// var a;
// console.log("the value of a is : ", a);

// console.log("the value of b is: ", b);
// var b;

// let c;
// console.log("c : ", c);

// let d =1;
// console.log("c : ", d);

// ex 2
// let x;
// if(true){ // block
//     let x =5;
// }
// console.log(x);

//ex 3

// function a(){

//     {
//          let x= 5;
//     console.log(x);  
//     }

// }
// a();


// function foo(){
//     console.log("ahmed 1");
// }
// foo();

// baz();
// var baz = function(){
//     console.log("ahmed 2");
// }
// ex 4
// const person = {name: "ahmed alkaddo"};

// person.name = 24;

// console.log(person.name);

// // -------
// const food = ["rice", "apple"] 
// food.push(" orange")
// console.log(food)

//ex 6
// let x= 40n;
// console.log(typeof x);
//  x= "40";
// console.log(typeof x);

// console.log('40' + 3)
// console.log('40' - 3)
// console.log(parseInt('11', 2))

// the pluse before the string will convert the string to number 
// console.log(+'1.1' + +'1.1')

// // Ex 6
// try{
//     console.log("there are exception 1");
//     throw "error";
//     console.log("there are exception 2");

// }catch(exp){
//     console.log(exp);
// }

// for..in VS for..of
// get index ... get values

// let person = {name:"Ahmed ", age: 25}

// for (let pro in person ){
//     console.log(person);
//     // console.log(person[pro]);
//     // console.log(person.name);
// }


// function show( a ){
//     console.log(a);
//     return a *a
// }

// let x= show(2);
// console.log(x);

// function greet (a,b,...c){
//     console.log("hello", a,b,c)

// }

// greet("ahmed","ali", "omar", "moh")

// let square = a => a*a;

// let x= square(2)
// console.log(x)


// let square = (a,b) => a*b;

// let x= square(2,3)
// console.log(x)


// let user = {
//     name: "ahmed",
//     age: 25
// }
// user.email = "ahmed@gmail.com"

// console.log(user)
// console.log("name" in user)
// console.log("ah" in user) // check the property of object we use

// for (let key in user){
//     console.log(key+":"+user[key]);
//     // console.log(user[key]);
// }

// Create new reference 
// let a = {v:3}
// let b =a
// b.v = 10

// // console.log(a)
// // console.log(b)

// create new store in memory 
// // let a = 3
// // let b =a
// // b = 10

// console.log(a == b)
// console.log(a === b)


// Object 
// let person = {name: "ahmed", age: 23}
// let clone ={}

// for (let key in person){
//     clone[key] = person[key];

// }
// console.log(person)
// clone.name = "ali"
// console.log(clone)

// let person = {name: "ahmed", age: 23, address: function() {
//     return person.name + person.age
// }}
// let clone ={}

// Object.assign(clone,person)
// console.log(person)
// clone.name = "ali"
// console.log(clone)


// Array
// let arr = ["ahmed", 23]

// console.log(arr[0])
// console.log(arr[1])

// object to object 
// var person = {
//     name: "ahmed",
//     phone: "07704167850",
//     address: {
//         state: " ninava",
//         city: "mosul"
//     }
// }
// clone = {}


// for (var key in person) {
//     console.log(person[key])
//     // if(typeof person[key])
//     console.log(typeof person[key])

//     clone[key] = person[key];
//     if (typeof person[key] == "object") {

//         for (var key2 in person[key]) {

//             clone[key][key2] = person[key][key2];
//         }

//     }
// }


// person.address.city = "ahmed"
// // clone. = "Ali"
// let clone2 = {};
// clone2 = cloneDeep(person)
// // clone2.address.city = "Ali"

// console.log(person)
// console.log(clone2)

// console.log(typeof person[key])

// self invoking function
// (function a(){
//     console.log("Ahmed")
// })();

// (() =>{
//     console.log("aaaa")
// })();


// function one(){
// console.log("A")
// two()
// console.log("C")
// }

// function two(){
//     setTimeout(
//         // call back funnction
//         function(){
//         console.log("B")
//     },1000);
 
//     }

//     one();

// function greet(name){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             let response = "Hello " + name;
//             resolve(response)
//         }, 2000);
//     })
// }

// console.log("before greet");
// // let x= 
// console.log(greet("Ahmed"));
// console.log("after greet");


// function greet(name){
//     return new Promise((resolve , reject)=>{
//         setTimeout(() => {

//             if(name != ""){
//                 let response =  "Hello " + name
//                 resolve(response)
//             }else{
//                 let response = "You must provide a name";
//                         reject(response);
//             }


           
//         }, 2000);
//     })
// }

// console.log("before greet");

// greet("").then((response) => console.log(response))
// .catch((error)=> console.log(error))
// .finally(() => console.log("always execute"));

// console.log("after greet");



function greet(name){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {

            if(name != ""){
                let response =  "Hello " + name
                resolve(response)
            }else{
                let response = "You must provide a name";
                        reject(response);
            }


           
        }, 2000);
    })
}



(async function(){

    console.log("before greet");

    try{
        let response = await greet("");
        console.log(response);
    }catch(e){
        console.log(e);

    }
  
        //    .catch((error)=> console.log(error))
        //    .finally(() => console.log("always execute"));
        console.log("after greet");

  
})();

