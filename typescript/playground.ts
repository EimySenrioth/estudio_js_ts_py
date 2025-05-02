'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function plusMinus(arr: number[]): void {
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

// Crear un array y llamarlo
const numbers2: number[] = [-4, 3, -9, 0, 4, 1];
plusMinus(numbers2); // Cambiado a numbers2

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine()
        .replace(/\s+$/g, '')
        .split(' ')
        .map((arrTemp) => parseInt(arrTemp, 10));

    plusMinus(arr);
}
