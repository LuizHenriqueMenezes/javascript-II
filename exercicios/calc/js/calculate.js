export default function calculate() {
    const resultInput = document.querySelector('#result')

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