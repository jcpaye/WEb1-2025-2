function comparador(numero1, numero2, numero3){
    let mayorValor = numero1;
    if(numero2 < mayorValor){
        mayorValor = numero2;
    }
    if(numero3 > mayorValor){
        mayorValor = numero3;
    }
    return mayorValor;
}
//----------------------------------------------
function serieString(n){
    let natural = 0;
    let cadena = '';
    for(let i = 0; i < n; i++){
        natural += 2;
        cadena += natural + ', '
    }
    return cadena;
}
//--------------------------------------------
function fibonacci(n1){
    let a = 0;
    let b = 1;
    let c = 0;
    let cadenaFibo = '';
    for(let i = 0; i < n1; i++){
        cadenaFibo += c + ', ';
        a = b;
        b = c;
        c = a + b;
    }
    return cadenaFibo;
}
//-------------------------------------------
function numerosPrimos(n2){
   let contadorPrimos = 0; 
    let numeroActual = 2;    
    let resultado = "";      
    
    while (contadorPrimos < n2) {
        let contadorDivisores = 0;
        for (let divisor = 1; divisor <= numeroActual; divisor++) {
            if (numeroActual % divisor === 0) {
                contadorDivisores++;
            }
        }
        
        if (contadorDivisores === 2) {
            if (contadorPrimos > 0) {
                resultado += ", "; 
            }
            resultado += numeroActual;
            contadorPrimos++;
        }
        numeroActual++;  
    }
    return resultado;
}
//---------------------------------------
function factorial(n3){
    if(n3 < 0){
        return undefined;
    }
   if(n3 === 0){
    return 1;
   }
    return n3 * factorial(n3 - 1);
}

let resultado1 = comparador(1.1, 1.2, 1.3);
console.log('Primera Funcion: '+ resultado1);
//******************************************
let cadenaFinal = serieString(5);
console.log('Segunda Funcion: ' + cadenaFinal);
//******************************************
let resultado2 = fibonacci(5);
console.log('Tercera Funcion: ' + resultado2);
//*******************************************
let resultado3 = numerosPrimos(1);
console.log('Cuarta Funcion: ' + resultado3);
//********************************************
let resultado4 = factorial(0);
console.log('Quinta Funcion: ' + resultado4);