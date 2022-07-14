// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor){
  return(!!valor)
}
console.log(verificaValor(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(lado){
  return lado+lado+lado+lado;
}
console.log(quadrado(2))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome,sobrenome){
   return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Karoliny','Pires'))

// Crie uma função que verifica se um número é par
function numPar(num){
  if(num % 2 === 0){
    return 'É par'
  }else{
    return 'É ímpar'
  }
}
console.log(numPar(22))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
  return typeof dado;
}
console.log(tipoDeDado(2));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
console.log('Karoliny Pires Matias')
})

// Corrija o erro abaixo
var totalPaises = 193;//Variável dentro do escopo de uma função não pode ser lida pelas outras funções

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20)) 
console.log(jaVisitei(20));
