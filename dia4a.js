var numeroMisterioso = 4
var chute
var tentativas

chute = prompt("Em qual número estou pensando?")
for (tentativas = 0; chute != 4; tentativas++) {
    if (tentativas < 2) {
        prompt("Tente de novo!");
    }
    else if (tentativas == 2) {
        alert("O número era 4. Mais sorte na próxima!");
        break;
    }
}
if (chute == 4) {
    alert("Parabéns! Você acertou!")
}
// heck yeah!!
