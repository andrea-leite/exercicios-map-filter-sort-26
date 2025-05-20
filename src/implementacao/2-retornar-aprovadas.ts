import { turma } from '../../listaPreConstruida';

function retornarAprovadas(): string[] {
    return turma
        .filter(aluna => {
            const { p1, p2, p3 } = aluna.prova;
            const media = (p1 + p2 + p3) / 3;
            return media >= 7;
        })
        .map(aluna => aluna.nome);
}

console.log(retornarAprovadas());

export default retornarAprovadas;