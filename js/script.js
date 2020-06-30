const accordion = document.getElementsByClassName('accordion');


let myArray = []
for(let i = 0; i < accordion.length; i++){
    console.log(i);
    myArray.push(i);
}
console.log(myArray)

if(myArray.includes(4)){
    console.log('yeah boy')
}

accordion[2].addEventListener('click', ()=>{
    console.log('esther');
    console.log(accordion[2].classList.toggle('active'));

    let panel = accordion[2].nextElementSibling;
    if(panel.style.display === 'block'){
        panel.style.display = 'none';
    } else{
        panel.style.display = 'block';
    }
})

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