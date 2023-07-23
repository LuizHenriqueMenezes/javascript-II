const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev){
    // pra pag não enviar os dados / atuaizar automáticamente:
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value // chamando tipo css, pediu os inputs que [tem tais atributos]
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    // vamos usar o querySelectorAll pra pegar todos os elementos que baterem com a query

    let salad = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){ 
        // esse item é cada um dos elementos do querySelectorAll, por isso .value 
        salad += ' - ' + item.value
    })

    console.log({
        name, address, breadType, main, observations, salad
    })
})