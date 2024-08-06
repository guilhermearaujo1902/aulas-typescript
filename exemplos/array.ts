// Declarando um Array
let nomes: string[] = [];

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
nomes.splice(1,1);

// Inserir um elemento em uma posição específica
nomes.splice(1,0,'Luna');

// Substituir um elemento em uma posição específica
nomes.splice(2,1,'Dumbledore');

// Encontrar o index de um elemento
nomes.indexOf('Hermione');

// Percorrer todos os elementos da lista
nomes.forEach((nome, pos) => {
    console.log(`${nome} está na posição ${pos}`);
});

nomes = ['Harry','Hermione', 'Rony', 'Draco', 'Luna', 'Hermione']

// EXIBIR NO CONSOLE A QUANTIDADE DE VEZES QUE APARECE O NOME
// 'HERMIONE'
