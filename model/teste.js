




const No = require('./No.js');

 var n1 = new No("Corbelia");
 var n2 = new No("Cascavel",[n1]);
 var n3 = new No("Rio Verde",[n2,n1]);
 var n4 = new No("Distrito federal");
 n1.adicionarNoAdj(n2,n3);



 console.log(n1);
