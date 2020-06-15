/* =============

Operadores de Logicos

&& "E" As duas condiçoes deve ser verdadeiras
    para que a condiçao seja verdadeira

|| "OU" Uma das condições devem ser verdadeira
    para que a condiçao final seja verdadeira.

! "Não" Nega uma condiçao

*/

/*
console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 != 5 || 6 == 6) // true
console.log(5 == 5 || 6 != 6) // true

console.log(!( 5 > 6)) // true
console.log(!( 5 < 6 )) // false
*/
const idade = 18
// verificar se a pessoa é maior ihual a 18 anos
// se sim, deixar entra, se nao, bloquear a entrada
if(!(idade >= 18 ) || idade === 17) {
    console.log( 'Bloqueia a entrada')
} else {
    console.log('Deixa entrar')
}

/* ========================
    Operadores de aritimeticos 

    *   Multiplicaçao
    /   Divisao
    %   Resto da divião
    +   Adiçao
    -   Subitraçao
========================*/

console.log( 2 * 2 ) // 1
console.log( 2 / 2 ) // 1
console.log( 2 % 1.5 ) // 0.5
console.log( 2 + 2 ) // 4
console.log( 2 / 2 ) // 0

//3:01

// dar bonificaçao de 500 reais
// se vendedor possuir 100 ou menos pontos
// mas deve posuir mais de 50 pontos
