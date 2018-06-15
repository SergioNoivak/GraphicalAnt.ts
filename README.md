# GraphicalAnt

## Introdução

Este sistema é uma implementação em  `Typescript` de uma heurística chamada Otimização por Colônia de Formigas.<br>T
Tal implementação possibilita resolver problemas tipo caixeiro viajante e similares. 

## Recursos

A equipe teve como ferramentas as seguintes tecnologias:
* A linguagem de programação `Typescript` com [documentação](https://www.typescriptlang.org);
* o framework para modelagem gráfica `cytoscape` com [site](http://js.cytoscape.org);
* A plataforma `Node.js` para desenvolvimento e testes de unidade [Node.js _x64](https://nodejs.org/en/)


## Execução do projeto

para compilar com typescript deve-se utilizar o comando:

``
  tsc --lib es6 hello.ts
``

para executar com node.js deve-se utilizar:
``
node hello.js
``


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
