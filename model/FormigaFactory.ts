import { Formiga } from './Formiga';


export class FormigaFactory{

public static buildFormiga(quantidadeDeFeromonioQueDeposita?:number){

    return new Formiga(quantidadeDeFeromonioQueDeposita);
}



}