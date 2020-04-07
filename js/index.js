// Your code goes here
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

// NOT USED: wheel, drag/drop, load, focus, scroll, select, dblclick

// USED: mouseenter, mouseleave, click, keydown, resize

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

function btnAlert() {
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            alert('YOU CANT ESCAPE!')
        }
    })
}
btnAlert()

function footerResize(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
    
}

let scale = 1;
const el = document.querySelector('.footer');
el.onwheel = footerResize;

