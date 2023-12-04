const removeProductButtons = document.getElementsByClassName("botao-remove-produto")

for (var i = 0; i < removeProductButtons.length; i++){
	removeProductButtons[i].addEventListener("click", function(event){
	event.target.parentElement.parentElement.remove()
	})
}

function abreModal(){
	const modal = document.getElementById('janela-modal')
	modal.classList.add('abrir')
	
	modal.addEventListener('click', (e) => {
		if(e.target.id == 'fechar' || e.target.id == 'janela-modal')
			modal.classList.remove('abrir')
	})
}