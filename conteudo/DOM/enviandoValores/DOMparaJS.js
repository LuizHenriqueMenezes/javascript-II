function register(element) {
    const username = element.children.username.value //já que o parametro é o nó pai, da pra referenciar o nome assim
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    console.log({ username, password, passwordConfirmation })

    if (password === passwordConfirmation) {
        alert("Usuário " + username + " registrado")
        document.getElementById('username').value = ""
        document.getElementById('password').value = ""
        document.getElementById('passwordConfirmation').value = ""
    }else{
        alert("As senhas não batem")
    }
}