let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
maior = 0;
let listaImpar = []

for(i in numbers){
    if(numbers[i]%2 != 0 ){
        console.log(`${numbers[i]} é impar`);
        listaImpar.push(numbers[i]);
    }
    else {
        console.log(`${numbers[i]} é par`);
    }
}
console.log(listaImpar);
