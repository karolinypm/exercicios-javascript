// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img')
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img = document.querySelectorAll('img[src^="https://"]')
console.log(img);

// Selecione todos os links internos (onde o href começa com #)----não pode haver espaço da condição pois dá erro
const linksinternos = document.querySelectorAll('[href^="#"]')
console.log(linksinternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const subtitulo = document.querySelector('.animais-descricao')
const h2sub = subtitulo.querySelector('h2')
console.log(subtitulo)

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos[paragrafos.length-1])
