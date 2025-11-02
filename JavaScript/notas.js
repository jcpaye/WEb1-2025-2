const notas = [
    {
        nombre : "Kelie Shaw",
        Practicos : 60,
        Parcial1: 20,
        Parcial2: 45,
        ProyectoFinal: 40,
        ExamenFinal: 60
    }
    ,{
        nombre: "Gary Brock",
        Practicos : 76,
        Parcial1: 34,
        Parcial2: 44,
        ProyectoFinal: 67,
        ExamenFinal: 27
    }
    ,{
        nombre: "Brittany Krueger",
        Practicos : 88,
        Parcial1: 24,
        Parcial2: 77,
        ProyectoFinal: 71,
        ExamenFinal: 26
    }
    ,{
        nombre: "Denise Hicks",
        Practicos : 38,
        Parcial1: 93,
        Parcial2: 15,
        ProyectoFinal: 34,
        ExamenFinal: 26
    }
   , {
        nombre: "Shannon Schmitt",
        Practicos : 93,
        Parcial1: 54,
        Parcial2: 44,
        ProyectoFinal: 51,
        ExamenFinal: 28
    }
    ,{
        nombre: "Cassandra Evans",
        Practicos : 69,
        Parcial1: 45,
        Parcial2: 69,
        ProyectoFinal: 54,
        ExamenFinal: 24
    }
    ,{
        nombre: "Holy Padilla",
        Practicos : 52,
        Parcial1: 12,
        Parcial2: 100,
        ProyectoFinal: 69,
        ExamenFinal: 76
    }
    ,{
        nombre: "Michiele Davis",
        Practicos : 100,
        Parcial1: 11,
        Parcial2: 34,
        ProyectoFinal: 11,
        ExamenFinal: 5  
    }
    ,{
        nombre: "Raymond Farrell",
        Practicos : 1,
        Parcial1: 27,
        Parcial2: 71,
        ProyectoFinal: 26,
        ExamenFinal: 40
    }
    ,{
        nombre: "Corey Wolf",
        Practicos : 55,
        Parcial1: 42,
        Parcial2: 42,
        ProyectoFinal: 21,
        ExamenFinal: 2
    }
]

function calcularAprobados(notas){
    let Aprobados = " ";
    for(let i=0; i < notas.length; i++){
        let notaFinal= 0;
        notaFinal = (notas[i].Practicos * 0.10) + (notas[i].Parcial1 * 0.10) + (notas[i].Parcial2 * 0.15) + 
        (notas[i].ProyectoFinal * 0.40) + (notas[i].ExamenFinal * 0.25);
        if(notaFinal >= 51.0){
            Aprobados += notas[i].nombre + " (" + notaFinal.toFixed(2) + "), ";
        }
    }
    return Aprobados;
}
let aprobados = calcularAprobados(notas);
console.log( "Aprobados: " + aprobados);
