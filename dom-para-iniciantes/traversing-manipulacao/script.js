// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const cloneMenu = menu.cloneNode(true)
const copy = document.querySelector('.copy')

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('.faq-lista')
console.log(primeiroDt)
console.log(primeiroDt.children[0].innerHTML) 

// Selecione o DD referente ao primeiro DT
console.log(primeiroDt.children[1])

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')
const faq = document.querySelector('.faq')

faq.replaceChild(animais,faq)
