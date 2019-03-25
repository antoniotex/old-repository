// const botao = document.querySelector('[data-botao]')
var tecnologias = [
  {tecnologia: 'HTML5', cor: 'orange'},
  {tecnologia: 'CSS3', cor: 'blue'},
  {tecnologia: 'Javascript', cor: 'yellow'},
  {tecnologia: 'NodeJS', cor: 'green'},
]

function escrevePalavra (elemento) {
  console.log(elemento)
  tecnologias.map(function (tecnologia, index) {
    setTimeout(function () {
      elemento.innerHTML = ''
      tecnologiaArray = tecnologia.tecnologia.split('')
        tecnologiaArray.forEach(function (letra, i) {
          setTimeout(function () {
            elemento.innerHTML += letra
            elemento.style.color = tecnologia.cor
          }, 400 * i)
        });
    }, 4000 * index)
  })
}
escrevePalavra(palavra)
setInterval(() => {
  escrevePalavra(palavra)
}, 16000);