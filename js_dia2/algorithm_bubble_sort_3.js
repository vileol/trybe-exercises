let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lista = [];
for (let i =0; i<=numbers.length-1; i+=1) {
  if (i == numbers.length-1) { 
    lista.push(numbers[numbers.length-1]*2);
  }
  else {
    lista.push(numbers[i]*numbers[i+1]);
  }
  console.log('iteração '+i+': ' +lista);
}


