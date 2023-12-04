const addProductButtons = document.getElementsByClassName("botao-adiciona-produto")

for (var i = 0; i < addProductButtons.length; i++){
	addProductButtons[i].addEventListener("click", addProductList)
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(productImage, productName, productValue) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("produto-carrinho");
	console.log(productImage)
	console.log(productName)
	console.log(productValue)
	console.log(pacienteTr)
		
    pacienteTr.appendChild(montaTd(productImage, "logo__imagem__cardapio"));
    pacienteTr.appendChild(montaTd(productName, "titulo-produto"));
    pacienteTr.appendChild(montaTd(productValue, "preco-produto"));

    return pacienteTr;
}

function addProductList(event){
	const button = event.target
	const productInfos = button.parentElement.parentElement
	const productImage = productInfos.getElementsByClassName("logo__imagem__cardapio")[0].src
	const productName = productInfos.getElementsByClassName("titulo-produto")[0].innerText
	const productValue = productInfos.getElementsByClassName("preco-produto")[0].innerText

	var pacienteTr = montaTr(productImage, productName, productValue);
    var tabela = document.querySelector("#corpo-itens-carrinho");
    tabela.appendChild(pacienteTr);

}