const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
console.log(comidas);

// Remova o primeiro valor de comidas e coloque em uma variável
const removePrimeiro = comidas.shift();
console.log(removePrimeiro);

// Remova o último valor de comidas e coloque em uma variável
const removeUltimo = comidas.pop();
console.log(removeUltimo);

// Adicione 'Arroz' ao final da array
const adicionaArroz = comidas.push('Arroz');
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao início da array
const adiciona = comidas.unshift('Peixe','Batata');
console.log(comidas);


const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
const alfabetica = estudantes.sort();
console.log(alfabetica);

// Inverta a ordem dos estudantes
const invertido = estudantes.reverse();
console.log(invertido);

// Verifique se Joana faz parte dos estudantes
console.log('Joana faz parte dos estudantes?' + estudantes.includes('Joana'))

// Verifique se Juliana faz parte dos estudantes
console.log(`Juliana faz paste dos estudantes?${ estudantes.includes('Juliana')}`)


let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li');
console.log(elemento);


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosOriginal = carros.slice();
const honda = carros.pop();

console.log(carros);
console.log(carrosOriginal);