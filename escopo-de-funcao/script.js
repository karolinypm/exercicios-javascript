// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}
// não se declara o tipo de variável (var)console.log(var, marca, portas);

// Como corrigir o erro abaixo? criando uma variável para a segunda função
function somarDois(x) {
  const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  const dois = 2;
  return x + dois;
}
console.log(`A soma é ${somarDois(4)}`);
console.log(`A divisão é ${dividirDois(6)}`);

// O que fazer para total retornar 500? basta trocar a variável do for que estava substituindo o valor da variavel numero
var numero = 50;

for(var num = 0; num < 10; num++) {
  console.log(num);
}

const total = 10 * numero;
console.log(`O valor total é ${total}`);
