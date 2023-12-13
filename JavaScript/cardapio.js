// Evento de clique delegado para os botões
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('botao-adiciona-produto')) {
    adicionarItemAoCarrinho(event);
  }
});

function adicionarItemAoCarrinho(event){

  const button = event.target;
  const productInfos = button.parentElement.parentElement;
  const productImage = productInfos.querySelector(
    ".logo__imagem__cardapio"
  ).src;
  
  const productName =
    productInfos.getElementsByClassName("titulo-produto")[0].innerText;
  const productValue =
    productInfos.getElementsByClassName("preco-produto")[0].innerText;

  // Define o item que será inserido no carrinho
  const novoItem = {
    imagem: productImage,
    nome: productName,
    valor: productValue,
    quantidade: 1,
  }; // Por padrão, a quantidade é 1

  // Recupera os itens existentes no carrinho (se houver)
  const itensCarrinho = JSON.parse(localStorage.getItem("itensCarrinho")) || [];

  // Adiciona o novo item à lista de itens no carrinho
  itensCarrinho.push(novoItem);

  // Atualiza o localStorage com a nova lista de itens do carrinho
  localStorage.setItem("itensCarrinho", JSON.stringify(itensCarrinho));

  // Redireciona para a página do carrinho
  window.location.href = "carrinho.html";
};
