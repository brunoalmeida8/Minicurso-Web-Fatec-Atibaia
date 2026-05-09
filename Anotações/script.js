function fazerPedido() {
    alert("Pedido inicido")
    const telefone = "5511999999999";

    const mensagem = "Ola quero fazer pedido";

    const link = "https://wa.me/" + 
            telefone + 
            "?text=" +
            encodeURIComponent(mensagem);//converter para texto reconhecido pela api do whatsapp

    window.open(link, "_blank")//abrir em nova guia
}

function pedirProduto(produto, preco, idObservacao, idMensagem) {
    alert("Pedido inicido")
    const telefone = "5511999999999";

    const observacao = document.getElementById("idObsesrvacao").value;
    console.log("valor: ", observacao); //saber se deu certo

    const mensagem = "Ola quero fazer pedido\n\n" +
        "produto: " + produto + "\n" + 
        "preco: " + preco + "\n" +
        "observacao: " + observacao;

    const link = "https://wa.me/" + 
            telefone + 
            "?text=" +
            encodeURIComponent(mensagem);//converter para texto reconhecido pela api do whatsapp

    window.open(link, "_blank")//abrir em nova guia 

    
}


//const - variavel
//.value vai pegar o valor q esta la
//.innerText vai escrever algo la
//comentario = shift + alt + a 