/* Exercício 7 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for(i in numbers){
    if(numbers[i] <= menor){
        menor = numbers[i];
        console.log(`${numbers[i]} é menor ou igual a ${menor}`);
    }
    else {
        console.log('Não é menor');
    }
}
console.log(` O menor número no array é o ${menor}`);