var nome = 'Guilherme';
var codigo = 777;
var estudando = true;
var mesNumero = 2;
var mesNome = '';
switch (mesNumero) {
    case 1:
        mesNome = 'Janeiro';
        break;
    case 2:
        mesNome = 'Fevereiro';
        break;
    case 7:
        mesNome = 'Julho';
        break;
    case 11:
        mesNome = 'Novembro';
        break;
    default:
        mesNome = 'Mês inválido';
}
// let estudandoResposta: string;
// if (estudando === true) {
//     estudandoResposta = 'Verdadeiro';
// } else {
//     estudandoResposta = 'Falso';
// }
// Saídas de dados abaixo
console.log("Meu nome \u00E9 ".concat(nome));
console.log("Meu c\u00F3digo de aluno \u00E9 ".concat(codigo));
console.log("Estou estudando no Superdev? R: ".concat(estudando == true ? 'Verdadeiro' : 'Falso')); // IF Ternário
console.log("Sabendo que estamos no m\u00EAs ".concat(mesNumero, ", posso dizer que \u00E9 ").concat(mesNome));
