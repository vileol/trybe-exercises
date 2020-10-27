let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let n=0;
let maior = 0;

/* Exercício 1 */
for (i in numbers) {
    console.log(numbers[i]);
}

/* Exercício 2 */
for(i in numbers) {
    n+=numbers[i];
}
console.log(n);

/* Exercício 3 */
let media = n/numbers.length;
console.log(`A média é de ${media}`);

/* Exercício 4 */

if (media>20) {
    console.log('Este número é maior que 20');
}
else {
    console.log('Esse número é menor que 20')
} 

