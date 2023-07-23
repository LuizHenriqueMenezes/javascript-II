function callbackzinho(ev){
    const abrevio = ev.currentTarget.parentNode.children
    const nome = abrevio.nome.value
    const email = abrevio.emailzinho.value
    const senha = abrevio.senha.value
    const confirmarSenha = abrevio.confirmarSenha.value

    console.log({nome, email, senha, confirmarSenha})

    document.getElementById('nome').value = ""
    document.getElementById('emailzinho').value = ""
    document.getElementById('senha').value = ""
    document.getElementById('confirmarSenha').value = ""
}

const botaum = document.getElementById('buttonCadastrar')
botaum.addEventListener('click', callbackzinho)