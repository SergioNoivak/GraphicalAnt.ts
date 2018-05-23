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
            //console.log("Resultado do sorteio:     ",p);                   // APAGAR

            while(i < vetorDeProbabilidades.length && TotalParcial < p) {
                i = i+1;
                //console.log("Total Parcial Ant:  ", TotalParcial);               //APAGAR
                TotalParcial = TotalParcial + vetorDeProbabilidades[i];
                //console.log("Total Parcial depois da mudança:   ", TotalParcial);     // APAGAR
            }
            //console.log("**Indice i após o fim do laço:    "+i);        // APAGAR
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
        public static Construcao_do_ciclo_hamiltoniano_para_a_formiga(grafo:Grafo){
            var vetorDeCidades = grafo.getVetorDeNos();
            var numeroDeNaoMarcados = vetorDeCidades.length;
            var marcados = new Map<string,boolean>();        
            var LarguraDeCaminho = 0.0;
            var formiga = FormigaFactory.buildFormiga(1);
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
                    LarguraDeCaminho+=proximaAresta.getDistancia();
             }
             
             marcados[cidadeInicial.getNomeDeCidade()] = undefined;
             proximaAresta = cidadeAtual.escolherProximaAresta(marcados);
             formiga.passarPelasCidades(proximaAresta.getFim());
             numeroDeNaoMarcados--;
             LarguraDeCaminho+=proximaAresta.getDistancia();
             
             formiga.exibirCiclo();
             
        }


}