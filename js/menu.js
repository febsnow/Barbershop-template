(() => {
  const mobileBtnRef = document.querySelector('[mobile-menu-button]');
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    mobileBtnRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  });

  mobileBtnRef.addEventListener('click', () => {
    const expanded = mobileBtnRef.getAttribute('aria-expanded') === 'true' || false;

    mobileBtnRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  });
})();

// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu-inner]');
//   const mobileBackdropRef = document.querySelector('[data-backdrop]');
//   const body = document.querySelector('body');
//   const toggleMenu = () => {
//     const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
//     menuBtnRef.classList.toggle('is-open');
//     body.classList.toggle('scroll-hidden');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);
//     mobileMenuRef.classList.toggle('is-open');
//     mobileBackdropRef.classList.toggle('is-visible');
//   };
//   menuBtnRef.addEventListener('click', () => {
//     toggleMenu();
//   });
//   mobileMenuRef.addEventListener('click', ({ target }) => {
//     target.getAttribute('data-menu-link') === '' && toggleMenu();
//   });
// })();
