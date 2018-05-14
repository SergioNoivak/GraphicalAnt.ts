"use strict";
exports.__esModule = true;
var Aresta = /** @class */ (function () {
    function Aresta(noFim, distancia) {
        this.feromonioAtual = 1;
        this.noFim = noFim;
        this.distancia = distancia;
    }
    Aresta.prototype.getDistancia = function () {
        return this.distancia;
    };
    Aresta.prototype.inversoDaDistancia = function () {
        return 1 / this.distancia;
    };
    Aresta.prototype.getAptidao = function () {
        return this.inversoDaDistancia() * this.feromonioAtual;
    };
    Aresta.prototype.exibirNaListaAdjacencia = function () {
        console.log("(%s,", this.noFim.getNomeDeCidade());
        console.log("%d)", this.distancia);
    };
    return Aresta;
}());
exports.Aresta = Aresta;
