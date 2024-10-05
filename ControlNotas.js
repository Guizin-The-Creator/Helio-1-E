const Notas = require('../model/Notas'); // Certifique-se de que o nome do arquivo esteja correto

module.exports = class ControlNotas {
    controle_get_calcular_media_e_aprovacao(request, response) {
        // Recupera as notas passadas pela URI
        const nota1 = parseFloat(request.params.nota1);
        const nota2 = parseFloat(request.params.nota2);
        const nota3 = parseFloat(request.params.nota3);

        const notas = new Notas(nota1, nota2, nota3); // Instância da classe Notas
        const media = notas.calcularMedia(); // Calcula a média
        const resultado = notas.verificarAprovacao(); // Verifica se o aluno foi aprovado ou reprovado

        response.status(200).send({ media: media, resultado: resultado }); // Retorna a média e o resultado
    }
};
