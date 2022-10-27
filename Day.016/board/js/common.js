/* 1. PC버젼 서브메뉴 관련 */ 

const menu = document.querySelector ('.menu__main')         // 전체 메뉴
const subMenus = document.querySelectorAll ('.list__drop')   // 하위 메뉴
const panel = document.querySelector ('.header__panel')     // 하위 메뉴 나올때 나오는 판넬
const header = document.querySelector ('.header')           // header 전체


// 하위 메뉴 보여줌
menu.addEventListener ('mouseover', function(){
    panel.style.display = 'block';
    subMenus.forEach (function(subMenu){                    // forEach 경우엔 화살표함수로 해줄수도 있다?!
        subMenu.style.display = "block";
    })
})

// 하위메뉴 숨기기
header.addEventListener ('mouseout', function(){
    panel.style.display = 'none';
    subMenus.forEach (function(subMenu){
        subMenu.style.display = "none";
    })
})
panel.addEventListener ('mouseout', function(){
    panel.style.display = 'none';
    subMenus.forEach (function(subMenu){ 
        subMenu.style.display = "none";
    })
})


/* 2. 모바일 버젼 메뉴 보이기, 숨기기 */

const Mhamburger = document.querySelector('.mobile.hamburger');
const Mclose = document.querySelector('.mobile.close');
const Mnav = document.querySelector('.header__Mnav');

// const Mhamburger = document.querySelector ('.mobile.hamburger');     // 햄버거
// const Mclose = document.querySelector ('.mobile.close');             // 닫기버튼
// const Mnav = document.querySelector ('.mobile__Mnav');               // 모바일 메뉴 전체

Mhamburger.addEventListener('click', function(){
    Mnav.style.display = 'block';
})

Mclose.addEventListener('click', function(){
    Mnav.style.display = 'none';
})

/* 3. 모바일 하위메뉴 보이기 숨기기 */

function showHide(e) {
    const MListDrop = e.children[2];   // 내가 선택한 메뉴의 하위메뉴를 가져온다.
    // const displayAttr = MListDrop.style.display;
    const displayAttr = window.getComputedStyle(MListDrop).display

    if (displayAttr === 'none') {
        MListDrop.style.display = 'block';
    } else {
        MListDrop.style.display = 'none';
    }
}

/* 4. width가 767px 이상일때 모바일메뉴 보임 방지 */
// throttle("resize", "optimizedResize")
// resize 는 과부하가 많다고 한다.
window.addEventListener('optimizedResize', function(){
    let winWidth = window.innerWidth

    if (winWidth >= 767) {
        Mnav.style.display = 'none'
    }
})