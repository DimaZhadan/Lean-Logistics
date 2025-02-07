import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

let btn = document.querySelector('.header-burger__btn');
let btnClose = document.querySelector('.header-burger__btnclose');
let menu = document.querySelector('.header-burger');
let body = document.querySelector('body');
btn.addEventListener('click', () => {
   menu.classList.toggle('active');
   body.classList.add('.noscroll');
   // removeEventListener();
});
btnClose.addEventListener('click', () => {
   menu.classList.remove('active');
   body.classList.remove('.noscroll');
   // removeEventListener();
});

