import { No } from './No';

export class Aresta{
    private feromonioAtual : number;
    private distancia : number;
    private noFim: No;

    constructor(noFim:No, distancia:number){
        this.feromonioAtual = 1;
        this.noFim = noFim;
        this.distancia = distancia;
    }
    public getDistancia():number{
        return this.distancia;
    }
    inversoDaDistancia():number{
        return 1/this.distancia;
    }
    getAptidao():number{
        return this.inversoDaDistancia()*this.feromonioAtual;
    }

    public exibirNaListaAdjacencia(){
        console.log("(%s,",this.noFim.getNomeDeCidade());
        console.log("%d)", this.distancia);        
    
    }

}