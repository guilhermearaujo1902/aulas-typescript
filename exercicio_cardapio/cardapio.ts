// Criando a lista de dias da semana
const diasSemana: number[] = [1,7,9,2,4];

// Percorrer a lista
diasSemana.forEach(dia => {

    // Testando cada elemento da lista e enviando saída de dados
    switch (dia) {
        case 1: 
            console.log('Domingo: Feijoada.');
            break;
        case 2: 
            console.log('Segunda-feira: Macarrão.');
            break;
        case 3: 
            console.log('Terça-feira: Parmegiana.');
            break;
        case 4: 
            console.log('Quarta-feira: Maionese com doce de leite.');
            break;
        case 5: 
            console.log('Quinta-feira: 1 Camarão por pessoa.');
            break;
        case 6: 
            console.log('Sexta-feira: Iscas de frango.');
            break;
        case 7: 
            console.log('Sábado: Salada.');
            break;
        default: 
            console.log('Dia inválido.');
    }

});