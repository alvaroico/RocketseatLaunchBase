/* criar um programa que calcule a medias
das tumar de alunos e envia
mensagem de calculo da media
*/

const alunosDaTurmaA = [
    { 
        nome: "Mayk",
        nota: 1.8
    },
    { 
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2
    }
]
const alunosDaTurmaB = [
    { 
        nome: "Cleiton",
        nota: 10
    },
    { 
        nome: "Robson",
        nota: 10
    },
    {
        nome: "Siclano",
        nota: 0
    },
    {
        nome: "Novo Aluno",
        nota: 5
    }
]


function calculoMedia(alunos){
    let soma = 0
    for ( let i = 0; i <alunos.length; i++){
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length

    return media
    
    //return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculoMedia(alunosDaTurmaA)
const media2 = calculoMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){
    // se a media for maior que 5, parabenizar a turma
    if (media > 5 ){
        console.log(`A media da ${turma} foi de ${media}. Parabéns`)
    }else {
        console.log(`A média da ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, 'turma A')
enviaMensagem(media2, 'turma B')
