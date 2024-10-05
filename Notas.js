module.exports = class Notas {
    constructor(nota1, nota2, nota3) {
        this._nota1 = nota1; // Atribui a primeira nota
        this._nota2 = nota2; // Atribui a segunda nota
        this._nota3 = nota3; // Atribui a terceira nota
    }

    set nota1(nota1) {
        this._nota1 = nota1; // Setter para a primeira nota
    }

    get nota1() {
        return this._nota1; // Getter para a primeira nota
    }

    set nota2(nota2) {
        this._nota2 = nota2; // Setter para a segunda nota
    }

    get nota2() {
        return this._nota2; // Getter para a segunda nota
    }

    set nota3(nota3) {
        this._nota3 = nota3; // Setter para a terceira nota
    }

    get nota3() {
        return this._nota3; // Getter para a terceira nota
    }

    calcularMedia() {
        const media = (this.nota1 + this.nota2 + this.nota3) / 3; // Calcula a média das notas
        return media;
    }

    verificarAprovacao() {
        const media = this.calcularMedia(); // Chama a função de calcular média
        return media >= 7.0 ? "Aprovado" : "Reprovado"; // Retorna se o aluno foi aprovado ou reprovado
    }
};
