

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


    adicionarAresta(noFim,peso){
    
      this.listaDeAdjacencia.push([noFim,peso]);
    
    }

    
   getNome() {
    return nomeDeCidade;  
  }
  
  
  Exibir(){

      process.stdout.write(this.nomeDeCidade+"|")
      
      this.listaDeAdjacencia.forEach(elemento => {
        
        process.stdout.write("("+elemento[0].nomeDeCidade+" , ");
        process.stdout.write(elemento[1]+") ");        
        
      });
      
  }
  


};