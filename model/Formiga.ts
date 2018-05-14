import { Aresta } from './Aresta';


export class Formiga{
    
    private quantidadeDeFeromonioQueDeposita:number;
    private arestasPassadas:Array<Aresta>;
    private larguraDoCaminho: number;
    private elitista:boolean;

    constructor(quantidadeDeFeromonioQueDeposita?:number){
        if(quantidadeDeFeromonioQueDeposita)
            this.quantidadeDeFeromonioQueDeposita =quantidadeDeFeromonioQueDeposita;
        
        else
            this.quantidadeDeFeromonioQueDeposita = 1;
        this.larguraDoCaminho=0;
        this.elitista = false;
    }

    public getLarguraCaminho():number {
        return this.larguraDoCaminho;
    }

    public adicionarArestaAoCaminho(primeiraAresta:Aresta,...listaDeArestas:Aresta[]):void{
        this.arestasPassadas.push(primeiraAresta);
        this.larguraDoCaminho+=primeiraAresta.getDistancia();
        listaDeArestas.forEach(aresta => {
            this.arestasPassadas.push(aresta);
            this.larguraDoCaminho+= aresta.getDistancia()>0? aresta.getDistancia():0;
        });        
    }
}