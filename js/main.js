// ########################################
// vs code 타이핑

var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".typing-txt>ul>li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,60); // 반복동작 
} 
     
function typing(){ 
  $(".typing ul li").removeClass("on");
   $(".typing ul li").eq(liIndex).addClass("on");
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ if(liIndex<liLength-1){
     //다음문장으로  가기위해 인덱스를 1증가
       liIndex++; 
     //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
          //타이핑종료
     
         setTimeout(function(){
           //1초후에 다시 타이핑 반복 시작
           tyInt = setInterval(typing,50);
         },500);
        } else if(liIndex==liLength-1){
          
         //마지막 문장까지 써지면 반복종료
           clearInterval(tyInt);
        }
    } 
}  


// ##################################
// introduce 애니메이션
// https://blog.naver.com/sungyuna89/222180198536

var intro = document.querySelector(".whoami .inner"),
docElem = document.documentElement,
offset, // 기준(여기까지 오면 띄움)
scrollPos,  //진행한 스크롤양
docHeight; //전체높이
var introLogo = document.querySelector(".introduce .logo");
var introText = document.querySelector(".introduce .text");
// 높이 계산하기
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

scrollPos = docElem.scrollTop;

offset = 60;

var goTop = document.querySelector(".go_top");
window.addEventListener('scroll', function() {
  scrollPos = docElem.scrollTop;
  if (scrollPos < offset){
    goTop.classList.remove('intro_ani');
    goTop.classList.add('none_ani');
    setTimeout(function() {
      goTop.classList.add('invisible');
      }, 700);
  }
  if (scrollPos > offset) {
    intro.classList.add('intro_ani');

    goTop.classList.add("intro_ani");
    goTop.classList.remove('invisible');
    goTop.classList.remove('none_ani');
    setTimeout(function() {
      introLogo.classList.remove('invisible');
      introLogo.classList.add('intro_ani');

      setTimeout(function() {
        introText.classList.remove('invisible');
        introText.classList.add('intro_ani');
        }, 400);

      }, 300);
      
    }
  });
  

// #############################
// portfolio

var portHead = document.querySelector(".portfolio .inner .head"),
offset2; 
var portContents = document.querySelector(".portfolio .inner .contents");

offset2 = 760;

window.addEventListener('scroll', function() {
  scrollPos = docElem.scrollTop;
  if (scrollPos > offset2) {
    portHead.classList.remove('invisible');
    portHead.classList.add('intro_ani');

    setTimeout(function() {
      portContents.classList.remove('invisible');
      portContents.classList.add('intro_ani2');
      }, 300);
      
    }
  });


// #############################
// certificate

var cerHead = document.querySelector(".certificate .inner .head"),
offset2; 
var cerContents = document.querySelector(".certificate .inner .contents");

offset3 = 1400;

window.addEventListener('scroll', function() {
  scrollPos = docElem.scrollTop;
  if (scrollPos > offset3) {
    cerHead.classList.remove('invisible');
    cerHead.classList.add('intro_ani');

    setTimeout(function() {
      cerContents.classList.remove('invisible');
      cerContents.classList.add('intro_ani2');
    }, 300);
  }
});

$("#go_top").click(function() {
  $('html, body').animate({ scrollTop:$(docElem).offset().top}, 300);
  setTimeout(function() {
    scrollPos = docElem.scrollTop;
    if (scrollPos < 50){
      intro.classList.add('invisible');
      intro.classList.remove('intro_ani');
      introLogo.classList.add('invisible');
      introLogo.classList.remove('intro_ani');
      introText.classList.add('invisible');
      introText.classList.remove('intro_ani');
      portHead.classList.add('invisible');
      portHead.classList.remove('intro_ani');
      portContents.classList.add('invisible');
      portContents.classList.remove('intro_ani2');
      cerHead.classList.add('invisible');
      cerHead.classList.remove('intro_ani');
      cerContents.classList.add('invisible');
      cerContents.classList.remove('intro_ani2');
    };
  }, 500);
});
$("#go_whoami").click(function() {
  $('html, body').animate({ scrollTop:$("#whoami_move").offset().top-120}, 500);
});
$("#go_portfolio").click(function() {
  $('html, body').animate({ scrollTop:$("#portfolio_move").offset().top-120}, 500);
});
$("#go_certificate").click(function() {
  $('html, body').animate({ scrollTop:$("#certificate_move").offset().top-120}, 500);
});
