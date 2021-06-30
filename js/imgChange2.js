// var index = 0;   //이미지에 접근하는 인덱스
// var state = 0
// var item = document.querySelector(".img_target");


// var x = document.getElementsByClassName("img_target");  //img_target에 대한 dom 참조
// for (i = 0; i < x.length; i++) {
//   if (i != 0){
//     x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
//   };
// };

// item.addEventListener('mouseout', function(){
//   state = 0;
//   var x = document.getElementsByClassName("img_target");  //img_target에 대한 dom 참조
//   for (i = 0; i < x.length; i++) {
//     if (i != 0){
//       x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
//     };
//   };
// });

// item.addEventListener('mouseover', function() {
//   state = 1;
//   slideShow()
// });

// function slideShow() {
//   var i;
//   var x = document.getElementsByClassName("img_target");  //img_target에 대한 dom 참조
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
//   };
//   index++;
//   if (index > x.length) {
//       index = 1;  //인덱스가 초과되면 1로 변경
//   };
//   x[index-1].style.display = "block";  //해당 인덱스는 block으로
//   if (state = 1){
//     setTimeout(slideShow, 1000);   //함수를 4초마다 호출
//   };
// };




var prevImg = document.querySelector(".prev");
var i = 0;

prevImg.addEventListener('click', function() {
  if (i != 0){
    var imgList = document.getElementsByClassName("img_target");  //img_target에 대한 dom 참조
    // imgList[i].style.display = "none";
    imgList[i].classList.add('invisible');
    i--;
    // imgList[i].style.display = "block";
    imgList[i].classList.remove('invisible');
    return i;
  }
});

var nextImg = document.querySelector(".next");

nextImg.addEventListener('click', function() {
  if(i != 3){
    var imgList = document.getElementsByClassName("img_target");  //img_target에 대한 dom 참조
    // imgList[i].style.display = "none";
    imgList[i].classList.add('invisible');
    i++;
    // imgList[i].style.display = "block";
    imgList[i].classList.remove('invisible');
    return i;
  }
});
