const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
    input.value = input.value === '' ? 'vai corinthians' : ''
    // valor = se o valor estiver vazio, valor = vai corithians, se não valor = ''

    //console.log(input.getAttribute('value')) } isso aqui pega o valor inicial, que estaria no html
})

document.getElementById('type').addEventListener('click', function () {
    input.type = input.type !== 'date' ? 'date' : 'text'
    // input.setAttribute('type', 'radio') } isso aqui tranforma o type em radio, "type = radio"
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = input.placeholder === '' ? 'digite algo...' : ''
})

document.getElementById('disable').addEventListener('click', function () {
    //input.setAttribute('disabled', !input.disabled)
    input.disabled = input.disabled === false ? true : false
})

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse // dataset -> pega todos os datas, somenthingElse é o nome lá no html (não pd usar traço)
    console.log("O valor do atributo data-something-else é: " + data)
    input.dataset.somethingElse = 'Algum outro valor'
    console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse)
  })