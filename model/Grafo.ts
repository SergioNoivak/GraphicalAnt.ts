import { Aresta } from './Aresta';
import { No } from './No';


export class Grafo{
    private vetorDeNos: Array<No>;
    constructor(){
        this.vetorDeNos = new Array<No>();
    }

    
    public getVetorDeNos():Array<No>{
        return this.vetorDeNos;
    }

     adicionarNos(primeiroNo:No, ...restanteDosNos:Array<No>):void{
        this.vetorDeNos.push(primeiroNo);
        
        if(restanteDosNos)
        restanteDosNos.forEach(no => {
            this.vetorDeNos.push(no);
        });

    }
    

    Exibir():void{

        this.vetorDeNos.forEach(no => {
            no.Exibir();
            console.log();
            
        });
    }
    


    
}