const corpo = document.body

function verificaChute(chute) {
    const numero = chute

    if (chutaInvalido(numero)) {
        elementoChute.innerHTML += "<div> Valor invalido</div>"
        return
    }

    if (maiorOuMeno(numero)) {
        elementoChute.innerHTML += `<div>Valor invalido: O numero secreto precisa estár entre ${menorValor} e ${maiorValor}</div>`

        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!<\h2>
        <h3>O número secreto era ${numeroSecreto}<\h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
    `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número segreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número segreto é menor <i class="fa-solid fa-arrow-up"></i></div>`
    }

}





function chutaInvalido(numero) {
    return Number.isNaN(numero)
}

function maiorOuMeno(numero) {
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', e => {
        if(e.target.id == 'jogar-novamente'){
            window.location.reload()
        }
})