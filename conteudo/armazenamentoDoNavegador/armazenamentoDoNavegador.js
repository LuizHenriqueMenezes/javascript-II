document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value) // setItem serve pra atribuir um item, 
    // primeiro escolhe uma key (pd ser qualquer nome), e depois o valor que a gente quer salvar
    input.value = '' 
})

document.getElementById('readSesssion').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert('a informação é: ' + info)
})

document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''

})

document.getElementById('readLocal').addEventListener('click', function(){
    const text = localStorage.getItem('text')
    alert('a informação é: ' + text)
})

document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    // nome do cookie = valor; (dps desse ";" da pra passar outras informações)
    // ex: data que expira ("expires = UTCStringDate;") 
    // ex: a partir de que caminho esse cookie está disponível ("path = /;" 
    const cookie = 'info=' + input.value + ';' 
    const expiration = 'expires=' + new Date(2023, 8, 22) + ';'
    const path = 'path=/;' // isso é como se estivesse disponível no começo do site, ent qualquer pag pd acessar
    
    //agora pra criar o cookie de fato:
    document.cookie = cookie + expiration + path
    
    input.value = ''
})

document.getElementById('cookie2Btn').addEventListener('click', function(){
    const input = document.getElementById('cookie2')
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023, 8, 22) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
})