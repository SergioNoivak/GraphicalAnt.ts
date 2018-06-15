import { Grafo } from './Grafo';
import { No } from './No';
import { Aresta } from './Aresta';
import { Formiga } from './Formiga';
import { FormigaFactory } from './FormigaFactory';


export class Algoritmos{

    static Roleta(vetorDeProbabilidades:Array<number>, somaAptidoes:number){       
            
            var TotalParcial = 0;
            var p = 0.0;
            p = (Math.random() * somaAptidoes*100000) + 0;
            p/=100000;
            var i = -1;
            while(i < vetorDeProbabilidades.length && TotalParcial < p) {
                i = i+1;
                TotalParcial = TotalParcial + vetorDeProbabilidades[i];
            }
            return i;
        }

        public static escolherIndiceCidadeAleatoria(vetorDeCidades:Array<No>){
            
            var arrayDeAptidoes = new Array<number>();
            vetorDeCidades.forEach(element => {
                arrayDeAptidoes.push(1/vetorDeCidades.length);
            });
            var indexpop = this.Roleta(arrayDeAptidoes,1);
            return indexpop;
        }

        public  static iniciarNaoMarcados(vetorDeNos:Array<No>):Map<string,boolean>{
            
            var naoMarcados = new Map<string,boolean>();
            vetorDeNos.forEach(no => {
                naoMarcados[no.getNomeDeCidade()] = true;
            });
            return naoMarcados;
        }

        private vazioMap(vetorDePercorridos:Map<string,boolean>){
               return vetorDePercorridos.size == 0;
        }       
        public static Construcao_do_ciclo_hamiltoniano_para_a_formiga(grafo:Grafo,quantidadeDeFeromonioQueDeveSerDepositado?:number):Formiga{
            
            var vetorDeCidades = grafo.getVetorDeNos();
            var numeroDeNaoMarcados = vetorDeCidades.length;
            var marcados = new Map<string,boolean>();        
            var LarguraDeCiclo = 0.0;
            var formiga = FormigaFactory.buildFormiga(quantidadeDeFeromonioQueDeveSerDepositado);
            if(!formiga)
                return;

            var indiceDeCidadeInicial =this.escolherIndiceCidadeAleatoria(vetorDeCidades);
            var cidadeInicial =vetorDeCidades[indiceDeCidadeInicial];

            formiga.passarPelasCidades(cidadeInicial);
            marcados[cidadeInicial.getNomeDeCidade()]=true;

            var ultimaCidadeAdicionada;
            var cidadeAtual;
            var proximaAresta;
             while(numeroDeNaoMarcados!=1){
                    ultimaCidadeAdicionada =formiga.ultimoNoQuePassou();
                    cidadeAtual = ultimaCidadeAdicionada; 
                    proximaAresta = cidadeAtual.escolherProximaAresta(marcados);
                    formiga.passarPelasCidades(proximaAresta.getFim());
                    var nomeDeProximaCidade=proximaAresta.getFim().getNomeDeCidade();
                    marcados[nomeDeProximaCidade]=true;
                    numeroDeNaoMarcados--;
                    LarguraDeCiclo+=proximaAresta.getDistancia();
                    formiga.depositarFeromonio(proximaAresta);                    
             }
             marcados[cidadeInicial.getNomeDeCidade()] = undefined;
             proximaAresta = cidadeAtual.escolherProximaAresta(marcados);
             formiga.passarPelasCidades(proximaAresta.getFim());
             numeroDeNaoMarcados--;
             LarguraDeCiclo+=proximaAresta.getDistancia();
             formiga.depositarFeromonio(proximaAresta);
             formiga.setLarguraCiclo(LarguraDeCiclo);
        return formiga;
    }

    public static Construir_solucao_parcial(grafo:Grafo,numeroDeFormigas?:number,quantidadeDeFeromonioQueDeveSerDepositado?:number,taxaDeEvaporacao?:number):Formiga{
            if(taxaDeEvaporacao==undefined)
            taxaDeEvaporacao = 0.1;    

            var FormigaElitista = new Formiga();
            FormigaElitista.setLarguraCiclo(Number.MAX_VALUE);
            var solucoesConstruidas = new Array<Formiga>();


            var formigaDaSolucao:Formiga;
            for(var contadorDeIteracoes = 0;contadorDeIteracoes<numeroDeFormigas;contadorDeIteracoes++){
            formigaDaSolucao = this.Construcao_do_ciclo_hamiltoniano_para_a_formiga(grafo,quantidadeDeFeromonioQueDeveSerDepositado);
            if(formigaDaSolucao.getLarguraCiclo()<FormigaElitista.getLarguraCiclo())
                FormigaElitista = formigaDaSolucao;
            solucoesConstruidas.push(formigaDaSolucao);
            formigaDaSolucao.exibirCiclo();
            }

            grafo.EvaporarFeromonio(taxaDeEvaporacao);
            console.log("****************************");
           return FormigaElitista;
    }
}