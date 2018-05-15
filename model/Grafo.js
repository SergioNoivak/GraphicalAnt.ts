"use strict";
exports.__esModule = true;
var Grafo = /** @class */ (function () {
    function Grafo() {
        this.vetorDeNos = new Array();
    }
    Grafo.prototype.adicionarNos = function (primeiroNo) {
        var _this = this;
        var restanteDosNos = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restanteDosNos[_i - 1] = arguments[_i];
        }
        this.vetorDeNos.push(primeiroNo);
        if (restanteDosNos)
            restanteDosNos.forEach(function (no) {
                _this.vetorDeNos.push(no);
            });
    };
    Grafo.prototype.Exibir = function () {
        this.vetorDeNos.forEach(function (no) {
            no.Exibir();
            console.log();
        });
    };
    return Grafo;
}());
exports.Grafo = Grafo;
