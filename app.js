// Problema #1
// Dado un arreglo de números enteros, escriba un algoritmo que identifique el número más grande en el arreglo 
// y la primera posición de este número dentro del arreglo. 
// Ejemplo: Si se tiene el arreglo {3, 32, 43, 2, 43, 32} el resultado debe ser: 43 en posición 2.
let array = [-2, -32, -43, -2, -43, -32];

function maxNumAndPosition(arr){
    let size = arr.length;
    let numMax = arr[0];
    let position = 0;

    for(let i = 0; i < size; i++){
        if(arr[i] > numMax){
            numMax = arr[i];
            position = i;
        }
    }
    console.log(`El numero mayor del array ${arr} es: ${numMax} en posicion ${position}.`);
}

maxNumAndPosition(array);

// Problema #2
// Dadas 2 arreglos de números ordenados, escriba un algoritmo que los integre en un 3er arreglo también ordenado.
// Ejemplo: Para {1, 2, 6, 8, 9} y {3, 5, 6, 9} el resultado es {1, 2, 3, 5, 6, 6, 8, 9, 9}

let arrayOne = [1, 2, 6, 8, 9];
let arrayTwo = [3, 5, 6, 9];

function orderTwoArrayInOne(arr1, arr2){
    let arrFinal = [...arr1, ...arr2];
    let size = arrFinal.length;
    let aux = 0;
    for(let i = 0; i < size; i++){
        let indMin = i;
        for(let j = i + 1; j < size; j++){
            if(arrFinal[indMin] > arrFinal[j]){
                indMin = j;
            }
        }
        aux = arrFinal[i];
        arrFinal[i] = arrFinal[indMin];
        arrFinal[indMin] = aux;
    }
    console.log(`El resultado es: ${arrFinal}`);
}

orderTwoArrayInOne(arrayOne, arrayTwo);

// Problema #3
// Para 2 arreglos de números ordenados, escriba un algoritmo que identifique los números que aparecen en ambos arreglos. 
// Ejemplo: Para {1, 3, 3, 4, 5, 6, 8, 9, 9} y {2, 2, 3, 5, 7, 9, 9} el resultado es: {3, 5, 9, 9}
let arrayOne = [1, 3, 3, 4, 5, 6, 8, 9, 9];
let arrayTwo = [2, 2, 3, 5, 7, 9, 9];

function sameNumbers(arr1, arr2){
    let sizeArr1 = arr1.length;
    let sizeArr2 = arr2.length;
    let arrFinal = [];

    for(let i = 0; i < sizeArr2; i++){
        for(let j = 0; j < sizeArr1; j++){
            if(arr2[i] === arr1[j]){
                arrFinal.push(arr2[i]);
                break;
                
            }
        }
    }
    console.log(arrFinal);
}

sameNumbers(arrayOne, arrayTwo);

// Problema #4
// Escriba un algoritmo que identifique si con 3 longitudes: a, b y c (siempre enteras) se puede construir un triángulo. 
// Tip: En un triángulo la suma de 2 lados siempre es mayor que el 3º. Las longitudes no pueden ser negativas.

function canBuildATriangle(){
    let longitudeA = 5;
    let longitudeB = 8;
    let longitudeC = 3;
    
    if(((longitudeA + longitudeB) > longitudeC) && ((longitudeA + longitudeC) > longitudeB) && ((longitudeB + longitudeC) > longitudeA)){
        console.log(`${longitudeA}, ${longitudeB}, ${longitudeC} pueden construir un Triangulo`);
    }else{
        console.log(`${longitudeA}, ${longitudeB}, ${longitudeC} NO pueden construir un Triangulo`);
    }
    
}

canBuildATriangle();

// Problema #5
// Escriba un algoritmo que lea los números de un arreglo y determine cuáles son los 2 números más grandes del arreglo. 
// Ejemplo: Para {1, 5, 9, 2, 15, 9, 10, 12} el resultado sería: 15 y 12.

function TwoMaxNumber(){
    let arrFinal = [1, 5, 9, 2, 15, 9, 10, 12];
    let size = arrFinal.length;
    let aux = 0;
    for(let i = 0; i < size; i++){
        let indMin = i;
        for(let j = i + 1; j < size; j++){
            if(arrFinal[indMin] > arrFinal[j]){
                indMin = j;
            }
        }
        aux = arrFinal[i];
        arrFinal[i] = arrFinal[indMin];
        arrFinal[indMin] = aux;
    }
    console.log(`El resultado es: ${arrFinal[size - 1]} y ${arrFinal[size - 2]}`);

}

TwoMaxNumber();