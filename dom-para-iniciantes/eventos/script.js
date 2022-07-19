// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

function ativo(event){
  event.preventDefault();
  linksInternos.forEach((item)=>{
    item.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo')/*cuurentTarget é o mesmo que this. */

}

linksInternos.forEach((link)=>{
  link.addEventListener('click', ativo)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.querySelectorAll('body *');

function apresentacao(event){
  console.log(event.currentTarget)
}

elementos.forEach((item)=>{
  item.addEventListener('click',apresentacao)
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const body = document.querySelectorAll('body *');

function apresentacao(event){
  event.currentTarget.remove();
}

body.forEach((item)=>{
  item.addEventListener('click',apresentacao)
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function fonte(event){
  if(event.key === 't'){
    document.body.classList.toggle('class-body')
  }
}

window.addEventListener('keydown',fonte)