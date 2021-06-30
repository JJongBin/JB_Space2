const all = ele => document.querySelectorAll(ele);
const one = ele => document.querySelector(ele);
let pos = 0;

const wrap = one('.img_list'); // .slide 선택
const target = wrap.children[0]; // .slide ul 선택
const len = target.children.length; // .slide li 갯수
// .slide ul의 너비 조정
target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s`;
// .slide li의 너비 조정
Array.from(target.children)
.forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`);


var nextImg = document.querySelector(".next");

nextImg.addEventListener('click', function() {
  pos = (pos + 1) % len // 장면 선택
  target.style.marginLeft = `${-pos * 100}%`
  return pos
});
  
var prevImg = document.querySelector(".prev");
  
prevImg.addEventListener('click', function() {
  if(pos != 0){
    pos = (pos - 1) % len // 장면 선택
    target.style.marginLeft = `${-pos * 100}%`
    return pos
  };
});