let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 5;

let posicaoPecaLinha = 5;
let posicaoPecaColuna = 3;

let tamanhoXadrez = 8;

let ataqueConfirmado = false;

if(posicaoPecaColuna === posicaoRainhaColuna || posicaoPecaLinha === posicaoRainhaLinha) {
  ataqueConfirmado = true;
}

if(!ataqueConfirmado) {
  let linhaDiagEsqRainha = posicaoRainhaLinha;
  let colunaDiagEsqRainha = posicaoRainhaColuna;

  let linhaDiagDirRainha = posicaoRainhaLinha;
  let colunaDiagDirRainha = posicaoRainhaColuna;

  for(let index = 1; index < tamanhoXadrez; index += 1) {
    linhaDiagEsqRainha += 1;
    colunaDiagEsqRainha += 1;

    linhaDiagDirRainha -= 1;
    colunaDiagDirRainha += 1;

    if (linhaDiagEsqRainha > tamanhoXadrez && colunaDiagEsqRainha > tamanhoXadrez) {
      linhaDiagEsqRainha = 1;
      colunaDiagEsqRainha = 1;
    }

    if (linhaDiagEsqRainha > tamanhoXadrez) {
      linhaDiagEsqRainha = 1;
      colunaDiagEsqRainha = tamanhoXadrez - colunaDiagEsqRainha; 
    }
    
    if (colunaDiagEsqRainha > tamanhoXadrez) {
      colunaDiagEsqRainha = 1;
      linhaDiagEsqRainha = tamanhoXadrez - linhaDiagEsqRainha; 

    }

    if (linhaDiagDirRainha < 1 && colunaDiagDirRainha > tamanhoXadrez) {
      linhaDiagDirRainha = tamanhoXadrez;
      colunaDiagDirRainha = 1;
    }

    if (linhaDiagDirRainha < 1) {
      linhaDiagDirRainha = tamanhoXadrez;
      colunaDiagDirRainha = colunaDiagDirRainha - tamanhoXadrez;
    }

    if (colunaDiagDirRainha > tamanhoXadrez) {
      colunaDiagDirRainha = 1;
      linhaDiagDirRainha = tamanhoXadrez - linhaDiagDirRainha; 
    }

    // console.log("linhaDiagEsqRainha: " + linhaDiagEsqRainha);
    // console.log("colunaDiagEsqRainha: " + colunaDiagEsqRainha);
    // console.log("linhaDiagDirRainha: " + linhaDiagDirRainha);
    // console.log("colunaDiagDirRainha: " + colunaDiagDirRainha);

    if((posicaoPecaLinha === linhaDiagEsqRainha && posicaoPecaColuna === colunaDiagEsqRainha) || 
      (posicaoPecaLinha === linhaDiagDirRainha && posicaoPecaColuna === colunaDiagDirRainha)
    ) {
      ataqueConfirmado = true;
      break;
    }
  }
}

console.log(ataqueConfirmado)