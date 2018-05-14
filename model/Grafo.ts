import { Aresta } from './Aresta';
import { No } from './No';


export class Grafo{
    private vetorDeNos: Array<No>;
    constructor(){
    }

     adicionarNos(primeiroNo:No, ...restanteDosNos:Array<No>):void{
        this.vetorDeNos.push(primeiroNo);
        
        restanteDosNos.forEach(no => {
            this.vetorDeNos.push(no);
        });

    }



    
}