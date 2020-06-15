/* =============

Operadores de comparaçao

>   Maior
<   Menor
>=  Maior iqual a
<=  Menor igual a
==  Igual a 
=== Igual e do mesmo tipo
!= Diferente de
!== Diferente, inclusive do tipo 

==========*/

console.log(5 > 4) // true; false (boolean)
console.log(5 < 4) // false; 
console.log(5 >= 4) // true; 
console.log(5 <= 4) // true; 

console.log("-------") 


console.log(4 == "4") // true; numero
console.log(4 === "4") // false; numero x string
console.log(4 != "5") // true; diferente numero
console.log(4 !== "5") // true; diferente ate do tipo
console.log(4 !== "4") // true; diferente ate do tipo

console.log("-------") 

// desafio 1
const idade = 17
// verificar se a pessoa é maior ihual a 18 anos
// se sim, deixar entra, se nao, bloquear a entrada
if(idade >= 18 ) {
    console.log( 'Deixar entrar')
} else {
    console.log('Bloquear a entrada')
}

console.log(idade > 18 )

// se a pessoa tiver 17 anos
if (idade === 17){
    console.log('Volte quando tiver 18')
}
// avisar para voltar quando fizer 18 anos

// Desafio 2


