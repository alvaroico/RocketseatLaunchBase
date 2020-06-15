// criar um programa que calcula a media
// das notas entre os alunos e envia
// mensagem de calculo da media.

// OBJETO
/*
const aluno01 = {
    nome: "Mayk",
    nota: 9.8
}

const aluno02 = {
    nome: "Diegok",
    nota: 10
}

const aluno03 = {
    nome: "Fulano",
    nota: 2
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

console.log(media)
*/
// ARRAY OU VETORES
const alunos = [
    { 
        nome: "Mayk",
        nota: 9.8
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


const nomesDeAlunos = ["Mayk", "Diego", "Fulano"]

console.log(nomesDeAlunos)

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

console.log(media)
console.log(alunos)
