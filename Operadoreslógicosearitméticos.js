/* =============

Operadores de Logicos

&& "E" As duas condiçoes deve ser verdadeiras
    para que a condiçao seja verdadeira

|| "OU" Uma das condições devem ser verdadeira
    para que a condiçao final seja verdadeira.

! "Não" Nega uma condiçao

*/

console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 != 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!( 5 > 6)) // true
console.log(!( 5 < 6 )) // false


//3:01

// dar bonificaçao de 500 reais
// se vendedor possuir 100 ou menos pontos
// mas deve posuir mais de 50 pontos
