import { turma } from '../../listaPreConstruida';

type AlunaResultado = {
    nome: string;
    media: number;
    aprovada: boolean;
};

function retornarObjetos(): AlunaResultado[] {
    return turma.map(aluna => {
        const { p1, p2, p3 } = aluna.prova;
        const media = Number(((p1 + p2 + p3) / 3).toFixed(1));
        const aprovada = media >= 7;
        
        return {
            nome: aluna.nome,
            media,
            aprovada
        };
    });
}

console.log(retornarObjetos());

export default retornarObjetos;