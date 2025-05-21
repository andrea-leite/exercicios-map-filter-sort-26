import { turma } from '../../listaPreConstruida';

function retornarMenorMedia(): string {
    return turma
        .map(aluna => ({
            nome: aluna.nome,
            media: Number((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3)
        }))
        .sort((a, b) => a.media - b.media)[0].nome;
}

console.log(retornarMenorMedia());

export default retornarMenorMedia;