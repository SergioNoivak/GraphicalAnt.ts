import { Aresta } from './Aresta';
import { ArestaFactory } from './ArestaFactory';

export class No{
    private nomeDeCidade:string;
    private listaDeAdjacencia:Array<Aresta>;

    constructor( nomeDeCidade?:string, listaDeAdjacencia?:Array<Aresta>){                 
         this.nomeDeCidade =  nomeDeCidade? nomeDeCidade:"";
         this.listaDeAdjacencia= listaDeAdjacencia? listaDeAdjacencia : ( new Array<Aresta>());
    }

    public Exibir():void{

        process.stdout.write(this.nomeDeCidade+"|");

        this.listaDeAdjacencia.forEach(aresta => {
        
          aresta.exibirNaListaAdjacencia();    
        });

    }

    public adicionarNaLista(primeiraAresta:Aresta, ...restoDasArestas:Array<Aresta>):void{

        this.listaDeAdjacencia.push(primeiraAresta);
        
        restoDasArestas.forEach(aresta => {
            this.listaDeAdjacencia.push(aresta);
        });

    }

    public getNomeDeCidade(){

        return this.nomeDeCidade;

    }

}