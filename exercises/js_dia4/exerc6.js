function sumOfNumber(n){
    let count = 0;
    for (let i = 0; i<=n; i+=1){
        let list = [];
        if (n-i != 0) {
            count+=n-i;
        }
    }
    console.log(count);
}

sumOfNumber(3);

    