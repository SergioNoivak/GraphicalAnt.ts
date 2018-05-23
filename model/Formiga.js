"use strict";
exports.__esModule = true;
var Formiga = /** @class */ (function () {
    function Formiga(quantidadeDeFeromonioQueDeposita) {
        if (quantidadeDeFeromonioQueDeposita)
            this.quantidadeDeFeromonioQueDeposita = quantidadeDeFeromonioQueDeposita;
        else
            this.quantidadeDeFeromonioQueDeposita = 1;
        this.larguraDoCiclo = 0;
        this.elitista = false;
        this.nosPassados = new Array();
    }
    Formiga.prototype.getLarguraCaminho = function () {
        return this.larguraDoCiclo;
    };
    Formiga.prototype.passarPelasCidades = function (primeiroNo) {
        var _this = this;
        var listaDeNos = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            listaDeNos[_i - 1] = arguments[_i];
        }
        this.nosPassados.push(primeiroNo);
        listaDeNos.forEach(function (no) {
            _this.nosPassados.push(no);
        });
    };
    Formiga.prototype.exibirCiclo = function () {
        this.nosPassados.forEach(function (noDoCiclo) {
            console.log(noDoCiclo.getNomeDeCidade());
        });
    };
    Formiga.prototype.ultimoNoQuePassou = function () {
        return this.nosPassados[this.nosPassados.length - 1];
    };
    return Formiga;
}());
exports.Formiga = Formiga;
