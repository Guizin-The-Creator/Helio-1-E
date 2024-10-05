const express = require('express');
const ControlNotas = require('../control/ControlNotas'); // Certifique-se de que o nome do arquivo esteja correto
const MiddlewareNotas = require('../middleware/MiddlewareNotas'); // Atualizar a importação para o novo middleware

module.exports = class RouterNotas {
    criarRotasNotas() {
        this._router = express.Router();
        this._controleNotas = new ControlNotas(); // Instância da classe ControlNotas
        this._middlewareNotas = new MiddlewareNotas(); // Instância do middleware para validar notas

        // Trata a rota GET: /notas/:nota1/:nota2/:nota3
        this._router.get('/:nota1/:nota2/:nota3',
            this._middlewareNotas.validar_notas, // Valida se as notas são válidas
            this._controleNotas.controle_get_calcular_media_e_aprovacao // Chama o controlador
        );

        return this._router;
    }
};
