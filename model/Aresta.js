"use strict";
exports.__esModule = true;
var Aresta = /** @class */ (function () {
    function Aresta(noFim, distancia) {
        this.feromonioAtual = 1;
        this.noFim = noFim;
        this.distancia = distancia;
    }
    Aresta.prototype.getFim = function () {
        return this.noFim;
    };
    Aresta.prototype.receberDepositoDeFeromonio = function (depositoDeFeromonio) {
        this.feromonioAtual += depositoDeFeromonio;
    };
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
        //process.stdout.write("("+this.noFim.getNomeDeCidade()+",");
        //process.stdout.write( this.distancia+")");        
    };
    Aresta.prototype.evaporarFeromonio = function (percentualDeEvaporacao) {
        this.feromonioAtual *= percentualDeEvaporacao;
    };
    Aresta.prototype.exibirTipoEstruturaDeDados = function () {
        process.stdout.write("(" + this.noFim.getNomeDeCidade() + ",");
        process.stdout.write(this.distancia + ",");
        process.stdout.write(this.feromonioAtual + ")");
    };
    return Aresta;
}());
exports.Aresta = Aresta;
