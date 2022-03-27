let listaFrutas = [[novaComida,categoria]];
let listaLaticinios = [[novaComida,categoria]];
let listaCongelados = [[novaComida,categoria]];
let listaDoces = [[novaComida,categoria]];
var resposta
var novaComida
var categoria
let listaDeCompras = [listaFrutas, listaLaticinios, listaCongelados, listaDoces];

do {
    resposta = prompt("Você deseja adicionar uma comida na sua lista de compras? sim/não");
    if (resposta == "sim") {
        novaComida = prompt("Qual comida você desja inserir na lista?");
        categoria = prompt("Em qual categoria essa comida se encaixa? frutas/laticínios/congelados/doces");
        if (categoria == "frutas") {
            listaFrutas.push(novaComida);
        }
        if (categoria == "laticínios") {
            listaLaticinios.push(novaComida);
        }
        if (categoria == "congelados") {
            listaCongelados.push(novaComida);
        }
        if (categoria == "doces") {
            listaDoces.push(novaComida);
        }
    }
}
while (resposta == "sim")
if (resposta == "não") {
    console.table(listaDeCompras);
}