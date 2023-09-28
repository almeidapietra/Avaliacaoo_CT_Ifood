const palavras = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";

function contarPalavras(palavras) {
        let contador = 1;
     for (let i = 0; i < palavras.length; i++) {
      const letra = palavras[i];
      if (letra === letra.toUpperCase()) {
        contador++;
      }
    }  
    return contador;
  }
 
  const quantidaDePalavras = contarPalavras(palavras);
  console.log(quantidaDePalavras); 
  