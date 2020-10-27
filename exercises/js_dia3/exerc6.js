let list =[]
let n = 11
let count = 0
for(i = 0; i<=n; i+=1){
    if(i%2 != 0 && i%3 != 0){
        list.push(i);
        count += 1;
    }
}
console.log(list);
console.log(count);