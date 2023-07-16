function carregarImoveis(Carregar) {
    //Seleciona a lista
    MinhaLista = document.getElementById("Campo2")
    
    //Cria e adicona Child
    for (var i = 0; i < Carregar.length; i++) {
        var option = document.createElement("option")
        option.value = Carregar[i]
        option.text = Carregar[i]
        MinhaLista.appendChild(option)
    }
    $('select').not('.disabled').formSelect()
}