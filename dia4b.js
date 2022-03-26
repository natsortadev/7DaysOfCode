var numeroMisterioso = Math.floor(Math.random() * (10 - 0 + 1) + 0)
var chute
var tentativas

chute = prompt("Em qual número estou pensando?")
for (tentativas = 0; chute != numeroMisterioso; tentativas++) {
    if (tentativas < 2) {
        prompt("Tente de novo!");
    }
    else if (tentativas == 2) {
        alert(`O número era ${numeroMisterioso}. Mais sorte na próxima!`);
        break;
    }
}
if (chute == numeroMisterioso) {
    alert("Parabéns! Você acertou!")
}