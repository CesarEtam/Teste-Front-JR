function compraConcluida(Dados) {
    document.getElementById('compraConcluida').innerHTML = `
    <div id="modalCompra" class="modal modal-fixed-footer z-depth-5">
      <div class="modal-content">
        <h3 class="teal-text text-lighten-1">Parabens ${Dados.Nome} pela sua compra.</h4>
        <p>Os dados da sua compra serao enviados para o e-mail ${Dados.Email}.
        <br>Qualquer duvida voce pode entrar em contato conosco respondendo o email ou abrindo um ticket com nossa central de suporte ao cliente.
        <br>
        <br><b>Origem:</b> ${Dados.Campo1}
        <br><b>Destino:</b> ${Dados.Campo2}
        <br><b>Horario de Partida:</b> ${Dados.Campo3}
        </p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Aceitar</a>
      </div>
    </div>`

    M.Modal.init(document.getElementById('modalCompra'))
    $('.modal').modal('open')
}