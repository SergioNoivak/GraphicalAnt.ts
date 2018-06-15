import { Grafo } from './Grafo';
import { Formiga } from './Formiga';
import { Algoritmos } from './Algoritmos';

export class AlgoritmosDeColoniaDeFormigas{

    public static AntSystem(grafo:Grafo,numeroDeSolucoes:number,numeroDeFormigas:number,quantidadeDeFeromonioQueDeveSerDepositado:number,taxaDeEvaporacao:number):Formiga{

        
        var FormigaElitista = new Formiga();
        FormigaElitista.setLarguraCiclo(Number.MAX_VALUE);

        for(var i=0;i<numeroDeSolucoes;i++){
            var formigaDaSolucao = Algoritmos.Construir_solucao_parcial(grafo,numeroDeFormigas,quantidadeDeFeromonioQueDeveSerDepositado,taxaDeEvaporacao);
            if(formigaDaSolucao.getLarguraCiclo()<FormigaElitista.getLarguraCiclo())
            FormigaElitista = formigaDaSolucao;
        }


        console.log("FIM&&&&&&&&&&&&&");
        FormigaElitista.exibirCiclo();
        return FormigaElitista;
    }
}

