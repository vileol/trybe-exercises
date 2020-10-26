/* Exercício 5 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for(i in numbers){
    if(numbers[i] >= maior){
        maior = numbers[i];
        console.log(`${numbers[i]} é maior que ${maior}`);
    }
    else {
        console.log('Não é maior');
    }
}
console.log(` O maior número no array é o ${maior}`);