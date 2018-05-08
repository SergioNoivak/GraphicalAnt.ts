


const No = require('./No.js');
const Grafo = require('./Grafo.js');


var no1 = new No("Cascavel");
no1.jdsakjdhaslkdhasljda("fdssfdsfdsafdsa");
var no2 = new No("Corbélia");
var no3 = new No("Rio Verde");

no1.adicionarAresta(no2,11);
no1.adicionarAresta(no3,11);
no1.adicionarAresta(no1,11);

var g1 = new Grafo()  ;

g1.AdicionarNo(no1);
g1.AdicionarNo(no2);
g1.AdicionarNo(no3);

g1.Exibir();