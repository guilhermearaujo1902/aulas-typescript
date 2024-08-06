const nome: string = 'Guilherme';
const codigo: number = 777;
const estudando: boolean = true;
const mesNumero: number = 2;

let mesNome: string = '';

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
        mesNome = 'Mês inválido'
}

// let estudandoResposta: string;

// if (estudando === true) {
//     estudandoResposta = 'Verdadeiro';
// } else {
//     estudandoResposta = 'Falso';
// }

// Saídas de dados abaixo
console.log(`Meu nome é ${nome}`);
console.log(`Meu código de aluno é ${codigo}`);
console.log(`Estou estudando no Superdev? R: ${estudando == true ? 'Verdadeiro' : 'Falso'}`); // IF Ternário
console.log(`Sabendo que estamos no mês ${mesNumero}, posso dizer que é ${mesNome}`);

