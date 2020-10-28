let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada",
  };

  let info_2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas',
    Nota: 'Mc Patinhas',
    Recorrente: 'Sim',
  };

info['recorrente'] = 'Sim';
  console.log(`Bem Vinda, ${info.personagem}; `)
  console.table(info);

  for(key in info){
      console.log(key);
      console.log(info[key] ,'\n');
  }
  
  for(let key in info_2){
    console.log(key);
    console.log(info_2[key], '\n');
}
