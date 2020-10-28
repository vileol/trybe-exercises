array =['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairoamra', 'Joana'];

function maiorString(list) {
    let l = 0;
    let indice = 0;
    for (str in list) {
        if(list[str].split("").length>=l) {
            l = list[str].split("").length;
            indice = list[str];
        }
    }
    console.log(indice)
}

maiorString(array);
