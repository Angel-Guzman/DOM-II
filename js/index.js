// Your code goes here

// NOT USED: drag/drop, load, focus, scroll, select, resize

// USED: mouseenter, mouseleave, click, keydown, wheel, error, dbclick

// mouseenter, mouseleave
function navLinksHover() {
    const navLink = document.querySelectorAll('a.nav-link')[0];
        navLink.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'gray';
        });
        navLink.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = 'white';    
        });
}
navLinksHover()


// click
function btnClickColor() {
    const buttons = document.querySelectorAll('div.btn')[0];
        buttons.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'purple';
        })
        buttons.addEventListener('mouseleave', (event) => {
            event.target.style.backgroundColor = '#17A2B8';    
        });
}
btnClickColor()

// keydown
function btnAlert() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            alert('YOU CANT ESCAPE!')
        }
    })
}
btnAlert()


// wheel
function footerResize(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
    
}

let scale = 1;
const el = document.querySelector('.footer');
el.onwheel = footerResize;


// error
function imgError() {
    const log = document.querySelector('.errorContents')
    const badImg = document.querySelector('.bad-img');
    badImg.addEventListener('error', (event) => {
        log.textContent = log.textContent + `${event.type}:`
        console.log(event)
    })
    const imgError = document.querySelector('.bad-img');
    imgError.addEventListener('click', () => {
        badImg.setAttribute('src', 'WHOOOOOOOOPS');
    })
}
imgError()


// dbclick
const bigFun = document.querySelector('aside');
bigFun.addEventListener('dblclick', function (e) {
  bigFun.classList.toggle('large');
});


