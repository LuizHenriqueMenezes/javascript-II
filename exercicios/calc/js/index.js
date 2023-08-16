import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyhandlers.js"
import themeSwitcher from "./themeSwitcher.js"

const input = document.getElementById("input")

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
    // vai selecionar todos os .charKey, e vai listar, os itens chamam charKeyBtn 
    charKeyBtn.addEventListener("click", handleButtonPress)
})

// botão de limpar
document.getElementById('clear').addEventListener('click', handleClearButton)

input.addEventListener('keydown', handleTyping)

// quando apertar igual vai chamar a function pra calcular
document.getElementById("equal").addEventListener("click", calculate)

//botão de copiar resultado
document.getElementById("copyToClipboard").addEventListener("click", copyToClipboard)

//trocar o tema
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)