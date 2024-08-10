// Função sem parâmetro e sem retorno
function exibirAlerta(): void {
    alert('Alerta exibido com sucesso!');
}

function exibirNome(): void {
    const inputNome = document.getElementById('nome') as HTMLInputElement;
    alert(`Usuário ativo: ${inputNome.value}`);

    const div = document.getElementById('resultado') as HTMLDivElement;
    div.innerHTML = `Usuário ativo: ${inputNome.value}`;
}


// Criar uma função para capturar 1 número e inserir na DIV esquerda se for PAR
// ou inserir na DIV direita se for ÍMPAR
function capturarNumero(): void {

    // Vincular uma constante no TS ao input desejado no HTML
    const inputNumero = document.getElementById('numero') as HTMLInputElement;

    // Converter o valor do input para o tipo Number
    const numero: number = Number(inputNumero.value);

    // Testar se o número é PAR ou IMPAR
    if (numero % 2 == 0) {
        const divPar = document.getElementById('divPar') as HTMLDivElement;
        divPar.innerHTML += `${numero.toString()} `;
    } else {
        const divImpar = document.getElementById('divImpar') as HTMLDivElement;
        divImpar.innerHTML += `${numero.toString()} `;
    }

}