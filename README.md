# GraphicalAnt

## Datas importantes

<table id="t01">
  <tr>
    <th>Tarefa</th>
    <th>Data de Entrega para o professor</th> 
    <th>Data Prevista de Revisão</th>
    <th>Horário Previsto de Revisão</th>
    <th>Integrante(s) envolvido(s)</th>
  </tr>
  <tr>
    <td>Resumo do Artigo em LATEX para o professor</td>
    <td>24/04/2018</td> 
    <td>23/04/2018</td>
    <td>17:00</td>
    <td><b>todos</b></td>
</tr>


<tr>
    <td>Apresentar o Diagrama de classes para o resto do grupo</td>
    <td>27/04/2018</td>
    <td>27/04/2018</td>
    <td>durante todo o dia</td>
    <td>Sergio</td>
</tr>

<tr>
    <td>Entrega das classes</td>
    <td>05/05/2018</td>
    <td>05/05/2018</td>
    <td>durante todo o dia</td>
    <td><b>todos</b></td>
</tr>

</table>


## Introdução

Este sistema tem como objetivo propor a implementação em `javascript` de uma heurística chamada Otimização por Colônia de Formigas.<br>
Tal implementação possibilitará resolver problemas tipo caixeiro viajante e similares. 

## Recursos

A equipe terá como ferramentas as seguintes tecnologias:
* A linguagem de programação `javascript` com [documentação](https://developer.mozilla.org/bm/docs/Web/JavaScript/Reference);
* o framework para modelagem gráfica `d3` com [site](https://d3js.org) de documentação e [repositório](https://github.com/d3/d3) ;
* A plataforma `Node.js` para desenvolvimento e testes de unidade [Node.js _x64](https://nodejs.org/en/)
## Arquitetura do projeto

Proponho o modelo `M.V.C.` para aquitetura.
```
GraphicalAnt/
├── model/
    └── //TODO todas as classes

|── view/
    ├──//TODO todas as telas

|── controller/
    ├── //TODO todos os controladores
    
|── doc/
    ├── material_de_pesquisa
        ├── Artigo.pdf
        ├── Colonia de Formigas - Ant Colony System.pdf
        ├── Colonia de Formigas - Chaves e Lorena.pdf
        ├── Colonia de Formigas - Gomes.pdf
        ├── Colonia de Formigas - Vittori.pdf
```


## Integrantes da equipe:

* Gabriel Rezende
* Pedro Henrique
* Sergio Souza Novak
* Venâncio Edwirge

## AntSystem 

O procedimento Construção-do-ciclo-hamiltoniano-para-a-formiga retorna um ciclo hamiltoniano que é uma possível solução. Para o algoritmo o grafo deve ser completo. 

```
PROCESS Construção-do-ciclo-hamiltoniano-para-a-formiga(G)
    vetorCidades = G[V]
    rotaFormiga.push(vetorCidades.RandomPop())
    WHILE vetorCidades não vazio
        cidadeAtual =rotaFormiga.back()
        vetorProbabilidades = cidadeAtual.RefreshProb(vetorCidades)
        cidadeAVisitar = Roleta(vetorProbabilidades)
        Depositar-feromonio(cidadeAtual,cidadeAVisitar)
        RotaFormiga.push(vetorCidades.pop(cidadeAVisitar)
        
    
    cidadeAtual =rotaFormiga.back()
    vetorProbabilidades = cidadeAtual.RefreshProb(vetorCidades)
    cidadeAVisitar = Roleta(vetorProbabilidades)
    Depositar-feromonio(cidadeAtual,cidadeAVisitar)
    RotaFormiga.push(vetorCidades.pop(cidadeAVisitar)
    RETURN rotaFormiga
```

Seja vetorDeSolucoes o vetor que irá armazenar todas as soluções de uma iteração, logo o processo Construir-solução-parcial(G) é descrito como:

```
PROCESS Construir-solução-parcial(G)
  formigaElitista=IDEAL_DE_PIOR_SOLUCAO
    FOR EACH formiga IN numero de formigas
         solucaoCorrente = (Construção-do-ciclo-hamiltoniano-para-a-formiga(G))
         IF solucaoCorrente.larguraDeCaminho<formigaElitista.larguraDeCaminho
              formigaElitista=solucaoCorrente
          vetorDeSolucoes.push(solucaoCorrente)
          Atualizar-feromonio-caminho(solucaoCorrente)    
    Evaporar-Feromonio(G,taxaDeEvaporacao)
  RETURN formigaElitista
```

O processo do Ant System fica então 
```
PROCESS Ant-System(G)
   formigaElitista
   WHILE !condiçãoDeParada
      formigaElitista= Construir-solução-parcial(G)
   return formigaElitista.rota
```
