function escalar() {
    const equipeSection = document.getElementById('equipe')

    const h3 = document.createElement('h3')
    h3.innerText = "Perfil Jogador"

    const ul = document.createElement('ul')

    // posição, nome, numero da camisa, confirmação
    const nomeJogador = document.createElement('li')
    nomeJogador.innerHTML = '<label for="nomeJogadorName">Nome: </label>'
    const nomeJogadorInput = document.createElement('input')
    nomeJogadorInput.type = 'text'
    nomeJogadorInput.name = "nomeJogadorName"
    nomeJogadorInput.id = "nomeJogadorName"
    nomeJogador.appendChild(nomeJogadorInput)
    ul.appendChild(nomeJogador)
    ul.appendChild(document.createElement('br'))

    const posicao = document.createElement('li')
    posicao.innerHTML = '<label for="posicaoName">Posição: </label>'
    const posicaoInput = document.createElement('input')
    posicaoInput.type = 'text'
    posicaoInput.name = "posicaoName"
    posicaoInput.id = "posicaoName"
    posicao.appendChild(posicaoInput)
    ul.appendChild(posicao)
    ul.appendChild(document.createElement('br'))

    const numeroJogador = document.createElement('li')
    numeroJogador.innerHTML = '<label for="numeroJogadorName">Número da camisa: </label>'
    const numeroJogadorInput = document.createElement('input')
    numeroJogadorInput.type = 'text'
    numeroJogadorInput.name = "numeroJogadorName"
    numeroJogadorInput.id = "numeroJogadorName"
    numeroJogador.appendChild(numeroJogadorInput)
    ul.appendChild(numeroJogador)
    ul.appendChild(document.createElement('br'))

    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.name = "submitName"
    submitButton.id = "submitName"
    submitButton.innerText = "Enviar"
    ul.appendChild(submitButton)
    ul.appendChild(document.createElement('br'))


    equipeSection.append(h3, ul)

    const nomeElement = document.getElementById('nomeJogadorName')
    const valorDeNome = nomeElement.value
    console.log(valorDeNome)

    const posicaoElement = document.getElementById('posicaoName')
    const valorDaPosicao = posicaoElement.value
    console.log(valorDaPosicao)

    const numeroElement = document.getElementById('numeroJogadorName')
    const valorDeNumero = numeroElement.value
    console.log(valorDeNumero)

    


}

function remover() {

}