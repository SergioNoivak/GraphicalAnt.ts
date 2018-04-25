

module.exports = class No {
  constructor(nomeDeCidade,listaDeAdjacencia) {
    
    if(arguments.length===0){
      this.nomeDeCidade = "";
      this.listaDeAdjacencia = [];
    return;
    }
    
    if(typeof(nomeDeCidade)=== 'number'||typeof(nomeDeCidade)=== 'string'){
      this.nomeDeCidade = nomeDeCidade;
    }

    if(listaDeAdjacencia instanceof Array)
      this.listaDeAdjacencia = listaDeAdjacencia;
    else
      this.listaDeAdjacencia = [];
  
    }


    adicionarNoAdj(...nos){

        nos.forEach((elemento,indice )=> {

          if(elemento instanceof No)
          this.listaDeAdjacencia.push(elemento);
    
        });  
    }
    

   getNome() {
    return nomeDeCidade;  
  }
  getListaAdj(){
    return this.listaDeAdjacencia;
  }
};