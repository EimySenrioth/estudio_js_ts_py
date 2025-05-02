function plusMinus(arr) {
    // Write your code here
    "estableci las contantes para los contadores de positivos, negativos y ceros"
    // "definí la longitud del array"
    let n = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    // "recorri el array y conté los positivos, negativos y ceros"
    "ine un bucle for para recorrer el array"
    // "si el número es positivo, incremento el contador de positivos"
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

// Llamada a la función
plusMinus([1, -2, 0, 4, -5]);

