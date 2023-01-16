// Get element
let arrow = document.querySelector('#container-h .content object');
let btnA = document.querySelector('#container-a .content .content-i button');
let abt = document.querySelector('.about');
let Cabt = document.querySelector('.about .head object');

//  evenlistener
arrow.addEventListener("click", ()=>{
    // alert("oke");
    window.scrollTo(0, 1040)
});

// Button about
btnA.addEventListener('click', ()=>{
    abt.style.display="block";
});

// button about close
Cabt.addEventListener('click', ()=>{
    abt.style.display="none";
})