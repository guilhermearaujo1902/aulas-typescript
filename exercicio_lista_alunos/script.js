var listaAlunos = [];
function addAluno() {
    // Obter os dados do aluno através dos inputs
    var inputId = document.getElementById('id');
    var inputNome = document.getElementById('nome');
    var inputMatricula = document.getElementById('matricula');
    var inputPeriodo = document.getElementById('periodo');
    var inputN1 = document.getElementById('n1');
    var inputN2 = document.getElementById('n2');
    var inputN3 = document.getElementById('n3');
    // Declarando um objeto, inserindo os valores nas propriedades com base
    // no valor de cada input no html 
    var aluno = {
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
function inserirRegistroTabela(aluno) {
    // Vincular a tabela do html ao TS
    var tabelaAlunos = document.getElementById('tabelaAlunos');
    // Criando a nova linha
    var novaLinha = "\n    <tr>\n        <td>".concat(aluno.id, "</td>\n        <td>").concat(aluno.nome, "</td>\n        <td>").concat(aluno.matricula, "</td>\n        <td>").concat(aluno.periodo, "</td>\n        <td>").concat((aluno.nota1 + aluno.nota2 + aluno.nota3) / 3, "</td>\n    </tr>\n    ");
    // Inserindo a nova linha na tabela
    tabelaAlunos.innerHTML += novaLinha;
}
