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
   let primos = [];
    let numero = 2;
    while (primos.length < n2) {
        let esPrimo = true;
        if (numero < 2) {
            esPrimo = false;
        } else if (numero === 2) {
            esPrimo = true;
        } else if (numero % 2 === 0) {
            esPrimo = false;
        } else {
            for (let i = 3; i <= Math.sqrt(numero); i += 2) {
                if (numero % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }
        if (esPrimo) {
            primos.push(numero);
        }
        numero++;
    }
    return primos.join(", ");
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
let resultado3 = numerosPrimos(7);
console.log('Cuarta Funcion: ' + resultado3);
//********************************************
let resultado4 = factorial(0);
console.log('Quinta Funcion: ' + resultado4);