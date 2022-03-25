var escolhaArea
var escolhaFront
var escolhaBack
var escolhaFinal
var Ok

alert("Bem-vindo ao palácio da programação!");
alert("Você gostaria de seguir para o hall do Front-End ou ir até o salão do Back-End?");
escolhaArea = prompt("Digite 1 para a primeira opção e 2 para a segunda!");
if (escolhaArea == 1) {
    alert("Ótimo! Aqui, você gostaria de aprender React ou Vue?");
    escolhaFront = prompt("Digite 1 para a primeira opção e 2 para a segunda!");
    if (escolhaFront == 1) {
        alert("Muito bem! Reaja, amigo, porque começaremos agora a aprender React!");
    }
    else if (escolhaFront == 2) {
        alert("Certinho! Vamos às nossas aventuras de Vue!");
    }
    else {
        alert("Não lhe entendi :.(");
    }
}
else if (escolhaArea == 2) {
    alert("Muito bem! Aqui estamos nós. Você gostaria de se aventurar por C# ou Java?");
    escolhaBack = prompt("Digite 1 para a primeira opção e 2 para a segunda!");
    if (escolhaBack == 1) {
        alert("Vamos afiar nossos sentidos e desbravar C#!");
    }
    else if (escolhaBack == 2) {
        alert("Opa! Vou pedir que preparem um cafézinho para nós, e vamos encarar Java!");
    }
    else {
        alert("Não lhe entendi :.(");
    }
}
alert("Ao fim dessa aventura, você gostaria de continuar se especializando nos caminhos que escolheu para se tornar o melhor de todos? Ou prefere seguir treinando para se tornar um legítimo Fullstack?");
escolhaFinal = prompt("Digite 1 para a primeira opção e 2 para a segunda!");
if (escolhaFinal == 1) {
    alert("Bom, eu já lhe ensinei tudo que podia. Agora é hora de abrir suas próprias e continuar explorando, caro aventureiro!");
}
else if (escolhaFinal == 2) {
    alert("Vamos voltar ao palácio, então, e recomeçar!");
}
else {
    alert("Não lhe entendi :.(");
}
prompt("Última pergunta... Quais são as outras tecnologias nas quais você gostaria de se especializar?");
Ok = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, diga 'Ok'.");
while (Ok == "Ok") {
    prompt("Quais são as outras tecnologias nas quais você gostaria de se especializar?");
    Ok = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, diga 'Ok'.");
}