// Função sem parâmetro e sem retorno
function exibirAlerta() {
    alert('Alerta exibido com sucesso!');
}
function exibirNome() {
    var inputNome = document.getElementById('nome');
    alert("Usu\u00E1rio ativo: ".concat(inputNome.value));
    var div = document.getElementById('resultado');
    div.innerHTML = "Usu\u00E1rio ativo: ".concat(inputNome.value);
}
// Criar uma função para capturar 1 número e inserir na DIV esquerda se for PAR
// ou inserir na DIV direita se for ÍMPAR
function capturarNumero() {
    // Vincular uma constante no TS ao input desejado no HTML
    var inputNumero = document.getElementById('numero');
    // Converter o valor do input para o tipo Number
    var numero = Number(inputNumero.value);
    // Testar se o número é PAR ou IMPAR
    if (numero % 2 == 0) {
        var divPar = document.getElementById('divPar');
        divPar.innerHTML += "".concat(numero.toString(), " ");
    }
    else {
        var divImpar = document.getElementById('divImpar');
        divImpar.innerHTML += "".concat(numero.toString(), " ");
    }
}
