module.exports = class Algoritmos{

    static Roleta(vetorDeProbabilidades, somaAptidoes){
        if(arguments.length!==2) return -1;

        if(!(vetorDeProbabilidades instanceof Array)) return -1;

        if(!(typeof(somaAptidoes) === 'number' )) return -1;
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
}