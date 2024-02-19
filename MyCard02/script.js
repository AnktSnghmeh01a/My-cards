// on hover

const myCart = document.querySelector(".MyCart");
const innerDiv1 = document.querySelector(".inner-div-1");
const innerDiv2 = document.querySelector(".inner-div-2");

function hoverEffect(){

myCart.addEventListener('mouseenter',()=>{
  // 1st inner div
  innerDiv1.style.left = '50%';
  innerDiv2.style.right = '50%';
})

myCart.addEventListener('mouseleave',()=>{

  innerDiv1.style.left = '0';
  innerDiv2.style.right = '0';

})


}
hoverEffect();
