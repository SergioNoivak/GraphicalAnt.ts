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
    public getFim():No{
        return this.noFim;

    }

    public receberDepositoDeFeromonio(depositoDeFeromonio:number){
        this.feromonioAtual+=depositoDeFeromonio;
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
        //process.stdout.write("("+this.noFim.getNomeDeCidade()+",");
        //process.stdout.write( this.distancia+")");        
    }

    public evaporarFeromonio(percentualDeEvaporacao:number){

        this.feromonioAtual*=percentualDeEvaporacao;
    }
    public exibirTipoEstruturaDeDados(){
        process.stdout.write("("+this.noFim.getNomeDeCidade()+",");
        process.stdout.write( this.distancia+",");        
        process.stdout.write( this.feromonioAtual+")");        
    }
}