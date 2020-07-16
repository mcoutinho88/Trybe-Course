let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Exercicio 1: Bem vinda, " + info.personagem);

info.recorrente = 'Sim';
//info = { ...info, recorrente: 'Sim' }  // outra forma de fazer

console.log("Exercicio 2:");
console.log(info);


console.log("\nExercicio 3: \n");

for (let i in info) {
  console.log(i);
}

console.log("\nExercicio 4: \n");

for (let i in info) {
  console.log(info[i]);
}


console.log("\nExercicio 5: \n");

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'Sim'
};

console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.nota);
console.log("Ambos recorrentes");
