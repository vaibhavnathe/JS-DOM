// Asynchronous Code

// setTimeout(function(){
//     console.log('third');  // Async Code
// },4000); 

// // // Synchronous Code

// function sync(){
//     console.log('first');
// };
// sync();
// console.log('second');



// **** API :- established a communication between two software components or communication it is Fascilated by an API.


//  Promise 
// Syntax

// let meraPromise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("I am inside Promise1");
//     },5000);
//     // resolve(22546);
//     // reject(new Error("Bhaisab error aye hai!"));
// })

// console.log('Pehla');

// meraPromise1.then((value) => {console.log(value)});  
// meraPromise1.then((value) => {console.log(value)}, (error) => {console.log('Received an error')});
// meraPromise1.catch((error) => {console.log('Received an error')});

// myPromise1.catch((error) => {console.log('Received an error')}); 

// let myPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('I am inside Promise 2');
//     },3000);
//     // resolve(12456);
//     // reject(new Error('Bhaisab error aye hai.'));
// });

// console.log('Pehla');



/*Ex. */
/** 
let p1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("set timeout1 started");
    },2000);
    resolve(true);
});

let output = p1.then(() => {
    let p2 = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("set timeout2 started");
        },3000);
        resolve("p2 resolved");
    });
    return p2;
});

output.then((val) => {console.log(val)});
*/


//****** */  "Async function"  -> It always return 'Promise'.   ************

// async function f1(){

//     return 7;
//     return "Kya hua tera";
// }
// f1();   // async function always return 'Promise'.




/** **** 'await' -> first execution is complete & then move to next line/function. */
// ex.
// async function utility(){
//     let delhiMausam = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             resolve("Delhi mein bahot garmi hai.");
//         },5000);
//     });
    
//     let hydMausam = new Promise(function(resolve, reject){
//         setTimeout(() => {
//             resolve("Hyderabad is Cool.");
//         },6000);
//     });
    
//     let dm = await delhiMausam;    // first execution of delhiMausam is complete and move to next HydMausam line.
//     let hm = hydMausam;

//     return [dm, hm];
// };



//  ********* Fetch API *************
// :- fetch API returns a "Promise".

// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();


/* *******IMP Example ******** */
// async function helper(){

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Babbar',
//           body: 'Tagdi Body',
//           userId: 1198,
//           weight:90,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     }
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }

// async function utility(){
//     let ans =await helper();
//     console.log(ans);
// }

// utility();


/** ******* Variable Scoping ******* */
// let ->It is block scope.
// let name = "Sher";           // Global Variable
function init() {
    let name = "Mozilla"; // name is a local variable created by init
   
    function displayName() {
        // let name = "Babbar";
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName();
}

const func1 = init();
func1();



// ex.
// function f1(){
//     let a = 5;
//     function f2(){
//         let a = 3;
//         function f3(){
//             let a = 7;
//             console.log(a);
//         }
//         return f3();
//     }
//     return f2();
// }





  