

// const Aresta = require('./Aresta.js');

module.export = class Formiga {
    
    // static construtorFormiga(quantidadeDeFeromonioQueDeposita) {
    //     // if (typeof (quantidadeDeFeromonioQueDeposita) !== "number")
    //     //     return null;
    
    //     // return new Formiga(quantidadeDeFeromonioQueDeposita);
    
    //     // return this.prototype.Formiga( quantidadeDeFeromonioQueDeposita);
    // }
    constructor(quantidadeDeFeromonioQueDeposit) {
        this.arestasPassadas = [];
        this.larguraDoCaminho = 0;
        this.quantidadeDeFeromonioQueDeposita = quantidadeDeFeromonioQueDeposit;
        this.elitista = false;
    }


    
    // CalcularLarguraCaminho() {
    //     return this.larguraDoCaminho;
    // }
    // ValidarBooleam() {
    //     if (this.arestasPassadas == 0)
    //         return false;
    //     if (this.larguraDoCaminho == 0)
    //         return false;
    //     if (this.quantidadeDeFeromonioQueDeposita !== quantidadeDeFeromonioQueDeposita)
    //         return false;
    //     if (typeof (elitista) !== "boolean")
    //         return false;
        
    // return true;
    // }
    
    // adicionarArestaAoCaminho(aresta) {        
    //     if (arguments.length > 1 || arguments.length == 0)
    //         return;
    //     if (!(arguments[0] instanceof Aresta))
    //         return;

    //     this.arestasPassadas.push(aresta);
    //     this.larguraDoCaminho++;
    // }

    // adicionarArestasAoCaminho() {
    //     if (arguments.length < 1)
    //         return;

    //     arguments.array.forEach(elemento_corrente => {
    //         if (elemento_corrente instanceof Aresta)
    //             this.adicionarArestaAoCaminho(elemento_corrente);
    //     });
    // }
    // getLarguraCaminho() {
    //     return larguraDoCaminho;
    // }

}

