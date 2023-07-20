function obterValor() {
    // Passo 1: Obter a referência ao elemento input usando o ID
    const inputElement = document.getElementById('meuInput');

    // Passo 2: Acessar a propriedade 'value' para obter o texto inserido pelo usuário
    const valorDoInput = inputElement.value;

    // Exemplo de uso: Exibindo o valor do input em um alerta
    alert('O valor do input é: ' + valorDoInput);
}
