import Typed from 'typed.js';

// const loadDynamicBannerText = () => {
  function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Hola León", "Vamos a entrenar"],
    fontSize: 42,
    typeSpeed: 70,
    loop: true
  });
}

export { loadDynamicBannerText };
