export class Aluno {
    private nome: string;
    private readonly codigo: number;
    private curso: string = '';
    private matricula: boolean = false;
    private readonly notas: number[] = [];

    constructor(nome: string, codigo: number){
        this.nome = nome;
        this.codigo = codigo;
    }

    mostrarNome(): string {
        return `Nome: ${this.nome} \nCodigo: ${this.codigo}`;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    // Alterar o valor da matrícula
    ativarMatricula(): void {
        this.matricula = true;
    }

    desativarMatricula(): void {
        this.matricula = false;
    }

    setMatricula(status: boolean): void {
        this.matricula = status;
    }

    alterarMatricula(): void {
        // if (this.matricula === true) {
        //     this.matricula = false;
        // } else {
        //     this.matricula = true;
        // }

        this.matricula = !this.matricula;
    }

    calcularMedia(notas: number[]): void {

        // Verificar se existem 4 notas lançadas na propriedade 'notas'
        if (this.notas.length != 4) {
            console.log('Quantidade de notas inválida! Espera-se 4.');
        } else {

            // Calcular a média
            let media: number = 0;
            this.notas.forEach(nota => {
                media += nota;
            });
            media = media/4;

            // Testar o valor da variável 'média'
            if (media >= 8) {
                console.log('APROVADO!');
            } else if (media <= 4) {
                console.log('REPROVADO!');
            } else {
                console.log('RECUPERAÇÃO');
            }
        }

    }

}

var aluno1 = new Aluno("Wolnei", 1);
var aluno2 = new Aluno("Guilherme", 2);

console.log(aluno1.mostrarNome());
console.log(aluno2.mostrarNome());

aluno2.calcularMedia([8,7,10,9]);