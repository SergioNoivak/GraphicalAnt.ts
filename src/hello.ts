import { Aresta } from './Aresta';
import { No } from './No';
import { ArestaFactory } from './ArestaFactory';
import { NoFactory } from './NoFactory';
import { Algoritmos } from './Algoritmos';
import { Grafo } from './Grafo';
import { AlgoritmosDeColoniaDeFormigas } from './AlgoritmosDeColoniaDeFormigas';

// A
// B
// C
// D
// E


let A = NoFactory.buildNo("A");
let B = NoFactory.buildNo("B");
let C = NoFactory.buildNo("C");
let D = NoFactory.buildNo("D");
let E = NoFactory.buildNo("E");


let ab0 = ArestaFactory.buildAresta(B,27);
let ba0 = ArestaFactory.buildAresta(A,27);
let ac5 = ArestaFactory.buildAresta(C,3);
let ca5 = ArestaFactory.buildAresta(A,3);
let ad9 = ArestaFactory.buildAresta(D,74);
let da9 = ArestaFactory.buildAresta(A,74);
let ae4 = ArestaFactory.buildAresta(E,7);
let ea4 = ArestaFactory.buildAresta(A,7);
A.adicionarNaLista(ab0,ac5,ad9,ae4);


let bc1 = ArestaFactory.buildAresta(C,5);
let cb1 = ArestaFactory.buildAresta(B,5);
let bd8 = ArestaFactory.buildAresta(D,2);
let db8 = ArestaFactory.buildAresta(B,2);
let be7 = ArestaFactory.buildAresta(E,9);
let eb7 = ArestaFactory.buildAresta(B,9);
B.adicionarNaLista(ba0,bc1,bd8,be7);

let ce6 = ArestaFactory.buildAresta(E,15);
let ec6 = ArestaFactory.buildAresta(C,15);
let cd2 = ArestaFactory.buildAresta(D,54);
let dc2 = ArestaFactory.buildAresta(C,54);
C.adicionarNaLista(cb1,ca5,ce6,cd2);

let de3 = ArestaFactory.buildAresta(E,4);
let ed3 = ArestaFactory.buildAresta(D,4);
D.adicionarNaLista(dc2,db8,da9,de3);

E.adicionarNaLista(ea4,eb7,ec6,ed3);

var grafo = new Grafo();
grafo.adicionarNos(A,B,C,D,E);


AlgoritmosDeColoniaDeFormigas.AntSystem(grafo,100,100,1,0.5);