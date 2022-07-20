// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const cloneMenu = menu.cloneNode(true)
const copy = document.querySelector('.copy')

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const menuFaq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')
console.log(primeiroDt)


// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

menuFaq.innerHTML = animais.innerHTML;
