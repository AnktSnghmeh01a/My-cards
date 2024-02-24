// on hover

const myCart = document.querySelector(".MyCart");
const innerDiv1 = document.querySelector(".inner-div-1");
const innerDiv2 = document.querySelector(".inner-div-2");

function hoverEffect(){

myCart.addEventListener('mouseenter',()=>{
  // 1st inner div
  innerDiv1.style.top = '0.3em';
  innerDiv1.style.left = '0';
  innerDiv2.style.left = '1.3em';

})

myCart.addEventListener('mouseleave',()=>{
  innerDiv1.style.top = '0.5em';
  innerDiv1.style.left = '1.4em';
  innerDiv2.style.left = '2.1em';

})


}
hoverEffect();
