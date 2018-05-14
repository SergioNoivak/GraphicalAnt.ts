"use strict";
exports.__esModule = true;
var No_1 = require("./No");
var NoFactory = /** @class */ (function () {
    function NoFactory() {
    }
    NoFactory.buildNo = function (nomeDeCidade, listaDeAdjacencia) {
        return new No_1.No(nomeDeCidade, listaDeAdjacencia);
    };
    return NoFactory;
}());
exports.NoFactory = NoFactory;
