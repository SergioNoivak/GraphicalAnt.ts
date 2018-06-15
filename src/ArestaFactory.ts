import { Aresta } from './Aresta';
import { No } from './No';


 export class ArestaFactory{

    public static buildAresta(noFim:No, distancia:number){
                
            if(!(noFim instanceof No))
                return null;
            if(distancia<=0)
                return null;
        return new Aresta(noFim,distancia);
    }

}