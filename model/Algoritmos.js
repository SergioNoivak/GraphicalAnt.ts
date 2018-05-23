"use strict";
exports.__esModule = true;
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
    Algoritmos.Construcao_do_ciclo_hamiltoniano_para_a_formiga = function (grafo) {
        var vetorDeCidades = grafo.getVetorDeNos();
        var numeroDeNaoMarcados = vetorDeCidades.length;
        var marcados = new Map();
        var LarguraDeCiclo = 0.0;
        var formiga = FormigaFactory_1.FormigaFactory.buildFormiga(1);
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
            console.log(" ");
            console.log("Aresta escolhida ANTES:");
            proximaAresta.exibirTipoEstruturaDeDados();
            formiga.depositarFeromonio(proximaAresta);
            console.log(" ");
            console.log("Aresta escolhida DEPOIS:");
            proximaAresta.exibirTipoEstruturaDeDados();
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
    return Algoritmos;
}());
exports.Algoritmos = Algoritmos;
