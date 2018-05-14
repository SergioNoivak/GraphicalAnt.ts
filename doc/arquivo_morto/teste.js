// const No = require('./No.js');
// const Grafo = require('./Grafo.js');


// var no1 = new No("Cascavel");
// var no2 = new No("Corbélia");
// var no3 = new No("Rio Verde");

// no1.adicionarAresta(no2,11);
// no1.adicionarAresta(no3,11);
// no1.adicionarAresta(no1,11);

// var g1 = new Grafo()  ;

// g1.AdicionarNo(no1);
// g1.AdicionarNo(no2);
// g1.AdicionarNo(no3);

// g1.Exibir();
// var a = Aresta();


const Aresta = require('./Aresta.js');
const No = require('./No.js');

var n1 = new No("Rio Verde");
var obj_aresta = Aresta.construtorAresta(12,n1); 


// console.log(obj_teste==null);
//obj_teste.iniciarAresta(); 


const Formiga = require('./Formiga.js');
var obj_teste = Formiga.construtorFormiga(1);

obj_teste.adicionarArestasAoCaminho(obj_aresta,obj_aresta);
console.log(obj_teste);


// console.log(obj_teste == null);
// obj_teste.CalcularLarguraCaminho();