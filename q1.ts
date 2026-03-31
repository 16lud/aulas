function calcularVolumeCilindro(r: number, h: number): number {
    const volume = Math.PI * (r ** 2) * h;
    return volume;
}

console.log("Volume:", calcularVolumeCilindro(3, 5));
