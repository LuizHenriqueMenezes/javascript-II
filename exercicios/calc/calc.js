const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
// teclas que podem ser clicadas

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    // vai selecionar todos os .charKey, e vai listar, os itens chamam charKeyBtn 
    charKeyBtn.addEventListener("click", function () {
        const value = charKeyBtn.dataset.value
        // ao clicar, vai pegar o data-valor (dataset é pra pegar o data) e por na const valor
        input.value += value // e adicionar ao input 
    })
})

// botão de limpar
document.getElementById('clear').addEventListener('click', function () {
    input.value = ''
    resultInput.value = ''
    // input.focus() vai focar no input, focar o cursor lá
})

input.addEventListener('keydown', function (ev) {
    ev.preventDefault()
    // vai usar o preventDefault pra conter o comportamento padrão, ou seja, clicar qualquer tecla. Queremos controlar isso manualmente

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
})

// quando apertar igual vai chamar a function pra calcular
document.getElementById("equal").addEventListener("click", calculate)

function calculate() {
    resultInput.value = "ERROR" // mensagem
    resultInput.classList.add("error") //css
    // quando a gente executa e está errado, não retorna nada, então vamos por primeiro esse error, independente de tudo
    // e depois vem o resultado etc, e caso esteja td certo, vai ser tão rápido que nem vai dar pra ver
    const result = eval(input.value)
    // esse eval "le" o código e executa, importante tomar cuidado caso interaja com usuario
    // se por exemplo escrever 2+2, vai executar como se fosse no console
    resultInput.value = result // pra aparecer o resultado no input de resultado
    resultInput.classList.remove("error") // remove o erro automático 
}

//botão de copiar resultado
document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
    const button = ev.currentTarget // quem acionou o evento (o próprio botão)
    if (button.innerText === "Copy") { // quer dizer que não foi copiado
        button.innerText = "Copied!" 
        button.classList.add("success") //vai adiconar o css .success
        navigator.clipboard.writeText(resultInput.value) // vai mandar o valor pra área de transferencia
    } else {
        button.innerText = "Copy"
        button.classList.remove("success")
    }
})

//trocar o tema
document.getElementById('themeSwitcher').addEventListener('click', function () {
    if (main.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#f1f5f9") // acessa o root e seta: nome, o que quer passar
        root.style.setProperty("--border-color", "#aaa")
        root.style.setProperty("--font-color", "#212529")
        root.style.setProperty("--primary-color", "#26834a")
        main.dataset.theme = "light" // mudou o data-theme, pra poder ficar mudando
    } else {
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#4dff91")
        main.dataset.theme = "dark"
    }
})