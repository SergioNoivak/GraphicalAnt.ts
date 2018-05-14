"use strict";
exports.__esModule = true;
var No = /** @class */ (function () {
    function No(nomeDeCidade, listaDeAdjacencia) {
        this.nomeDeCidade = nomeDeCidade ? nomeDeCidade : "";
        this.listaDeAdjacencia = listaDeAdjacencia ? listaDeAdjacencia : (new Array());
    }
    No.prototype.Exibir = function () {
        console.log("%s|", this.nomeDeCidade);
        this.listaDeAdjacencia.forEach(function (aresta) {
            aresta.exibirNaListaAdjacencia();
            console.log("");
        });
    };
    No.prototype.adicionarNaLista = function (primeiraAresta) {
        var _this = this;
        var restoDasArestas = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restoDasArestas[_i - 1] = arguments[_i];
        }
        this.listaDeAdjacencia.push(primeiraAresta);
        restoDasArestas.forEach(function (aresta) {
            _this.listaDeAdjacencia.push(aresta);
        });
    };
    No.prototype.getNomeDeCidade = function () {
        return this.nomeDeCidade;
    };
    return No;
}());
exports.No = No;
