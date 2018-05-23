import { Formiga } from './Formiga';


export class FormigaFactory{

public static buildFormiga(quantidadeDeFeromonioQueDeposita?:number){

    if(quantidadeDeFeromonioQueDeposita==undefined)
        quantidadeDeFeromonioQueDeposita=1;
    if(quantidadeDeFeromonioQueDeposita<1)
        quantidadeDeFeromonioQueDeposita=1;
    return new Formiga(quantidadeDeFeromonioQueDeposita);
}
}