export default function (ev) {
    const resultInput = document.querySelector('#result')
    const button = ev.currentTarget // quem acionou o evento (o próprio botão)
    if (button.innerText === "Copy") { // quer dizer que não foi copiado
        button.innerText = "Copied!" 
        button.classList.add("success") //vai adiconar o css .success
        navigator.clipboard.writeText(resultInput.value) // vai mandar o valor pra área de transferencia
    } else {
        button.innerText = "Copy"
        button.classList.remove("success")
    }
}