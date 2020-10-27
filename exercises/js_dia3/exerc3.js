let n = 5;


for( i = 0; i<=n; i+=1){
    let str = "";
    for(j = 0; j<=n-i; j+=1) {
    str += " ";
    }
    for(k = 0;k<=i;k+=1){
        str+="*";
    } 
    console.log(str);
}
