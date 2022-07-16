// Verifique a distância da primeira imagem
// em relação ao topo da página
const imagem = document.querySelector('img');
console.log(imagem.offsetTop)

// Retorne a soma da largura de todas as imagens
function somaImagens (){
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((item) =>{
    soma += item.offsetWidth
  })
  console.log(soma)
}
//---função executada depois que todas as imagens carregarem através da propriedade onload
window.onload = function(){
  somaImagens();
}
 
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const link = document.querySelectorAll('a');

link.forEach((item) =>{
  if (item.offsetHeight >= 48 && item.offsetWidth >= 48){
    console.log(link,'Possuem o mínimo recomendado para o dedo')
  } else{
    console.log(link,'Não possui boa acessibilidade')
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width:720px)').matches

if(browserSmall){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile')
}