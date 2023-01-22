// Get element
let arrow = document.querySelector('#container-h .content object');
let btnA = document.querySelector('#container-a .content .content-i button');
let abt = document.querySelector('.about');
let Cabt = document.querySelector('.about .head object');
let allT = document.getElementsByTagName('div');
const hidden = document.querySelectorAll(".va")
var elementTop = hidden[2].getBoundingClientRect().top;

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
    // const hiddenElement = document.querySelectorAll(".hidden")
    // hiddenElement.forEach((e)=>{
    //     let block = abt.style.display="block";
    //     if(block == true){
    //         e.addEventListener('click', ()=>{
    //             abt.style.display="none";
    //         })
    //     }
    // })
});
function reveal() {
    for (var i = 0; i < hidden.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = hidden[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        hidden[i].classList.add("active");
      } else {
        hidden[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
document.querySelector("#container-h").addEventListener('mouseover', ()=>{
    document.querySelector(".about").style.display="none";
})
document.querySelector("#container-p").addEventListener('mouseover', ()=>{
    document.querySelector(".about").style.display="none";
})
// for(let i = 0; i < allT.length; i++){
//     allT[i].addEventListener('click', ()=>{
//         if(allT[0] == true){
//             abt.style.display="block";
//         }
//         else{
//             abt.style.display="none";
//         }
//     });
// }

// document.addEventListener('click', ()=>{
//     if(document.querySelector(".about") == true ){
//         abt.style.display="block";
//     }
//     else{
//         abt.style.display="none";
//     }
// })
// const observer = new IntersectionObserver((entries) =>{
//     entries.forEach((entry)=>{
//         console.log(entry)
//         if(EventSource.isIntersecting){
//             entry.target.classList.add("show");
//         }
//         else{
//             entry.target.classList.remove("show");
//         }
//     })
// })
// const hiddenElement = document.querySelectorAll(".hidden")
// hiddenElement.forEach((el)=> observer.observe(el));
