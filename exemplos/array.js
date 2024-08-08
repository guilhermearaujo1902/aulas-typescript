// Declarando um Array
var nomes = [];
// Inserir elemento na última posição da lista
nomes.push('Harry');
nomes.push('Hermione', 'Rony', 'Draco');
// Remover elemento na última posição
nomes.pop();
// Inserir elemento na primeira posição
nomes.unshift('Bob', 'Patrick');
// Remover elemento na primeira posição
nomes.shift();
// Remover elemento em uma posição específica
nomes.splice(1, 1);
// Inserir um elemento em uma posição específica
nomes.splice(1, 0, 'Luna');
// Substituir um elemento em uma posição específica
nomes.splice(2, 1, 'Dumbledore');
// Encontrar o index de um elemento
nomes.indexOf('Hermione');
// Percorrer todos os elementos da lista
nomes.forEach(function (nome, pos) {
    console.log("".concat(nome, " est\u00E1 na posi\u00E7\u00E3o ").concat(pos));
});
nomes = ['Harry', 'Hermione', 'Rony', 'Draco', 'Luna', 'Hermione'];
// EXIBIR NO CONSOLE A QUANTIDADE DE VEZES QUE APARECE O NOME
// 'HERMIONE'
var quant = 0;
var listaIndex = [];
nomes.forEach(function (nome, index) {
    if (nome === 'Hermione') {
        quant++;
        listaIndex.push(index);
    }
});
console.log("\"Hermione\" aparece ".concat(quant, " vezes na lista."));
console.log("As posi\u00E7\u00F5es s\u00E3o: ".concat(listaIndex.toString()));
