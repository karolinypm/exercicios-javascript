// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copa = [1959,1962,1970,1994,2002]
console.log(copa)

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i <copa.length; i++){
  console.log(`O Brasil ganhou a copa de ${copa[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(x=0; x<frutas.length; x++){
  console.log(frutas[x])
    if(frutas[x]==='Pera'){
      break;
  }

}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length -1];
console.log(`A ultima fruta é ${ultimaFruta}`);