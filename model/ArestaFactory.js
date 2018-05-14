"use strict";
exports.__esModule = true;
var Aresta_1 = require("./Aresta");
var No_1 = require("./No");
var ArestaFactory = /** @class */ (function () {
    function ArestaFactory() {
    }
    ArestaFactory.buildAresta = function (noFim, distancia) {
        if (!(noFim instanceof No_1.No))
            return null;
        if (distancia <= 0)
            return null;
        return new Aresta_1.Aresta(noFim, distancia);
    };
    return ArestaFactory;
}());
exports.ArestaFactory = ArestaFactory;
