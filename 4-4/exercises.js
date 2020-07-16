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


console.log("Exercicio 3: \n");

for (let i in info) {
  console.log(i);
}
