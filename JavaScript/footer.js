const footer = document.createElement("footer");

footer.innerHTML = `
    <footer>
      <section class="container__footer">
        <ul class="container__lista__horario__dia">
          <li class="cabecalho__texto__horario">Horários</li><br>
          <li class="texto__dias__funcionamento">Terça a Quinta Feira</li><br>
          <li class="texto__horario__funcionamento">18:30 a 00:00</li><hr>
          <li class="texto__dias__funcionamento">Sexta a Domingo</li><br>
          <li class="texto__horario__funcionamento">18:00 a 01:20</li><hr>
        </ul>
       
        <ul class="container__rede__social">
          <li class="texto__contato">Contato</li><br>
          <li class="texto__rede__sociais">Fone (xx) xxxxx-xxxx</li><br>
          <li class="texto__rede__sociais">whats (xx) xxxxx-xxxx</li><br>
        </ul> 
        <ul class="lista__redes__sociais">
          <li class="rede__social__texto">Siga-nos em nossas redes sociais</li><br>

       

          <a href = "https://www.instagram.com/" target="_blank">
          <img class="rede__social" src="../IMG/icon-insta.png" alt="Instagram">

          <a href = "https://www.facebook.com" target="_blank">
          <img class="rede__social" src="../IMG/icon-face.png" alt="Facebook">

      
          <a href = "https://www.whatsapp.com" target="_blank">
          <img class="rede__social" src="../IMG/icone-zap.png" alt="Whatsapp">



          <!--   <img src="../IMG/Foto pequena.JPG" class="photo" alt="Foto_Gil" width = "50px"/> -->

          <span title="Gilberto" style="cursor: pointer"> <img src="../IMG/Foto pequena.JPG" class="photo" alt="Foto_Gil" width = "50px"> </span>

         <!-- <a>Gilberto</a>  -->
         
         <span title="Sergio" style="cursor: pointer">
          <img src="../IMG/Foto Sergio.JPG" class="photo_2" alt="Foto_Sergio"  width = "60px"/>
          </span>
          <!-- <a>Sergio</a>   --> 
      

          <span title="Zanucci" style="cursor: pointer">
          <img src="../IMG/Foto Zanucci.JPG" class="photo_3" alt="Foto_GZanucci"  width = "100px"   
          </span>
          
          <a >  <!-- Zanucci</a> -->
          <span title="Wamberto" style="cursor: pointer">
          <img src="../IMG/Foto Wamberto.PNG" class="photo_4" alt="Foto_Wamberto"  width ="40px"  
          
          </span>
          
          <!--  <a >  Wamberto</a> -->
              



        </ul><br>
        
        <ul class="rodape__localizacao">
          <li class="texo__divino__pizzaria">Divino Pizzaria</li>
          <li><img class="logo__frame" src="../IMG/Frame.png" alt="Logo localização"></li>
          <li>
              <a
                class="link__rodape"
                target="_blank"
                href="https://maps.app.goo.gl/pnuHPz6e1sw1Yps58">AV.Secreta tenta de novo, 1010.
              </a>
          </li><hr>
        </ul>
      </section>
    </footer>
`;

document.body.appendChild(footer);
