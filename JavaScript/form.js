var botaoLogin = document.querySelector("#login");
botaoLogin.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-login");

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
        email: form.email.value,
        senha: form.senha.value,
    }

    return login;
}

function validaLogin(login) {

    var erros = [];

    if (login.email.length == 0) {
        erros.push("O email não pode ser em branco");
    }

    if (login.senha.length == 0) {
        erros.push("A senha não pode ser em branco");
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