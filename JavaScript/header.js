const header = document.createElement('header');

header.innerHTML = `
    <header class="cabecalho">
      <img
      class="cabecalho__logo__pizzadivina"
      src="../IMG/logo 1.png"
      alt="Logo divina-pizzaria"/>
     
      <div class="container">
        <nav class="container__lista__navegacao">
          <input type="checkbox" id="menu" class="container__botao" />
          <label for="menu">
            <span class="cabecalho__menu__hamburguer"></span>
          </label>
          <ul class="lista__menu">
            <li class="lista__menu__item">
              <a href="../HTML/index.html" class="lista__menu__link">Inicio</a>
            </li>
            <li class="lista__menu__item">
              <a href="../HTML/cardapio.html" class="lista__menu__link"
                >Cardápio</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container__carrinho">
        <nav class="container__carrinho__navegacao">
          <ul class="login">
            <img
              class="imagem__login"
              src="../IMG/img-login.png"
              alt="Logo-login"/>
            <li class="lista__menu__login">
              <a class="lista__menu__login" href="../HTML/login.html">Login</a>
            </li>
            <img
              class="imagem__carrinho"
              src="../IMG/carrinho.png"
              alt="Imagem carrinho"/>
            <li class="lista__menu__carrinho">
              <a class="lista__menu__carrinho" href="../HTML/carrinho.html">Carrinho</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
`;

document.body.prepend(header);