function techList(array,name){
    array.sort();
    let listWithObjects = [];
    objectInLIst = {};
    if (array.length == 0){
      console.log('Vazio!');
    } else {
      for(i in array) {
        listWithObjects.push(objectInLIst = {
            'tech' : array[i],
            'name' : name,
        });
      }
      console.log(listWithObjects);  
    }
  }
let lista = ["React", "Jest", "HTML", "CSS", "JavaScript"]
let nome = "lucas"
let lista2 = []
techList(lista,nome);
techList(lista2,nome);
