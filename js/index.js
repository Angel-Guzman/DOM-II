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

