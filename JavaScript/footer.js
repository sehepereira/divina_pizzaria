const footer = document.createElement('footer');

footer.innerHTML = `
    <footer>
        <section class="container__funcionamento">
            <h4 class="cabecalho__funcionamento__texto">Funcionamento</h4> 
            <div class="menu__container__funcionamento">
                <table class="container__tabela">
                    <thead class="cabecalho__tabela">
                        <tr class="cabecalho__dias">
                            <th>Dia</th>
                            <th>Horário</th>
                        </tr>
                    </thead>
                </table> 
            </div>
            <div class="rodape__localizacao">
                <p>Divino Pizzaria</p>
                <img class="logo__frame" src="../IMG/Frame.png" alt="Logo localização">
                <p><a class="link__rodape" target="_blank" href="https://maps.app.goo.gl/pnuHPz6e1sw1Yps58">AV.Secreta tenta de novo,1010</a></p>
            </div>
            <p class="talento__cloud">Talento Cloud 2023</p>
        </section>
    </footer>
`;

document.body.appendChild(footer);