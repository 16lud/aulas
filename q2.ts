 function notaParaAprovacao(mediaParcial: number): number {
    const mediaFinal = 60;
    const pesoParcial = 6;
    const pesoFinal = 4;

    return (mediaFinal - (mediaParcial * pesoParcial)) / pesoFinal;
}

console.log("Nota necessária:", notaParaAprovacao(50));
