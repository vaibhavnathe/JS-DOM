// function eventFunc(){
//     console.log('I have clicked on the document!');
// }
// document.addEventListener('click',eventFunc,true);
// document.removeEventListener('click',eventFunc);

// const content = document.querySelector('#wrapper');
// content.addEventListener('click',function(event){
//     console.log(event);
// });

// let links = document.querySelectorAll('a');
// let thirdlink = links[2];
// thirdlink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log("Maja Aya , Accha Laga");
// });




// let myDiv = document.createElement('div');
// myDiv.addEventListener('click',paraStatus);

// function paraStatus(event){
//     console.log( "para "+event.target.textContent);
// }

// for(let i=1; i<=100; i++){

//     let myPara = document.createElement('p');
//     myPara.textContent = 'This is para '+i;

    
//     myDiv.appendChild(myPara);
// }

// document.body.appendChild(myDiv);





let element = document.querySelector('#wrapper');
element.addEventListener('click',function(event){
   if(event.target.nodeName == 'SPAN'){
    console.log('Clicked on  ' + event.target.textContent);
   }
});