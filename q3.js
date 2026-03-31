function diasDesdeInicioAno(dataString: string): number {
    const data = new Date(dataString);
    const inicio = new Date('2025-01-01');

    const diff = data.getTime() - inicio.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

console.log("Dias:", diasDesdeInicioAno('2025-04-11'));
