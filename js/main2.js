// location.reload()
console.log("원종빈의 포트폴리오입니다.")
// ########################################
// vs code 타이핑
// if (matchMedia("screen and (min-width: 1024px)").matches) {
  
// }

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

const intro = document.querySelector(".whoami .inner .head"),
docElem = document.documentElement
let offset, // 기준(여기까지 오면 띄움)
scrollPos,  //진행한 스크롤양
docHeight; //전체높이
const introLogo = document.querySelector(".introduce1 .logo");
const introText = document.querySelector(".introduce1 .text");
const introSkills = document.querySelector(".introduce2 .skills");
const introSkillsChild = introSkills.children;

// console.log(introSkills.children)
// console.log(introSkills.children.length)
// 높이 계산하기
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

scrollPos = docElem.scrollTop;

window.addEventListener('scroll', _.throttle(function() {
  console.log(scrollPos)
},1000));



const targetWho = document.getElementById("whoami_move");
const targetWhoTop = targetWho.getBoundingClientRect();
offset = targetWhoTop.top + scrollPos - window.innerHeight + 30;
// offset = targetWhoTop.top + scrollPos;
// offset = 240;
console.log(window.innerHeight)
console.log(targetWhoTop.top)
console.log(offset)

var goTop = document.querySelector(".go_top");
window.addEventListener('scroll', function() {
  scrollPos = docElem.scrollTop;
  
  if (scrollPos > offset) {
    intro.classList.add('intro_ani');
    intro.classList.remove('invisible');


    goTop.classList.add("intro_ani");
    goTop.classList.remove('invisible');
    goTop.classList.remove('none_ani');
    setTimeout(function() {
      introLogo.classList.remove('invisible');
      introLogo.classList.add('intro_ani');
      introText.classList.remove('invisible');
      introText.classList.add('intro_ani');

      setTimeout(function() {
        introSkills.classList.remove('invisible')
        introSkills.classList.add('intro_ani')

        for(let i = 0; i<introSkillsChild.length; i++){
          let fill = introSkillsChild[i].querySelector('.fill')
          let fill_percent = fill.querySelector('p')
          // console.log(fill_percent)
          // console.log(fill_name)
          if (intro.className.includes('invisible') == true){
            continue
          }
          const percentFill = setTimeout(function() {
            fill_name = fill.className
            // //이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??
            // //이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??
            // //이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??
            // if (intro.className.includes('invisible') == true){
            //   clearTimeout(percentFill)
            //   console.log('stop!!!')
            // } //이거 왜 안되냐??
            // //이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??
            // //이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??
            // //이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??//이거 왜 안되냐??
            if(fill_name.includes('50')){
              fill.classList.add('percent50_ani');
            }else if(fill_name.includes('60')){
              fill.classList.add('percent60_ani');
            }else if(fill_name.includes('70')){
              fill.classList.add('percent70_ani');
            }else if(fill_name.includes('80')){
              fill.classList.add('percent80_ani');
            }
          }, 400*(i+1));
          setTimeout(function() {
            fill_percent.classList.remove('invisible')
          }, 400*(i+1)+300);
        };
      }, 400);
    }, 300);
  }
  // if (scrollPos < offset){  // 애니매이션 초기화
  else if(scrollPos < offset){
    goTop.classList.remove('intro_ani');
    goTop.classList.add('none_ani');
    setTimeout(function() {
      goTop.classList.add('invisible');
    }, 700);

    intro.classList.add('invisible');
    intro.classList.remove('intro_ani');
    introLogo.classList.add('invisible');
    introLogo.classList.remove('intro_ani');
    introText.classList.add('invisible');
    introText.classList.remove('intro_ani');

    introSkills.classList.add('invisible')
    introSkills.classList.remove('intro_ani')

    for(let i = 0; i<introSkillsChild.length; i++){
      let fill = introSkillsChild[i].querySelector('.fill')
      let fill_percent = fill.querySelector('p')
      // console.log(fill_percent)
      // console.log(fill_name)
      
      fill_name = fill.className
      if(fill_name.includes('50')){
        fill.classList.remove('percent50_ani');
      }else if(fill_name.includes('60')){
        fill.classList.remove('percent60_ani');
      }else if(fill_name.includes('70')){
        fill.classList.remove('percent70_ani');
      }else if(fill_name.includes('80')){
        fill.classList.remove('percent80_ani');
      }
      fill_percent.classList.add('invisible');
    };
  };
});
  

