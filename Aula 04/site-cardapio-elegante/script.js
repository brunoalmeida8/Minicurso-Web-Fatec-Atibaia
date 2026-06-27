function fazerPedido() {
  const telefone = "5511999999999";
  const mensagem = "Olá! Gostaria de fazer um pedido no Sabor Web.";

  const link =
    "https://wa.me/" + 
    telefone + 
    "?text=" + 
    encodeURIComponent(mensagem);

    window.open(link, "_blank")
}

function pedirProduto(produto, preco, idObservacao, idMensagem) {
  const telefone = "5511999999999";

  const observacao = document.getElementById(idObservacao).value;
  //console.log("Valor:", observacao);
  const mensagem = 
    "Olá! Gostaria de fazer um pedido no Sabor Web.\n\n" +
    "Produto: " + produto + "\n" +
    "Preço" + preco + "\n" +
    "Obsercação: " + observacao;
    
  const link =
    "https://wa.me/" + 
    telefone + 
    "?text=" + 
    encodeURIComponent(mensagem);

    document.getElementById(idMensagem).innerText = "Pedido preparado! Abrindo WhatsApp";

    setTimeout(function() {
        window.open(link, "_blank")
    },1000)
}
