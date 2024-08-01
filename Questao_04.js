class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }

    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

let alunos = [
        new Aluno("João", "da Silva", 7, 8.5),
        new Aluno("Pedro", "Mattos", 10, 9.5),
        new Aluno("Matheus", "Santos", 10, 9.5),
        new Aluno("Felipe", "Cunegundes", 9, 10),
        new Aluno("Samuel", "Akinroyeje", 9, 10)
    ];

function mostrarDadosAlunos(alunos) {
    alunos.forEach(aluno => {
        alert("Nome Completo: " + aluno.nomeCompleto() + "\n" +
              "Média: " + aluno.media().toFixed(2) + "\n" +
              "Situação: " + aluno.situacao());
    });
}

mostrarDadosAlunos(alunos);