var index = 0;   //이미지에 접근하는 인덱스
var state = 0
var item = document.querySelector(".img_target");


var x = document.getElementsByClassName("img_target");  //img_target에 대한 dom 참조
for (i = 0; i < x.length; i++) {
  if (i != 0){
    x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
  };
};

item.addEventListener('mouseout', function(){
  state = 0;
  var x = document.getElementsByClassName("img_target");  //img_target에 대한 dom 참조
  for (i = 0; i < x.length; i++) {
    if (i != 0){
      x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    };
  };
});

item.addEventListener('mouseover', function() {
  state = 1;
  slideShow()
});

function slideShow() {
  var i;
  var x = document.getElementsByClassName("img_target");  //img_target에 대한 dom 참조
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
  };
  index++;
  if (index > x.length) {
      index = 1;  //인덱스가 초과되면 1로 변경
  };
  x[index-1].style.display = "block";  //해당 인덱스는 block으로
  if (state = 1){
    setTimeout(slideShow, 1000);   //함수를 4초마다 호출
  };
};

// var items = document.querySelector(".portfolio .inner .contents .item");

// var item = document.querySelector("#img_target");

// items.addEventListener('mouseover', function() {
//   for(var i = 0; i < 3; i++){
//     setTimeout(function() {
//       item.src = "./img/car2.png";
//       setTimeout(function() {
//         item.src = "./img/car3.png";
//         setTimeout(function() {
//           item.src = "./img/car4.png";
//           setTimeout(function() {
//             item.src = "./img/car1.png";
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   };

// });