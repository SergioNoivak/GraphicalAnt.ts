"use strict";
exports.__esModule = true;
var Algoritmos = /** @class */ (function () {
    function Algoritmos() {
    }
    Algoritmos.Roleta = function (vetorDeProbabilidades, somaAptidoes) {
        var TotalParcial = 0;
        var p = 0.0;
        p = (Math.random() * somaAptidoes * 100000) + 0;
        p /= 100000;
        var i = -1;
        //console.log("Resultado do sorteio:     ",p);                   // APAGAR
        while (i < vetorDeProbabilidades.length && TotalParcial < p) {
            i = i + 1;
            //console.log("Total Parcial Ant:  ", TotalParcial);               //APAGAR
            TotalParcial = TotalParcial + vetorDeProbabilidades[i];
            //console.log("Total Parcial depois da mudança:   ", TotalParcial);     // APAGAR
        }
        //console.log("**Indice i após o fim do laço:    "+i);        // APAGAR
        return i;
    };
    return Algoritmos;
}());
exports.Algoritmos = Algoritmos;
