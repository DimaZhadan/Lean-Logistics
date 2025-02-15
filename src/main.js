let btn = document.querySelector('.header-burger__btn');
let btnClose = document.querySelector('.header-burger__btnclose');
let menu = document.querySelector('.header-burger');
let body = document.querySelector('body');
let burgerBtn = document.querySelectorAll('.header-burger__element');

btn.addEventListener('click', () => {
   menu.classList.toggle('active');
   body.classList.add('.noscroll');
   removeEventListener('click', btn);
});
btnClose.addEventListener('click', () => {
   menu.classList.remove('active');
   body.classList.remove('.noscroll');
   removeEventListener('click', btnClose);
});
burgerBtn.forEach((elem) => {
   elem.addEventListener('click', () => {
      menu.classList.remove('active');
      body.classList.remove('.noscroll');
      removeEventListener('click', elem);
   })
})


