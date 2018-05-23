import { Aresta } from './Aresta';
import { No } from './No';


export class Formiga{
    
    private quantidadeDeFeromonioQueDeposita:number;
    private nosPassados:Array<No>;
    private larguraDoCiclo: number;
    private elitista:boolean;

    constructor(quantidadeDeFeromonioQueDeposita?:number){
        if(quantidadeDeFeromonioQueDeposita)
            this.quantidadeDeFeromonioQueDeposita =quantidadeDeFeromonioQueDeposita;
        
        else
            this.quantidadeDeFeromonioQueDeposita = 1;
        this.larguraDoCiclo=0;
        this.elitista = false;
        this.nosPassados = new Array<No>();
    }

    public depositarFeromonio(aresta:Aresta){
        aresta.receberDepositoDeFeromonio(this.quantidadeDeFeromonioQueDeposita);
    }

    public setLarguraCiclo(larguraDoCiclo:number) {
        this.larguraDoCiclo=larguraDoCiclo;
    }

    public getLarguraCiclo():number {
        return this.larguraDoCiclo;
    }

    public passarPelasCidades(primeiroNo:No,...listaDeNos:No[]):void{
        this.nosPassados.push(primeiroNo);
        listaDeNos.forEach(no => {
            this.nosPassados.push(no);
        });        
    }
    public exibirCiclo(){

        this.nosPassados.forEach(noDoCiclo => {
            console.log(noDoCiclo.getNomeDeCidade());
        });
    }
    public ultimoNoQuePassou():No{

        return this.nosPassados[this.nosPassados.length-1];

    }

}