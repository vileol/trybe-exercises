
let arr = [1,2,1,2,4,5,6,6,6,6,6,1,4,2,4];

function numberFrequence(list) {
    let countlist = {};
    let n = 0;
    let key = 0;
    for (let i = 0; i < list.length; i += 1) {
        let num =list[i];
        countlist[num]= countlist[num]? countlist[num]+1 : 1;
    } 
    for(j in countlist){
        if (countlist[j] >= n) {
            n = countlist[j];
            key=j   
        }
    }
    console.log(`A maior frequência é ${n} do número ${key}`);
}


numberFrequence(arr);






//  Aqui na primeira vez que o número aparece ele não possui valor e a pergunta se existe um valor da
// chave num retorna falso, logo se atribui 1.Na próxima vez que aparecer, ele retorna um inteiro e 
//logo verdadeiro o que causa a adição de +1 