let array = [2,3,4,5,6,7,-3,-5,10,21];

function maiorNumero(arr) {
    let n = 0; 
    for(i in arr) {
        if (arr[i] >= n) {
            n = arr[i];
        }
    }
    console.log(`o maior valor é ${n} de índice ${arr.indexOf(n)}`);
}

function menorNumero(arr) {
    let n = 0;
    for (i in arr) {
        if (arr[i]<= n) {
            n = arr[i];
        }
    }
    console.log(`o menor valor é ${n} de índice ${arr.indexOf(n)}`);
}

