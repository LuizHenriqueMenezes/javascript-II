const nameList = []

function names() {
    const ul = document.getElementById('names')

    const li = document.createElement('li')
    const nameplayer1 = prompt("Digite o nome do player que vai jogar com o X")
    li.innerText = "Jogador 'X': " + nameplayer1
    li.id = 'liName'
    nameList.push({
        nome1: nameplayer1
    })

    ul.appendChild(li)
}

function name2() {
    const ul = document.getElementById('name2')

    const li = document.createElement('li')
    const nameplayer2 = prompt("Digite o nome do player que vai jogar com O")
    li.innerText = "Jogador 'O': " + nameplayer2
    li.id = 'liName'
    nameList.push({
        nome2: nameplayer2
    })

    ul.appendChild(li)
}

function reload() {
    location.reload();
}

const reloadBtn = document.getElementById('reloadBtn')
reloadBtn.addEventListener('click', reload)

let jogadorAtual = "X"

function line1(input) {
    if (!input.value) {
        input.value = jogadorAtual;
        jogadorAtual = (jogadorAtual === "X") ? "O" : "X";
    }

    if (block1.value === "X" && block2.value === "X" && block3.value === "X") {
        if (block1, block2, block3) {
            block1.style.backgroundColor = "green"
            block2.style.backgroundColor = "green"
            block3.style.backgroundColor = "green"
        }

        const ul = document.getElementById('names')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block4.value === "X" && block5.value === "X" && block6.value === "X") {
        if (block4, block5, block6) {
            block4.style.backgroundColor = "green"
            block5.style.backgroundColor = "green"
            block6.style.backgroundColor = "green"
        }

        const ul = document.getElementById('names')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block7.value === "X" && block8.value === "X" && block9.value === "X") {
        if (block7, block8, block9) {
            block7.style.backgroundColor = "green"
            block8.style.backgroundColor = "green"
            block9.style.backgroundColor = "green"
        }

        const ul = document.getElementById('names')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block1.value === "X" && block4.value === "X" && block7.value === "X") {
        if (block1, block4, block7) {
            block1.style.backgroundColor = "green"
            block4.style.backgroundColor = "green"
            block7.style.backgroundColor = "green"
        }

        const ul = document.getElementById('names')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block2.value === "X" && block5.value === "X" && block8.value === "X") {
        if (block2, block5, block8) {
            block2.style.backgroundColor = "green"
            block5.style.backgroundColor = "green"
            block8.style.backgroundColor = "green"
        }

        const ul = document.getElementById('names')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block3.value === "X" && block6.value === "X" && block9.value === "X") {
        if (block3, block6, block9) {
            block3.style.backgroundColor = "green"
            block6.style.backgroundColor = "green"
            block9.style.backgroundColor = "green"
        }

        const ul = document.getElementById('names')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block1.value === "X" && block5.value === "X" && block9.value === "X") {
        if (block1, block5, block9) {
            block1.style.backgroundColor = "green"
            block5.style.backgroundColor = "green"
            block9.style.backgroundColor = "green"
        }

        const ul = document.getElementById('names')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block3.value === "X" && block5.value === "X" && block7.value === "X") {
        if (block3, block5, block7) {
            block3.style.backgroundColor = "green"
            block5.style.backgroundColor = "green"
            block7.style.backgroundColor = "green"
        }

        const ul = document.getElementById('names')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block1.value === "O" && block2.value === "O" && block3.value === "O") {
        if (block1, block2, block3) {
            block1.style.backgroundColor = "green"
            block2.style.backgroundColor = "green"
            block3.style.backgroundColor = "green"
        }

        const ul = document.getElementById('name2')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block4.value === "O" && block5.value === "O" && block6.value === "O") {
        if (block4, block5, block6) {
            block4.style.backgroundColor = "green"
            block5.style.backgroundColor = "green"
            block6.style.backgroundColor = "green"
        }

        const ul = document.getElementById('name2')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block7.value === "O" && block8.value === "O" && block9.value === "O") {
        if (block7, block8, block9) {
            block7.style.backgroundColor = "green"
            block8.style.backgroundColor = "green"
            block9.style.backgroundColor = "green"
        }

        const ul = document.getElementById('name2')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block1.value === "O" && block4.value === "O" && block7.value === "O") {
        if (block1, block4, block7) {
            block1.style.backgroundColor = "green"
            block4.style.backgroundColor = "green"
            block7.style.backgroundColor = "green"
        }

        const ul = document.getElementById('name2')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block2.value === "O" && block5.value === "O" && block8.value === "O") {
        if (block2, block5, block8) {
            block2.style.backgroundColor = "green"
            block5.style.backgroundColor = "green"
            block8.style.backgroundColor = "green"
        }

        const ul = document.getElementById('name2')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block3.value === "O" && block6.value === "O" && block9.value === "O") {
        if (block3, block6, block9) {
            block3.style.backgroundColor = "green"
            block6.style.backgroundColor = "green"
            block9.style.backgroundColor = "green"
        }

        const ul = document.getElementById('name2')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block1.value === "O" && block5.value === "O" && block9.value === "O") {
        if (block1, block5, block9) {
            block1.style.backgroundColor = "green"
            block5.style.backgroundColor = "green"
            block9.style.backgroundColor = "green"
        }

        const ul = document.getElementById('name2')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
    else if (block3.value === "O" && block5.value === "O" && block7.value === "O") {
        if (block3, block5, block7) {
            block3.style.backgroundColor = "green"
            block5.style.backgroundColor = "green"
            block7.style.backgroundColor = "green"
        }

        const ul = document.getElementById('name2')
        const li = document.createElement('li')
        li.innerText = "VENCEDOR 🏆"
        li.id = 'liName'
        ul.appendChild(li)
    }
}

const block1 = document.getElementById('block1')
const block2 = document.getElementById('block2')
const block3 = document.getElementById('block3')
const block4 = document.getElementById('block4')
const block5 = document.getElementById('block5')
const block6 = document.getElementById('block6')
const block7 = document.getElementById('block7')
const block8 = document.getElementById('block8')
const block9 = document.getElementById('block9')
