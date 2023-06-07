const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumero()



function gerarNumero() {

    const aleatorio = Math.random()
    return parseInt(aleatorio * maiorValor + 1)
}

console.log(numeroSecreto)


const elementoMenor = document.querySelector("#menor-valor")
elementoMenor.innerHTML = menorValor

const elementoMaior = document.querySelector("#maior-valor")
elementoMaior.innerHTML = maiorValor