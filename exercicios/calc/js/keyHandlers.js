import calculate from "./calculate.js"

const input = document.querySelector('#input')

export function handleButtonPress(ev) {
    const value = ev.currentTarget.dataset.value
    // ao clicar, vai pegar o data-valor (dataset é pra pegar o data) e por na const valor
    input.value += value // e adicionar ao input 
}

export function handleClearButton() {
    input.value = ''
    resultInput.value = ''
    // input.focus() vai focar no input, focar o cursor lá
}

export function handleTyping(ev) {
    ev.preventDefault()
    // vai usar o preventDefault pra conter o comportamento padrão, ou seja, clicar qualquer tecla. Queremos controlar isso manualmente

    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
    // teclas que podem ser clicadas

    if (allowedKeys.includes(ev.key)) {// se o allowedKeys inclui a tecla que o usuário clicou
        input.value += ev.key //pegar o valor do input e juntar com a tecla
        return // vai encerrar a função depois disso
    }
    // tecla de excluir caracter:
    if (ev.key === 'Backspace') { // backspace = botão de excluir
        input.value = input.value.slice(0, -1)
        // slice vai cortar a penultima posição, a posição 0 seria a última, e a -1 a penultima
        //ex: digitei "123 ", esse espaço vazio é o 0, e 3 é (-1)
    }
    if (ev.key === "Enter") {
        calculate()
    }
}