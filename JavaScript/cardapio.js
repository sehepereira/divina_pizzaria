var botaoAdicionaProduto = document.querySelector("#botaoAdicionaProduto");

botaoAdicionaProduto.addEventListener("click", function(event) {
    event.preventDefault();

    const button = event.target
	const productInfos = button.parentElement.parentElement
	const productImage = productInfos.getElementsByClassName("logo__imagem__cardapio")[0].src
	const productName = productInfos.getElementsByClassName("titulo-produto")[0].innerText
	const productValue = productInfos.getElementsByClassName("preco-produto")[0].innerText
    
    // Define o item que será inserido no carrinho
    const novoItem = { imgem: productImage, nome: productName, valor: productValue}; // Por padrão, a quantidade é 1
    
    // Recupera os itens existentes no carrinho (se houver)
    const itensCarrinho = JSON.parse(localStorage.getItem('itensCarrinho')) || [];
    
    // Adiciona o novo item à lista de itens no carrinho
    itensCarrinho.push(novoItem);
    
    // Atualiza o localStorage com a nova lista de itens do carrinho
    localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinho));
    
    // Redireciona para a página do carrinho
    window.location.href = 'carrinho.html';

});