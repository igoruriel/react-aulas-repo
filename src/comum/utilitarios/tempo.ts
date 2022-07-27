export default function converteParaSegundos(tempo: string): number {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':')
    
    const horasParaSeg = Number(horas) * 3600;
    const minutosParaSeg = Number(minutos) * 60;
    const convertido = horasParaSeg + minutosParaSeg + Number(segundos);
    
    return convertido;
}