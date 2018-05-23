"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Formiga = /** @class */ (function () {
    function Formiga(quantidadeDeFeromonioQueDeposita) {
        if (quantidadeDeFeromonioQueDeposita)
            this.quantidadeDeFeromonioQueDeposita = quantidadeDeFeromonioQueDeposita;
        else
            this.quantidadeDeFeromonioQueDeposita = 1;
        this.larguraDoCaminho = 0;
        this.elitista = false;
    }
    Formiga.prototype.getLarguraCaminho = function () {
        return this.larguraDoCaminho;
    };
    Formiga.prototype.adicionarArestaAoCaminho = function (primeiraAresta) {
        var _this = this;
        var listaDeArestas = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            listaDeArestas[_i - 1] = arguments[_i];
        }
        this.arestasPassadas.push(primeiraAresta);
        this.larguraDoCaminho += primeiraAresta.getDistancia();
        listaDeArestas.forEach(function (aresta) {
            _this.arestasPassadas.push(aresta);
            _this.larguraDoCaminho += aresta.getDistancia() > 0 ? aresta.getDistancia() : 0;
        });
    };
    return Formiga;
}());
exports.Formiga = Formiga;
