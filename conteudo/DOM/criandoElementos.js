function addInput(){
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.className = 'list-item' 
    newLi.innerText = prompt("Digite o que vai entrar") // texto que está dentro da tag

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'claudio'
 
    newLi.appendChild(newInput)
    ul.appendChild(newLi) // assim fica: ul > newLi > newInput
}
