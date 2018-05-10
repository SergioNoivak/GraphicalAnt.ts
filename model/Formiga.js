

const Aresta = require('./Aresta.js');

module.exports = class Formiga {
    
    static construtorFormiga(quantidadeDeFeromonioQueDeposita) {
        if (typeof (quantidadeDeFeromonioQueDeposita) !== "number")
            return null;
    
        return new Formiga(quantidadeDeFeromonioQueDeposita);        
    }

    constructor(quantidadeDeFeromonioQueDeposita) {
        this.arestasPassadas = [];
        this.larguraDoCaminho = 0;
        this.quantidadeDeFeromonioQueDeposita = quantidadeDeFeromonioQueDeposita;
        this.elitista = false;
    }

    CalcularLarguraCaminho() {
        return this.larguraDoCaminho;
    }
    Validar() {
        if (this.arestasPassadas == 0)
            return false;
        if (this.larguraDoCaminho == 0)
            return false;
        if (this.quantidadeDeFeromonioQueDeposita !== quantidadeDeFeromonioQueDeposita)
            return false;
        if (typeof (elitista) !== "boolean")
            return false;
        
    return true;
    }
    
    adicionarArestaAoCaminho(aresta) {        
        if (arguments.length > 1 || arguments.length == 0)
            return;
        if (!(arguments[0] instanceof Aresta))
            return;

        this.arestasPassadas.push(aresta);
        this.larguraDoCaminho++;
    }

    adicionarArestasAoCaminho(...arestas) {
        if (arguments.length < 1)
            return;

            arestas.forEach((elemento,indice) => {
            if (elemento instanceof Aresta)
                this.adicionarArestaAoCaminho(elemento);
        });
    }

    getLarguraCaminho() {
        return larguraDoCaminho;
    }
}

