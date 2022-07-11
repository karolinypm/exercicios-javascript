// nomeie 3 propriedades ou métodos de strings
var frase = "Olá mundo"
console.log(frase.length);
console.log(frase.replace('mundo','Brasil'))
console.log(frase.charAt(2));

// nomeie 5 propriedades ou métodos de elementos do DOM
let titulo = document.getElementsByTagName('h1');
console.log(titulo)
let texto = document.querySelector('.paragrafo');
console.log(texto.innerHTML) //apresenta o texto do HTML
console.log(texto.appendChild)
console.log(texto.after)


// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
let btn = document.querySelector('#copia')

btn.addEventListener('click', function(){
  let texto = document.querySelector('.copia');
  texto.select();
  document.execCommand('copy');
})