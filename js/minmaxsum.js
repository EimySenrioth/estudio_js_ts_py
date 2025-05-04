const arr = [1, 2, 3, 4, 5];

function minMaxSum(arr) {
    //aqui puse dos variables para ordenar de menor a mayor
    //a - b es para compara los elementos 
    //si a<b es negativo se coloca antes que b y si es positivo lo contrario
    //si es o no cambia
    arr.sort((a, b) => a - b); // el operdor - defino como se debe comparar
    let minSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length - 1; i++) { 
        //comienzo un bucle en un let, pongi la variable 9 es o
        // esta varible se compara < del arreglo para excluir un elemnto, usamo el lenght para el tamaño
        //y se incrementa en cada iteracion
        minSum += arr[i];// se suma el elemento actual para excluir el mas grande
        maxSum += arr[i + 1]; // aqui sume el siguiente elemento excluir el menor para comenzar con el segundo elemento
        //
    }

    console.log(minSum, maxSum);
}


minMaxSum(arr);