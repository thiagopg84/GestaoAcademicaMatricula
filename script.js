
let alunos = []
class Aluno {
    constructor(matricula, nome, cpf, dataNascimento, sexo, nomeMae, endereco) {
        this.matricula = matricula;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.nomeMae = nomeMae;
        this.endereco = endereco;
        this.nomePai = '';
        this.telefone = '';
        this.email = '';
        
        alunos.push(this);
    }
};

class Turma {
    constructor(codigo, nome, descricao, turno) {
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.turno = turno;
        this.alunosMatriculados = [];
    }
    matricular(matricula) {
        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].matricula == matricula) {
                console.log(`${alunos[i].nome} foi matriculado(a) na cadeira ${this.nome}.`)
                this.alunosMatriculados.push(alunos[i]);
            }
        }
    }
    desmatricular(matricula) {
        for (let i = 0; i < this.alunosMatriculados.length; i++) {
            if (matricula == this.alunosMatriculados[i].matricula) {
                console.log(`${this.alunosMatriculados[i].nome} foi desmatriculado(a) da cadeira ${this.nome}.`)
                this.alunosMatriculados.splice(i, 1);

            }
        }
    }
};

let marcos = new Aluno(12345, 'Marcos', '00011122233', '03/04/1984', 'homem', 'Altamira', 'Rua principal, casa 13');
let ronaldo = new Aluno(23456, 'Ronaldo', '11122233344', '02/08/1979', 'homem', 'Fernanda', 'Rua número 9, casa 6');
let pedro = new Aluno(34567, 'Pedro', '22233344455', '11/12/2000', 'homem', 'Joana', 'Rua número 46, casa 8');
let maria = new Aluno(45678, 'Maria', '33344455566', '21/09/1999', 'mulher', 'Veronica', 'Rua número 3, casa 17');

let turma01 = new Turma ('001A', 'Direção de arte 1', 'Cadeira de direção de arte voltada para o mercado de trabalho', 'matutino');
turma01.matricular(23456);
turma01.matricular(34567);
turma01.matricular(45678);
turma01.matricular(12345);
turma01.desmatricular(12345);