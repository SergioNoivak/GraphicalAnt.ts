"use strict";
exports.__esModule = true;
var Formiga_1 = require("./Formiga");
var FormigaFactory = /** @class */ (function () {
    function FormigaFactory() {
    }
    FormigaFactory.buildFormiga = function (quantidadeDeFeromonioQueDeposita) {
        if (quantidadeDeFeromonioQueDeposita == undefined)
            quantidadeDeFeromonioQueDeposita = 1;
        if (quantidadeDeFeromonioQueDeposita < 1)
            quantidadeDeFeromonioQueDeposita = 1;
        return new Formiga_1.Formiga(quantidadeDeFeromonioQueDeposita);
    };
    return FormigaFactory;
}());
exports.FormigaFactory = FormigaFactory;
