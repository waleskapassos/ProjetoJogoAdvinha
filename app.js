alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;
console.log(numeroSecreto);

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e ' + numeroMaximo);
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute + ' ,tente novamente!');
        } else {
            alert('O número secreto é maior que ' + chute + ' ,tente novamente!');
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert('Isso ai!! Você descobriu o número Secreto: ' + numeroSecreto + ' com ' + tentativas + palavraTentativa);

//if (tentativas < 1){
//   alert('Isso ai!! Você descobriu o número Secreto: ' + numeroSecreto + ' ,com ' + tentativas + ' tentativa');
//} else {
//    alert('Isso ai!! Você descobriu o número Secreto: ' + numeroSecreto + ' com ' + tentativas + ' tentativas');




