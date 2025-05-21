import { turma } from '../../listaPreConstruida';

function retornarMaiorMedia(): string {
    return turma
        .map(aluna => ({
            nome: aluna.nome,
            media: Number((aluna.prova.p1 + aluna.prova.p2 + aluna.prova.p3) / 3)
        }))
        .sort((a, b) => b.media - a.media)[0].nome;
}

console.log(retornarMaiorMedia());

export default retornarMaiorMedia;