
const No = require('./No.js');

module.exports = class Grafo{

    constructor(){
    
                this.numeroVertices =0;
                this.vetorDeVertices = [];
                
    }

    AdicionarNo(no){

        if(arguments.length>1 || arguments.length==0)
            return;
        if(!(arguments[0] instanceof No))
            return;
        
        this.vetorDeVertices.push(no);    
        this.numeroVertices++;
    }


    AdicionarNos(...nos){

        arguments.forEach((elemento,indice) => {
            this.AdicionarNo(elemento);
        });

    }

    Exibir(){
        
        this.vetorDeVertices.forEach(vertice => {
            vertice.Exibir();
            process.stdout.write("\n");
            
        });
    }

}