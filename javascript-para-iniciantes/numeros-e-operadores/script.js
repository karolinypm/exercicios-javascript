// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(`Começa por multiplicação e divisão... Depois soma e subtração. O resultado é ${total}`)

// Crie duas expressões que retornem NaN
var peso = 80,
    unidade = 'kg',
    pesoPorQuatro = peso + unidade / 4;
    console.log(pesoPorQuatro)

console.log(parseInt('Karoliny'));

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var acrescimo = 5;
console.log(acrescimo++);
console.log(acrescimo);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)

console.log(pesoPorDois)