// #############################
// portfolio

var portHead = document.querySelector(".portfolio .head"),
offset2; 
var portContents = document.querySelector(".portfolio .contents");


let targetPortfolio = document.getElementById("portfolio_move");
let targetTopPortfolio = targetPortfolio.getBoundingClientRect();
offset2 = targetTopPortfolio.top + scrollPos - window.innerHeight + 200;
// offset2 = 1000;

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
  else if(scrollPos < offset2-200){
    portHead.classList.add('invisible');
    portHead.classList.remove('intro_ani');
    portContents.classList.add('invisible');
    portContents.classList.remove('intro_ani2');
  }
});


// #############################
// certificate

var cerHead = document.querySelector(".certificate  .head"),
offset2; 
var cerContents = document.querySelector(".certificate .contents");


let targetCertificate = document.getElementById("certificate_move");
let targetTopCertificate = targetCertificate.getBoundingClientRect();
offset3 = targetTopCertificate.top + scrollPos - window.innerHeight + 200;
// offset3 = 2500;

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
  else if(scrollPos < offset3-200){
    cerHead.classList.add('invisible');
    cerHead.classList.remove('intro_ani');
    cerContents.classList.add('invisible');
    cerContents.classList.remove('intro_ani2');
  }
});

$("#go_top").click(function() {
  $('html, body').animate({ scrollTop:$(docElem).offset().top}, 300);
  // setTimeout(function() {
  //   scrollPos = docElem.scrollTop;
  //   if (scrollPos < 50){
  //     intro.classList.add('invisible');
  //     intro.classList.remove('intro_ani');
  //     introLogo.classList.add('invisible');
  //     introLogo.classList.remove('intro_ani');
  //     introText.classList.add('invisible');
  //     introText.classList.remove('intro_ani');
  //     portHead.classList.add('invisible');
  //     portHead.classList.remove('intro_ani');
  //     portContents.classList.add('invisible');
  //     portContents.classList.remove('intro_ani2');
  //     cerHead.classList.add('invisible');
  //     cerHead.classList.remove('intro_ani');
  //     cerContents.classList.add('invisible');
  //     cerContents.classList.remove('intro_ani2');
  //   };
  // }, 500);
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



// MODAL
const open1 = () => {
  document.querySelector(".modal1").classList.remove("invisible");
  document.querySelector('body').classList.add('modal-open');
}
const close1 = () => {
  document.querySelector(".modal1").classList.add("invisible");
  document.querySelector('body').classList.remove('modal-open');
}

// const open2 = () => {
//   document.querySelector(".modal2").classList.remove("invisible");
//   document.querySelector('body').classList.add('modal-open');
// }
// const close2 = () => {
//   document.querySelector(".modal2").classList.add("invisible");
//   document.querySelector('body').classList.remove('modal-open');
// }

const open3 = () => {
  document.querySelector(".modal3").classList.remove("invisible");
  document.querySelector('body').classList.add('modal-open');
}
const close3 = () => {
  document.querySelector(".modal3").classList.add("invisible");
  document.querySelector('body').classList.remove('modal-open');
}

document.querySelector(".certificate .contents .m1").addEventListener("click", open1);
// document.querySelector(".certificate .contents .m2").addEventListener("click", open2);
document.querySelector(".certificate .contents .m3").addEventListener("click", open3);
// document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".modal_bg1").addEventListener("click", close1);
// document.querySelector(".modal_bg2").addEventListener("click", close2);
document.querySelector(".modal_bg3").addEventListener("click", close3);