const number23: number[] = [1, 2, 3, 4, 5];

function minMaxSum(arr: number[]): void {
    arr.sort((a, b) => a - b); 
    let minSum = 0;
    let maxSum = 0;

    for (let i = 0; i < arr.length - 1; i++) { 
        minSum += arr[i];
        maxSum += arr[i + 1];
    }

    console.log(minSum, maxSum);
}

minMaxSum(number23);