dataAtual = new Date();
const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',

};

console.log(dataAtual.toLocaleTimeString('pt-BR',options));