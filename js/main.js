console.log('원종빈의 포트폴리오입니다.');

let typingBool = false;
let typingIdx = 0;
let liIndex = 0;
const typingUl = document.querySelector('.typing-txt ul');
const liLength = typingUl.children.length;
const typingTarget = document.querySelector('.typing ul');

let typingTxt;
let tyInt;

if (typingBool == false) {
  typingBool = true;
  tyInt = setInterval(typing, 60);
}

function typing() {
  typingTxt = typingUl.children[liIndex].innerText;
  typingTxt = typingTxt.split('');

  for (let i = 0; i < liIndex; i++) {
    typingTarget.children[i].classList.remove('on');
  }
  typingTarget.children[liIndex].classList.add('on');

  if (typingIdx < typingTxt.length) {
    typingTarget.children[liIndex].append(typingTxt[typingIdx]); // 한글자씩 이어준다.
    typingIdx++;
  } else {
    if (liIndex < liLength - 1) {
      liIndex++;
      typingIdx = 0;
      typingBool = false;
      typingTxt = typingTarget.children[liIndex].innerText;

      clearInterval(tyInt);

      setTimeout(function () {
        tyInt = setInterval(typing, 60);
      }, 500);
    } else if (liIndex == liLength - 1) {
      clearInterval(tyInt);
    }
  }
}

const intro = document.querySelector('.whoami .inner .head'),
  docElem = document.documentElement;
let offset, // 기준(여기까지 오면 띄움)
  scrollPos, //진행한 스크롤양
  docHeight; //전체높이
const introLogo = document.querySelector('.introduce1 .logo');
const introText = document.querySelector('.introduce1 .text');
const introSkills = document.querySelector('.introduce2 .skills');
const introSkillsChild = introSkills.children;

// 높이 계산하기
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

scrollPos = docElem.scrollTop;

window.addEventListener(
  'scroll',
  _.throttle(function () {}, 1000)
);

const targetWho = document.getElementById('whoami_move');
const targetWhoTop = targetWho.getBoundingClientRect();
offset = targetWhoTop.top + scrollPos + 100;

const goTop = document.querySelector('.go_top');
window.addEventListener('scroll', function () {
  scrollPos = docElem.scrollTop;

  if (scrollPos + window.innerHeight > offset) {
    intro.classList.add('intro_ani');
    intro.classList.remove('invisible');

    setTimeout(function () {
      introLogo.classList.remove('invisible');
      introLogo.classList.add('intro_ani');
      introText.classList.remove('invisible');
      introText.classList.add('intro_ani');

      setTimeout(function () {
        introSkills.classList.remove('invisible');
        introSkills.classList.add('intro_ani');

        for (let i = 0; i < introSkillsChild.length; i++) {
          const fill = introSkillsChild[i].querySelector('.fill');
          const fill_percent = fill.querySelector('p');

          if (intro.className.includes('invisible') == true) {
            continue;
          }
          const percentFill = setTimeout(function () {
            fill_name = fill.className;
            if (fill_name.includes('50')) {
              fill.classList.add('percent50_ani');
            } else if (fill_name.includes('60')) {
              fill.classList.add('percent60_ani');
            } else if (fill_name.includes('70')) {
              fill.classList.add('percent70_ani');
            } else if (fill_name.includes('80')) {
              fill.classList.add('percent80_ani');
            }
          }, 400 * (i + 1));
          setTimeout(function () {
            fill_percent.classList.remove('invisible');
          }, 400 * (i + 1) + 300);
        }
      }, 400);
    }, 300);
  } else if (scrollPos + window.innerHeight < offset) {
    intro.classList.add('invisible');
    intro.classList.remove('intro_ani');
    introLogo.classList.add('invisible');
    introLogo.classList.remove('intro_ani');
    introText.classList.add('invisible');
    introText.classList.remove('intro_ani');

    introSkills.classList.add('invisible');
    introSkills.classList.remove('intro_ani');

    for (let i = 0; i < introSkillsChild.length; i++) {
      const fill = introSkillsChild[i].querySelector('.fill');
      const fill_percent = fill.querySelector('p');

      fill_name = fill.className;
      if (fill_name.includes('50')) {
        fill.classList.remove('percent50_ani');
      } else if (fill_name.includes('60')) {
        fill.classList.remove('percent60_ani');
      } else if (fill_name.includes('70')) {
        fill.classList.remove('percent70_ani');
      } else if (fill_name.includes('80')) {
        fill.classList.remove('percent80_ani');
      }
      fill_percent.classList.add('invisible');
    }
  }
  if (scrollPos < 100) {
    goTop.classList.remove('intro_ani');
    goTop.classList.add('none_ani');
    setTimeout(function () {
      goTop.classList.add('invisible');
    }, 700);
  } else {
    goTop.classList.add('intro_ani');
    goTop.classList.remove('invisible');
    goTop.classList.remove('none_ani');
  }
});

