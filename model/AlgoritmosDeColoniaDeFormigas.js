"use strict";
exports.__esModule = true;
var Formiga_1 = require("./Formiga");
var Algoritmos_1 = require("./Algoritmos");
var AlgoritmosDeColoniaDeFormigas = /** @class */ (function () {
    function AlgoritmosDeColoniaDeFormigas() {
    }
    AlgoritmosDeColoniaDeFormigas.AntSystem = function (grafo, numeroDeSolucoes, numeroDeFormigas, quantidadeDeFeromonioQueDeveSerDepositado, taxaDeEvaporacao) {
        var FormigaElitista = new Formiga_1.Formiga();
        FormigaElitista.setLarguraCiclo(Number.MAX_VALUE);
        for (var i = 0; i < numeroDeSolucoes; i++) {
            var formigaDaSolucao = Algoritmos_1.Algoritmos.Construir_solucao_parcial(grafo, numeroDeFormigas, quantidadeDeFeromonioQueDeveSerDepositado, taxaDeEvaporacao);
            if (formigaDaSolucao.getLarguraCiclo() < FormigaElitista.getLarguraCiclo())
                FormigaElitista = formigaDaSolucao;
        }
        console.log("FIM&&&&&&&&&&&&&");
        FormigaElitista.exibirCiclo();
        return FormigaElitista;
    };
    return AlgoritmosDeColoniaDeFormigas;
}());
exports.AlgoritmosDeColoniaDeFormigas = AlgoritmosDeColoniaDeFormigas;
