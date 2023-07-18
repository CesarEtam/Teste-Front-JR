function carregarAeroportos(Carregar) {
    
    //Cria e adicona Child
    function criarOpcoes(campo) {
        for (var i = 0; i < Carregar.length; i++) {
            var option = document.createElement("option")
            option.value = Carregar[i].Nome
            option.text = Carregar[i].Nome
            campo.appendChild(option)
        }
    }
    
    criarOpcoes(document.getElementById("Campo1"))
    criarOpcoes(document.getElementById("Campo2"))

    criarOpcoes(document.getElementById("Campo7"))
    criarOpcoes(document.getElementById("Campo8"))
    
    $('select').not('.disabled').formSelect()
}

async function listaAeroportos() {
    /* Pegaria lista de Aerodromos
    const response = await fetch(
        "https://sistemas.anac.gov.br/dadosabertos/Aerodromos/Lista%20de%20aer%C3%B3dromos%20privados/Aerodromos%20Privados/AerodromosPrivados.json",
        {mode: 'no-cors'}
        )    
    const dados = await response.json()
    */
    const dados = [
        {Nome: "Aeroporto 1"},
        {Nome: "Aeroporto 2"},
        {Nome: "Aeroporto 3"},
        {Nome: "Aeroporto 4"}
    ]
    carregarAeroportos(dados)
}

listaAeroportos()