const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos anos você tem?");
const ling = prompt("Qual linguagem de progamação você está estudando?")
alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${ling}!`)
const gosto = prompt(`Você gosta de estudar ${ling}? Responda com o número 1 para SIM ou 2 para NÃO.`);
if (gosto == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} 
if (gosto == 2) {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}