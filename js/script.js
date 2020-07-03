const accordion = document.getElementsByClassName('accordion');


// accordions.forEach(accordions => {
//     accordions.addEventListener('click', event=>{
//         accordions.classList.toggle('active');
//     });
// });

for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', ()=>{
        accordion[i].classList.toggle('active');
    
        let panel = accordion[i].nextElementSibling;
        if(panel.style.display === 'block'){
            panel.style.display = 'none';
        } else{
            panel.style.display = 'block';
        }
    })
}



// let array = [];
// for(index in accordions.length){
//     array.push(accordions[index]) ;
// }
// console.log(array)

// let accArray = [1,2,3,4,5]
// for(arr of accArray){
//     console.log(arr)
// }

// console.log(accordions)
// console.log(accArray)
// console.log(typeof accordions)
// console.log(typeof accArray)
// console.log(accordionHeader.children)

// for(index in accordions){
//     console.log(accordions[index])
    
// };

// let myArray = []
// for(let i = 0; i < accordion.length; i++){
//     console.log(i);
//     myArray.push(i);
// }
// console.log(myArray)

// if(myArray.includes(4)){
//     console.log('yeah boy')
// }



// let us = [1,5]
// if(us.includes(5)){
//     console.log('yass bitch')
// }


// console.log(accordion)

// console.log(accordion.length)

// let me = [1,2,3];
// for(index in me){
//     console.log(me[index]);
// }
// console.log('hi')