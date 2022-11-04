var outImg = document.getElementById('outImg')
var btClick = document.getElementById('btClick')
var outTexto = document.getElementById('outTexto')

var numeros = []
var i = 0
var imagem = ''
var sorteio

outTexto.textContent = `Você gerou ${i} gatinhos :(`
btClick.addEventListener('click', function () {
    i++
    var carinha = i < 10 ? `:)` : `:0`
    var frase = i > 1 ? `Você gerou ${i} gatinhos ${carinha}` : `Você gerou ${i} gatinho ${carinha}`
    outTexto.textContent = frase
    sorteio = Math.floor(Math.random() * 38)

    // do {
    //     sorteio = Math.floor(Math.random() * 38)
    //     numeros.unshift(sorteio)
    // } while (numeros.indexOf(sorteio) == -1)


    imagem += `<img src="images/gatinho${sorteio + 1}.jpg" alt="gatenho">`
    outImg.innerHTML = imagem
})
