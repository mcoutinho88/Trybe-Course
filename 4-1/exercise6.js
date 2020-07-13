let pecaXadrez = 'Rainha';

switch(pecaXadrez.toLowerCase()) {
  case 'rei':
    console.log("Rei -> pode se movimentar em qualquer direção, mas apenas 1 casa");
    break;
  case 'rainha':
    console.log("Rainha -> pode se movimentar em qualquer direção e quantas casas quiser");
    break;
  case 'bispo':
    console.log("Bispo -> pode se movimentar apenas nas diagonais");
    break;
  case 'cavalo':
    console.log("Cavalo -> pode se movimentar apenas em 'L'");
    break;
  case 'torre':
    console.log("Torre -> pode se movimentar apenas na horizontal e na vertical");
    break;
  case 'peao':
    console.log("Peão -> pode se movimentar apenas uma casa para frente");
    break;
  default:
    console.log("Peça não existente");
    break;
}