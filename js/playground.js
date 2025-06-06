'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let n = arr.length; // Corregido el error tipográfico
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

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
