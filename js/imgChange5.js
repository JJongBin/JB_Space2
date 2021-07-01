class ObItem{
  
  constructor(idx) {
    this.idx = idx;
    this.target = document.querySelector(".portfolio .inner .contents"); // item 부모
    this.targetUl = this.target.children[this.idx].querySelector("ul"); // 해당 ul
    this.pos = 0;
    this.len = this.targetUl.children.length;
  };
  
  setImg(){
    // ul의 너비 조정
    this.targetUl.style.cssText = `width:calc(100% * ${this.len});display:flex;transition:1s`;
    // li의 너비 조정
    Array.from(this.targetUl.children)
    .forEach(ele => ele.style.cssText = `width:calc(100% / ${this.len});`);
  };

  next(){
    this.pos = (this.pos + 1) % this.len // 장면 선택
    this.targetUl.style.marginLeft = `${-this.pos * 100}%`
  };

  prev(){
    if(this.pos != 0){
      this.pos = (this.pos - 1) % this.len // 장면 선택
      this.targetUl.style.marginLeft = `${-this.pos * 100}%`
    };
  };
}

function findIdx(nextImgs, nextImg){
  for(var idxNext = 0; idxNext< nextImgs.length; idxNext++){
    if (nextImg == nextImgs[idxNext]){
      break
    };
  };
  return idxNext;
};

let obList = new Array();
const targetContent = document.querySelector(".portfolio .inner .contents");
const numItem = targetContent.children.length;

// item 수만큼 객체 생성
for(var i=0; i<numItem; i++){
  if(targetContent.children[i].querySelector("ul") == null){
    continue;
  }// 방어코드
  let content = new ObItem(i);
  obList.push(content);
}

var nextImgs = document.querySelectorAll(".img_mg .next");
var prevImgs = document.querySelectorAll(".img_mg .prev");

// ul, li 셋팅
nextImgs.forEach(function(nextImg) {
  obList[findIdx(nextImgs, nextImg)].setImg()
});

nextImgs.forEach(function(nextImg) {
  nextImg.addEventListener("click", function(){
    obList[findIdx(nextImgs, nextImg)].next()
  });
});
prevImgs.forEach(function(prevImg) {
  prevImg.addEventListener("click", function(){
    obList[findIdx(prevImgs, prevImg)].prev()
  });
});





