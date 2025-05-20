import { turma } from '../../listaPreConstruida';

function retornarMedias(): number[] {
    return turma.map(aluna => {
        const { p1, p2, p3 } = aluna.prova;
        const media = Number(((p1 + p2 + p3) / 3).toFixed(1));
        return media;
    });
}

console.log(retornarMedias());

export default retornarMedias;