"use strict";
exports.__esModule = true;
var ArestaFactory_1 = require("./ArestaFactory");
var NoFactory_1 = require("./NoFactory");
var Algoritmos_1 = require("./Algoritmos");
var Grafo_1 = require("./Grafo");
// A
// B
// C
// D
// E
var A = NoFactory_1.NoFactory.buildNo("A");
var B = NoFactory_1.NoFactory.buildNo("B");
var C = NoFactory_1.NoFactory.buildNo("C");
var D = NoFactory_1.NoFactory.buildNo("D");
var E = NoFactory_1.NoFactory.buildNo("E");
var ab0 = ArestaFactory_1.ArestaFactory.buildAresta(B, 27);
var ba0 = ArestaFactory_1.ArestaFactory.buildAresta(A, 27);
var ac5 = ArestaFactory_1.ArestaFactory.buildAresta(C, 3);
var ca5 = ArestaFactory_1.ArestaFactory.buildAresta(A, 3);
var ad9 = ArestaFactory_1.ArestaFactory.buildAresta(D, 74);
var da9 = ArestaFactory_1.ArestaFactory.buildAresta(A, 74);
var ae4 = ArestaFactory_1.ArestaFactory.buildAresta(E, 7);
var ea4 = ArestaFactory_1.ArestaFactory.buildAresta(A, 7);
A.adicionarNaLista(ab0, ac5, ad9, ae4);
var bc1 = ArestaFactory_1.ArestaFactory.buildAresta(C, 5);
var cb1 = ArestaFactory_1.ArestaFactory.buildAresta(B, 5);
var bd8 = ArestaFactory_1.ArestaFactory.buildAresta(D, 2);
var db8 = ArestaFactory_1.ArestaFactory.buildAresta(B, 2);
var be7 = ArestaFactory_1.ArestaFactory.buildAresta(E, 9);
var eb7 = ArestaFactory_1.ArestaFactory.buildAresta(B, 9);
B.adicionarNaLista(ba0, bc1, bd8, be7);
var ce6 = ArestaFactory_1.ArestaFactory.buildAresta(E, 15);
var ec6 = ArestaFactory_1.ArestaFactory.buildAresta(C, 15);
var cd2 = ArestaFactory_1.ArestaFactory.buildAresta(D, 54);
var dc2 = ArestaFactory_1.ArestaFactory.buildAresta(C, 54);
C.adicionarNaLista(cb1, ca5, ce6, cd2);
var de3 = ArestaFactory_1.ArestaFactory.buildAresta(E, 4);
var ed3 = ArestaFactory_1.ArestaFactory.buildAresta(D, 4);
D.adicionarNaLista(dc2, db8, da9, de3);
E.adicionarNaLista(ea4, eb7, ec6, ed3);
var grafo = new Grafo_1.Grafo();
grafo.adicionarNos(A, B, C, D, E);
var marcados = new Map();
marcados["B"] = true;
Algoritmos_1.Algoritmos.Construcao_do_ciclo_hamiltoniano_para_a_formiga(grafo).exibirCiclo();
