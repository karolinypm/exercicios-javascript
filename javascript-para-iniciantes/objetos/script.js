// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo
var dadosPessoais = {
  nome: 'Karoliny',
  sobrenome: 'Pires',
  dataDeNascimento: '15/04/92',
  nomeCompleto: function(){
    return `${this.nome} ${this.sobrenome}`;
  }
}
console.log(dadosPessoais)
console.log(dadosPessoais.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
console.log(carro);
carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  sexo: 'homem',
  latido: function(sexo){
    if(sexo === 'homem'){
      return('au, au, au!')
    } else{
      return(silêncio)
    }
  }
}
console.log(cachorro.latido('homem'))