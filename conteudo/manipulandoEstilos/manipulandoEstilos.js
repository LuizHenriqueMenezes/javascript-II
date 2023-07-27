function useLightTheme(){
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function usedark(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

function switchTheme(){
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
    // esse classList permite manipular a lista de classes do elemento (body)
    // o togle permite ficar alternando, quando tiver em um, ele vai pro outro 
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', usedark)
document.getElementById('switchBtn').addEventListener('click', switchTheme)