// criar um programa que calcule a media
// das notas entre os alunes e envia
// mensage do calculo da media.

const aluno01 = 'Mayk'
const notaAluno01 = 9.8

const aluno02 = 'diego'
const notaAluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

//  se a media for maior que 5, parabenizar a turma

if (media > 5){
    console.log(`A nota foi de ${media}. Parabens`)// Faz alguma coisa
} else {
    console.log( 'A média é menor que 5')  // faz outra coisa
}

//console.log(media> 5 )
