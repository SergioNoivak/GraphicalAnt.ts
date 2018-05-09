const No = require('./No.js');

module.exports = class Aresta{

    constructor(distancia, noFim){
        this.feromonioAtual = 1;
        this.distancia=distancia;
        this.noFim = noFim;
        //Internos
    }

    static construtorAresta(distancia, noFim){
        if(arguments.length===0||distancia<=0){
            return null;
        }
        if(typeof(distancia)!== "number" || !(noFim instanceof No))
            return null;    
        
        return new Aresta();
    }



    iniciarAresta(){
       if(this!==null)
        this.feromonioAtual=1;
    }
    inversoDaDistancia(){
        return (this.distancia<=0)? (999999999999) : (1/this.distancia);
    }

    calcularAptidao(){

        return this.feromonioAtual*this.inversoDaDistancia();
    }
}