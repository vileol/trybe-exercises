let n = 11;


for( i = 0; i<=n; i+=2){
    let str = "";
    let blank = n-i/2;
    for(j = 0; j<=blank; j+=1) {
    str += " ";
    }
    for(k = 0;k<=i;k+=1){
        str+="*";
    } 
    console.log(str);
}
