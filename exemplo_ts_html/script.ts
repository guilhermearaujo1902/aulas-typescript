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