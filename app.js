alert('Boas vindas ao jogo número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute ;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto ) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}`);
}
else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
}
}

