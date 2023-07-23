// ev = evento que foi disparado. Ele é passado pra nossa função sempre que o evento é disparado automaticamente
function register(ev){
    const sectionElement = ev.currentTarget.parentNode // pegou o evento, alvo dele , nó pai
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    console.log({username, password, passwordConfirmation})

    if(password === passwordConfirmation){
        alert("Registro feito com sucesso")
    }else{
        alert("Arruma essa senha rapá ")
    }
}

const button = document.getElementById('register-button')
// adicionar evento ao botão:
button.addEventListener('click', register)
//1° - adicionar uma string dizendo qual o evento que eu quero adicionar
//2° - adicionar uma função de callback

function removeEvent(){
    // .removeEventListener faz o oposto do add, ele pega o evento que a gente quer ('click') e a função que foi associada 
    // (da pra adicionar mais de um evento/função) 
    button.removeEventListener('click', register)
    alert("event removed")
}