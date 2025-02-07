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

