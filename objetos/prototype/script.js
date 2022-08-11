// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome,sobrenome,idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade
}
Pessoa.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome} ${this.idade}`;
 }

const karol = new Pessoa('Karoliny', 'Pires',30)
console.log(karol.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

console.log(li.constructor.name);   //HTML LI Element
console.log(li.click.constructor.name);   //Function
console.log(li.innerText.constructor.name);   //String
console.log(li.value.constructor.name);    //Number
console.log(li.hidden.constructor.name);    //Boolena
console.log(li.offsetLeft.constructor.name);   //Number
li.click()    //undefined

// Qual o construtor do dado abaixo:
console.log(li.hidden.constructor.name);  //string
