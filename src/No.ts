import { Aresta } from './Aresta';
import { ArestaFactory } from './ArestaFactory';
import { Algoritmos } from './Algoritmos';



export class No{
    private nomeDeCidade:string;
    private listaDeAdjacencia:Array<Aresta>;

    constructor( nomeDeCidade?:string, listaDeAdjacencia?:Array<Aresta>){                 
         this.nomeDeCidade =  nomeDeCidade? nomeDeCidade:"";
         this.listaDeAdjacencia= listaDeAdjacencia? listaDeAdjacencia : ( new Array<Aresta>());
    }


    public getListaDeVizinhos():Array<Aresta>{
        return this.listaDeAdjacencia;
    }


    public Exibir():void{

        //process.stdout.write(this.nomeDeCidade+"|");

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

    public escolherProximaAresta(marcado:Map<string,boolean>):Aresta{
        
            var vetorDeArestasVizinhasNaoMarcadas  = new Array<Aresta>();
            var vetorProbabilidades = new Array<number>();
            var somaAptidoes= 0.0;
            
            this.listaDeAdjacencia.forEach(aresta => {
                if(!marcado[aresta.getFim().getNomeDeCidade()]){
                    vetorDeArestasVizinhasNaoMarcadas.push(aresta);
                    somaAptidoes+=aresta.getAptidao();
                    vetorProbabilidades.push(aresta.getAptidao());

                }
            });



            vetorProbabilidades = vetorProbabilidades.map(x=>x/somaAptidoes);
            somaAptidoes = vetorProbabilidades.reduce((acumulador,elemento)=> acumulador+=elemento);
    
            var indiceEscolhido = Algoritmos.Roleta(vetorProbabilidades,somaAptidoes);
            return vetorDeArestasVizinhasNaoMarcadas[indiceEscolhido];
            

    }

}