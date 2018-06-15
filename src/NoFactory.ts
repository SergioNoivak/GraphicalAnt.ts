import { No } from './No';
import { Aresta } from './Aresta';



export class NoFactory{

    public static buildNo( nomeDeCidade?:string, listaDeAdjacencia?:Array<Aresta>){
        return new No(nomeDeCidade,listaDeAdjacencia);
    }
}