"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, codigo) {
        this.curso = '';
        this.matricula = false;
        this.notas = [];
        this.nome = nome;
        this.codigo = codigo;
    }
    Aluno.prototype.mostrarNome = function () {
        return "Nome: ".concat(this.nome, " \nCodigo: ").concat(this.codigo);
    };
    Aluno.prototype.getNome = function () {
        return this.nome;
    };
    Aluno.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    // Alterar o valor da matrícula
    Aluno.prototype.ativarMatricula = function () {
        this.matricula = true;
    };
    Aluno.prototype.desativarMatricula = function () {
        this.matricula = false;
    };
    Aluno.prototype.setMatricula = function (status) {
        this.matricula = status;
    };
    Aluno.prototype.alterarMatricula = function () {
        // if (this.matricula === true) {
        //     this.matricula = false;
        // } else {
        //     this.matricula = true;
        // }
        this.matricula = !this.matricula;
    };
    Aluno.prototype.calcularMedia = function (notas) {
        // Verificar se existem 4 notas lançadas na propriedade 'notas'
        if (this.notas.length != 4) {
            console.log('Quantidade de notas inválida! Espera-se 4.');
        }
        else {
            // Calcular a média
            var media_1 = 0;
            this.notas.forEach(function (nota) {
                media_1 += nota;
            });
            media_1 = media_1 / 4;
            // Testar o valor da variável 'média'
            if (media_1 >= 8) {
                console.log('APROVADO!');
            }
            else if (media_1 <= 4) {
                console.log('REPROVADO!');
            }
            else {
                console.log('RECUPERAÇÃO');
            }
        }
    };
    return Aluno;
}());
exports.Aluno = Aluno;
var aluno1 = new Aluno("Wolnei", 1);
var aluno2 = new Aluno("Guilherme", 2);
console.log(aluno1.mostrarNome());
console.log(aluno2.mostrarNome());
aluno2.calcularMedia([8, 7, 10, 9]);
