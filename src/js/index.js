import '../scss/style.scss';


const menus = document.querySelector('.menu--js');
const nav = document.querySelector('.navigation--js');

menus.addEventListener('click', () =>{ 
    nav.classList.toggle('navigation__open');
    console.log("Klik");
})



// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')