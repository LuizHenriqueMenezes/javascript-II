function addPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm("Escalar " + name + " (n° " + number + ") como " + position + "?")

    if(confirmation){
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = "player-" + number
        playerItem.innerText = position + ": " + number + ". " + name
        teamList.appendChild(playerItem)

        document.getElementById('position').value = "" //pra limpar os inputs 
        document.getElementById('name').value = ""
        document.getElementById('number').value = ""
    }
}

function removePlayer(){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmation = confirm("Quer mesmo remover o jogador " + playerToRemove.innerText + "?")

    if(confirmation){
        //document.getElementById('teamList').removeChild(playerToRemove) 
        playerToRemove.remove()
        document.getElementById('numberToRemove').value = ""
    }
} 