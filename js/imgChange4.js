const all = ele => document.querySelectorAll(ele);
const one = ele => document.querySelector(ele);
// let pos = 0;

const wrap = one('.portfolio .inner .contents');
const len_item = wrap.children.length; //item이 몇개?
const target = wrap.children[0]; //아이템 첫번째

console.log(wrap)
console.log(len_item)
console.log(target)
var idxList = new Array(); 
var posList = new Array(); 
var ulList = new Array(); 

for (var i=0; i<len_item; i++){
  const target = wrap.children[i]; 
  const target_ul = target.querySelector("ul"); //ul
  const len = target_ul.children.length;

  idxList[i] = target_ul.children.length;
  posList[i] = 0;
  ulList[i] = target_ul
  
  // .slide ul의 너비 조정
  target_ul.style.cssText = `width:calc(100% * ${idxList[i]});display:flex;transition:1s`;
  // .slide li의 너비 조정
  Array.from(target_ul.children)
  .forEach(ele => ele.style.cssText = `width:calc(100% / ${idxList[i]});`);

};



// // .slide ul의 너비 조정
// target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s`;
// // .slide li의 너비 조정
// Array.from(target.children)
// .forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`);

function nextFunc(j) {
  posList[j] = (posList[j] + 1) % idxList[j] // 장면 선택
  console.log(target.querySelector("ul").children[j])
  console.log("123")
  target.querySelector("ul").children[j].style.marginLeft = `${-posList[j] * 100}%`
  return posList
};

function prevFunc(j) {
  if(posList[j] != 0){
    posList[j] = (posList[j] - 1) % idxList[j] // 장면 선택
    target.querySelector("ul").children[j].style.marginLeft = `${-posList[j] * 100}%`
    return posList
  };
};

var nextImg = document.querySelectorAll(".next");
var prevImg = document.querySelectorAll(".prev");

console.log("1231231")
console.log(nextImg)

// for(var j = 0; j < nextImg.length; j++ ){
//   nextImg[j].addEventListener('click', nextFunc(j));
//   prevImg[j].addEventListener('click', prevFunc(j));
  
// }
nextImg[0].addEventListener('click', nextFunc(0));
prevImg[0].addEventListener('click', prevFunc(0));
nextImg[1].addEventListener('click', nextFunc(1));
prevImg[1].addEventListener('click', prevFunc(1));
nextImg[2].addEventListener('click', nextFunc(2));
prevImg[2].addEventListener('click', prevFunc(2));
  
  