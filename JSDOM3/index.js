//  adding 100 para
// const t1 = performance.now();

// Reflow -> Process of calculating dimensions , Position of created element1
// Repend -> Process of showing pixel by pixel created element

// for(let i=1; i<=100; i++){
//     let element1 = document.createElement('p');
//     element1.textContent = 'This is Para' + i;
    
//     document.body.appendChild(element1);
// }
// const t2 = performance.now();
// console.log("This took : "+(t2-t1)+"ms")
// here 100 reflow & repend occurs



// Optimizing a bit
// const t3 = performance.now();
// let mydiv = document.createElement('div');

// for(let i=1; i<=100; i++){
//     let element2 = document.createElement('h3');
//     element2.textContent = "Heading "+i;

//     mydiv.appendChild(element2);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();
// console.log("This took : "+(t4-t3)+"ms")



// ****** using Fragment ******8 (1 Reflow & 1 Repend)

// let fragment = document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//     let element1 = document.createElement('p');
//     element1.textContent = 'This is Para '+i;

//     fragment.appendChild(element1);
// }

// document.body.appendChild(fragment);   // 1 reflow, 1 repaint







//  Single threading (one line only execute  at a time)

// JS is single thresded lang.
// JS is run-to-complition lang. 

/* ***** Observations ******/
// 1.'Run-to-complition' nature to code
// 2. JS does not executes multiple lines/functions at the same time

// ex.
// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = "JS is Single Threaded";
//     document.body.appendChild(para);
// }
// function addPara2(){
//     let para = document.createElement('p');
//     para.textContent = 'Kya Hal Chal ';

//     document.body.appendChild(para);
// }

// addPara();
// addPara2();

document.addEventListener('click',function(){
    console.log('Hello Didi');
});


console.log("Hii");
setTimeout(function (){
    console.log("Hello Bhaisab.");
},4000);
console.log("XYZ");