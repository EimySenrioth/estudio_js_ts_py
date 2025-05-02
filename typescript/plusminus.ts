function plusMinus2(arr: number[]): void {
    //arr: number[] recibe los numeros y el void no retorna nada
    let n = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let num of arr) {
        if (num > 0) {
            positive++;
        } else if (num < 0) {
            negative++;
        } else {
            zero++;
        }
    }

    console.log((positive / n).toFixed(6));
    console.log((negative / n).toFixed(6));
    console.log((zero / n).toFixed(6));
}

const numbers: number[] = [1, 2, -1, -2, 0, 3];
plusMinus2(numbers); 
// Crear un array y llamarlo parecido al de python

"use configuracion en entono node.js, intale npm install -g ts-node typescript y ts-node typescript/plusminus.ts para ejecutar el archivo"
"cree un archivo tsc -- init para crear el archivo tsconfig.json y luego ejecute tsc para compilar el archivo"
// "ts-node typescript/plusminus2.ts" para ejecutar el archivo sin compilarlo

"module: commonjs es pecifica al sistema del modulo que se genera compilado"
//tareget: es 6 especifica la vercion
// stricit: true habilita las opciones de verificacion esticta