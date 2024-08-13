
const listaAlunos: any[] = [];

function addAluno(): void {

    // Obter os dados do aluno através dos inputs
    const inputId = document.getElementById('id') as HTMLInputElement;
    const inputNome = document.getElementById('nome') as HTMLInputElement;
    const inputMatricula = document.getElementById('matricula') as HTMLInputElement;
    const inputPeriodo = document.getElementById('periodo') as HTMLInputElement;
    const inputN1 = document.getElementById('n1') as HTMLInputElement;
    const inputN2 = document.getElementById('n2') as HTMLInputElement;
    const inputN3 = document.getElementById('n3') as HTMLInputElement;

    // Declarando um objeto, inserindo os valores nas propriedades com base
    // no valor de cada input no html 
    const aluno = {
        id: inputId.value,
        nome: inputNome.value,
        matricula: inputMatricula.checked,
        periodo: inputPeriodo.value,
        nota1: Number(inputN1.value),
        nota2: Number(inputN2.value),
        nota3: Number(inputN3.value)
    };

    // Adicionar o aluno na lista de alunos
    listaAlunos.push(aluno);

    inserirRegistroTabela(aluno);
    
}

function inserirRegistroTabela(aluno: any): void {

    // Vincular a tabela do html ao TS
    const tabelaAlunos = document.getElementById('tabelaAlunos') as HTMLTableElement;

    // Criando a nova linha
    const novaLinha: string = `
    <tr>
        <td>${aluno.id}</td>
        <td>${aluno.nome}</td>
        <td>${aluno.matricula}</td>
        <td>${aluno.periodo}</td>
        <td>${(aluno.nota1 + aluno.nota2 + aluno.nota3)/3}</td>
    </tr>
    `;

    // Inserindo a nova linha na tabela
    tabelaAlunos.innerHTML += novaLinha;
}
