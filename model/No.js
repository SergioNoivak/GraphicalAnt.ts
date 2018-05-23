"use strict";
exports.__esModule = true;
var Algoritmos_1 = require("./Algoritmos");
var No = /** @class */ (function () {
    function No(nomeDeCidade, listaDeAdjacencia) {
        this.nomeDeCidade = nomeDeCidade ? nomeDeCidade : "";
        this.listaDeAdjacencia = listaDeAdjacencia ? listaDeAdjacencia : (new Array());
    }
    No.prototype.Exibir = function () {
        //process.stdout.write(this.nomeDeCidade+"|");
        this.listaDeAdjacencia.forEach(function (aresta) {
            aresta.exibirNaListaAdjacencia();
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
    No.prototype.escolherProximaAresta = function (marcado) {
        var vetorDeArestasVizinhasNaoMarcadas = new Array();
        var vetorProbabilidades = new Array();
        var somaAptidoes = 0.0;
        this.listaDeAdjacencia.forEach(function (aresta) {
            if (!marcado[aresta.getFim().getNomeDeCidade()]) {
                vetorDeArestasVizinhasNaoMarcadas.push(aresta);
                somaAptidoes += aresta.getAptidao();
                vetorProbabilidades.push(aresta.getAptidao());
            }
        });
        // console.log("vetorDeArestasVizinhasNaoMarcadas");
        // console.log(vetorDeArestasVizinhasNaoMarcadas);
        vetorProbabilidades = vetorProbabilidades.map(function (x) { return x / somaAptidoes; });
        somaAptidoes = vetorProbabilidades.reduce(function (acumulador, elemento) { return acumulador += elemento; });
        // console.log("vetorProbabilidades");
        // console.log(vetorProbabilidades);
        var indiceEscolhido = Algoritmos_1.Algoritmos.Roleta(vetorProbabilidades, somaAptidoes);
        // console.log("elementoEscolhido");
        return vetorDeArestasVizinhasNaoMarcadas[indiceEscolhido];
    };
    return No;
}());
exports.No = No;
