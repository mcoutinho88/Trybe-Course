let costPrice = 9;

let sellPrice = 16;

if (costPrice != 0 | sellPrice != 0) {
  let profit = (sellPrice - costPrice) * 1000 * 0.2;
  console.log(profit);
} else {
  console.log("Erro, valores incorretos");
}
