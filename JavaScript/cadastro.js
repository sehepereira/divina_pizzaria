var botaoLogin = document.querySelector("#form-cadastro");
botaoLogin.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-cadastro");

    var login = obtemLoginDoFormulario(form);

    var erros = validaLogin(login);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemLoginDoFormulario(form) {

    var login = {
		nome: form.nome.value,
        email: form.email.value,
        senha: form.senha.value,
		sobrenome: form.sobrenome.value,
		cpf: form.cpf.value,
		celular: form.celular.value,
		confirmacao: form.confirmacao.value,
    }

    return login;
}

function validaLogin(login) {

    var erros = [];

    if (login.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (login.email.length == 0) {
        erros.push("O email não pode ser em branco");
    }

    if (login.senha.length == 0) {
        erros.push("A senha não pode ser em branco");
    }

	if (login.sobrenome.length == 0) {
        erros.push("A sobrenome não pode ser em branco");
    }
	
	if (login.cpf.length == 0) {
        erros.push("A cpf não pode ser em branco");
    }
	
	if (login.celular.length == 0) {
        erros.push("A celular não pode ser em branco");
    }
	
	if (login.confirmacao.length == 0) {
        erros.push("A confirmacao não pode ser em branco");
    }
	
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}