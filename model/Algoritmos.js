"use strict";
exports.__esModule = true;
var Formiga_1 = require("./Formiga");
var FormigaFactory_1 = require("./FormigaFactory");
var Algoritmos = /** @class */ (function () {
    function Algoritmos() {
    }
    Algoritmos.Roleta = function (vetorDeProbabilidades, somaAptidoes) {
        var TotalParcial = 0;
        var p = 0.0;
        p = (Math.random() * somaAptidoes * 100000) + 0;
        p /= 100000;
        var i = -1;
        while (i < vetorDeProbabilidades.length && TotalParcial < p) {
            i = i + 1;
            TotalParcial = TotalParcial + vetorDeProbabilidades[i];
        }
        return i;
    };
    Algoritmos.escolherIndiceCidadeAleatoria = function (vetorDeCidades) {
        var arrayDeAptidoes = new Array();
        vetorDeCidades.forEach(function (element) {
            arrayDeAptidoes.push(1 / vetorDeCidades.length);
        });
        var indexpop = this.Roleta(arrayDeAptidoes, 1);
        return indexpop;
    };
    Algoritmos.iniciarNaoMarcados = function (vetorDeNos) {
        var naoMarcados = new Map();
        vetorDeNos.forEach(function (no) {
            naoMarcados[no.getNomeDeCidade()] = true;
        });
        return naoMarcados;
    };
    Algoritmos.prototype.vazioMap = function (vetorDePercorridos) {
        return vetorDePercorridos.size == 0;
    };
    Algoritmos.Construcao_do_ciclo_hamiltoniano_para_a_formiga = function (grafo, quantidadeDeFeromonioQueDeveSerDepositado) {
        var vetorDeCidades = grafo.getVetorDeNos();
        var numeroDeNaoMarcados = vetorDeCidades.length;
        var marcados = new Map();
        var LarguraDeCiclo = 0.0;
        var formiga = FormigaFactory_1.FormigaFactory.buildFormiga(quantidadeDeFeromonioQueDeveSerDepositado);
        if (!formiga)
            return;
        var indiceDeCidadeInicial = this.escolherIndiceCidadeAleatoria(vetorDeCidades);
        var cidadeInicial = vetorDeCidades[indiceDeCidadeInicial];
        formiga.passarPelasCidades(cidadeInicial);
        marcados[cidadeInicial.getNomeDeCidade()] = true;
        var ultimaCidadeAdicionada;
        var cidadeAtual;
        var proximaAresta;
        while (numeroDeNaoMarcados != 1) {
            ultimaCidadeAdicionada = formiga.ultimoNoQuePassou();
            cidadeAtual = ultimaCidadeAdicionada;
            proximaAresta = cidadeAtual.escolherProximaAresta(marcados);
            formiga.passarPelasCidades(proximaAresta.getFim());
            var nomeDeProximaCidade = proximaAresta.getFim().getNomeDeCidade();
            marcados[nomeDeProximaCidade] = true;
            numeroDeNaoMarcados--;
            LarguraDeCiclo += proximaAresta.getDistancia();
            formiga.depositarFeromonio(proximaAresta);
        }
        marcados[cidadeInicial.getNomeDeCidade()] = undefined;
        proximaAresta = cidadeAtual.escolherProximaAresta(marcados);
        formiga.passarPelasCidades(proximaAresta.getFim());
        numeroDeNaoMarcados--;
        LarguraDeCiclo += proximaAresta.getDistancia();
        formiga.depositarFeromonio(proximaAresta);
        formiga.setLarguraCiclo(LarguraDeCiclo);
        return formiga;
    };
    Algoritmos.Construir_solucao_parcial = function (grafo, numeroDeFormigas, quantidadeDeFeromonioQueDeveSerDepositado, taxaDeEvaporacao) {
        if (taxaDeEvaporacao == undefined)
            taxaDeEvaporacao = 0.1;
        var FormigaElitista = new Formiga_1.Formiga();
        FormigaElitista.setLarguraCiclo(Number.MAX_VALUE);
        var solucoesConstruidas = new Array();
        var formigaDaSolucao;
        for (var contadorDeIteracoes = 0; contadorDeIteracoes < numeroDeFormigas; contadorDeIteracoes++) {
            formigaDaSolucao = this.Construcao_do_ciclo_hamiltoniano_para_a_formiga(grafo, quantidadeDeFeromonioQueDeveSerDepositado);
            if (formigaDaSolucao.getLarguraCiclo() < FormigaElitista.getLarguraCiclo())
                FormigaElitista = formigaDaSolucao;
            solucoesConstruidas.push(formigaDaSolucao);
            formigaDaSolucao.exibirCiclo();
        }
        grafo.EvaporarFeromonio(taxaDeEvaporacao);
        console.log("****************************");
        return FormigaElitista;
    };
    return Algoritmos;
}());
exports.Algoritmos = Algoritmos;
