function compraConcluida(Dados) {
    document.getElementById('compraConcluida').innerHTML = `
    <div id="modalCompra" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4>Parabens, ${Dados.Nome} pela sua compra.</h4>
        <p>Os dados da sua compra serao enviados para o e-mail ${Dados.Email}.
        Qualquer duvida voce pode entrar em contato conosco respondendo o email ou abrindo um ticket com nossa central de suporte ao cliente.
        
        Origem: ${Dados.Campo1}
        Destino: ${Dados.Campo2}
        Horario de Partida: ${Dados.Campo3}
        </p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Aceitar</a>
      </div>
    </div>`

    M.Modal.init(document.getElementById('modalCompra'))
    $('.modalCompra').modal('open')
}