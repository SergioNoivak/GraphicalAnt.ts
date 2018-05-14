import { Aresta } from './Aresta';
import { No } from './No';
import { ArestaFactory } from './ArestaFactory';
import { NoFactory } from './NoFactory';
import { Algoritmos } from './Algoritmos';

let n1 = NoFactory.buildNo("Rio Verde");
let n2 = NoFactory.buildNo("Cascavel");
let n3 = NoFactory.buildNo("Casanova");
let n4 = NoFactory.buildNo("COBELIA");

let a1 = ArestaFactory.buildAresta(n2,11);
let a2 = ArestaFactory.buildAresta(n3,1);

n1.adicionarNaLista(a1,a2);
n1.Exibir();





