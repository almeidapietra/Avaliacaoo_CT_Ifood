const array_numeros = [12, 17, 15, 19, 22, 17, 19, 12];
function numerosSolitarios(array) {
    const solitarios = [];
  
    for (let i = 0; i < array.length; i++) {
      let repetido = false;
  
      for (let j = 0; j < array.length; j++) {
        if (i !== j && array[i] === array[j]) {
          repetido = true;
          break;
        }
      }
  
      if (!repetido) {
        solitarios.push(array[i]);
      }
    }
  
    return solitarios;
  }
  
  const solitarios = numerosSolitarios(array_numeros);
  console.log(solitarios); 