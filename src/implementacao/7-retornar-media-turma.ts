import { turma } from '../../listaPreConstruida';
import { Alunas } from '../../listaPreConstruida';

function retornarMediaTurma(): number {
    const somaDasMedias = turma.reduce((soma, aluna) => {
        const { p1, p2, p3 } = aluna.prova;
        const mediaAluna = (p1 + p2 + p3) / 3;
        return soma + mediaAluna;
    }, 0);
    
    return Number((somaDasMedias / turma.length).toFixed(1));
}

console.log(retornarMediaTurma());

export default retornarMediaTurma;