// portfolio

const portHead = document.querySelector('.portfolio .head');
const portContents = document.querySelector('.portfolio .contents');

const targetPortfolio = document.getElementById('portfolio_move');
let targetTopPortfolio = targetPortfolio.getBoundingClientRect();
let offset2 = offset + targetWhoTop.height;
let offset3;

window.addEventListener('scroll', function () {
  scrollPos = docElem.scrollTop;
  if (scrollPos + window.innerHeight > offset2) {
    portHead.classList.remove('invisible');
    portHead.classList.add('intro_ani');

    targetTopPortfolio = targetPortfolio.getBoundingClientRect();
    offset3 = offset2 + targetPortfolio.offsetHeight;

    setTimeout(function () {
      portContents.classList.remove('invisible');
      portContents.classList.add('intro_ani2');
    }, 300);
  } else if (scrollPos + window.innerHeight < offset2) {
    portHead.classList.add('invisible');
    portHead.classList.remove('intro_ani');
    portContents.classList.add('invisible');
    portContents.classList.remove('intro_ani2');
  }
});

// certificate

const cerHead = document.querySelector('.certificate  .head');
const cerContents = document.querySelector('.certificate .contents');

window.addEventListener('scroll', function () {
  scrollPos = docElem.scrollTop;
  if (scrollPos + window.innerHeight > offset3) {
    cerHead.classList.remove('invisible');
    cerHead.classList.add('intro_ani');

    setTimeout(function () {
      cerContents.classList.remove('invisible');
      cerContents.classList.add('intro_ani2');
    }, 300);
  } else if (scrollPos + window.innerHeight < offset3) {
    cerHead.classList.add('invisible');
    cerHead.classList.remove('intro_ani');
    cerContents.classList.add('invisible');
    cerContents.classList.remove('intro_ani2');
  }
});

document.querySelector('#go_top').addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

document.querySelector('#go_whoami').addEventListener('click', () => {
  window.scroll({
    top: document.querySelector('#whoami_move').getBoundingClientRect().top - 120,
    left: 0,
    behavior: 'smooth',
  });
});

document.querySelector('#go_portfolio').addEventListener('click', () => {
  window.scroll({
    top: document.querySelector('#portfolio_move').getBoundingClientRect().top - 120,
    left: 0,
    behavior: 'smooth',
  });
});

document.querySelector('#go_certificate').addEventListener('click', () => {
  window.scroll({
    top: document.querySelector('#certificate_move').getBoundingClientRect().top - 120,
    left: 0,
    behavior: 'smooth',
  });
});

// MODAL

const certificate = document.querySelector('.certificate .contents');

const handleModal = e => {
  if (e.target.dataset.id) {
    document.querySelector(`.modal${e.target.dataset.id}`).classList.remove('invisible');
    const bg = document.querySelector(`.modal_bg${e.target.dataset.id}`);

    const closeModalEvent = bg.addEventListener('click', e => {
      document.querySelector(`.modal${e.target.dataset.id}`).classList.add('invisible');
      removeEventListener('click', closeModalEvent);
    });
  }
};

certificate.addEventListener('click', handleModal);
