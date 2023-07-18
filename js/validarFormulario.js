function validarFormulario(Dados) {
    var re = /\S+@\S+\.\S+/

    if(Dados.Nome.length !== 0) {
        if(re.test(Email.value) === true) {
            if(Dados.Campo1.length !== 0 || Dados.Campo1 == `Default`) {
                if(Dados.Campo2.length !== 0 || Dados.Campo2 == `Default`) {
                    if (Dados.Campo3.length !== 0) {
                        if (Dados.Campo4 !== 0) {
                            if (Dados.Campo5.length !== 0) {
                                if (Dados.Campo6.length !== 0) {
                                    /* Finalizado as validaçoes */
                                    if (document.getElementById("campoVolta").checked === false && validarData() === true) {
                                        // Back-End Envio de formulario somente ida
                                        M.toast({html: 'Cadastrado com sucesso!'})
                                        compraConcluida(Dados)
                                        return true
                                    } else if (Dados.Campo1 >= Dados.Campo6 && document.getElementById("campoVolta").checked === true && validarData() === true) {
                                        // Back-End Envio de formulario com ida e volta
                                        M.toast({html: 'Cadastrado com sucesso!'})
                                        compraConcluida(Dados)
                                        return true
                                    } else {
                                        M.toast({html: 'Data de volta divergente.'})
                                        return false
                                    }
                                }
                                M.toast({html: 'Preencha a quantidade de crianças.'})
                                document.getElementById("Campo6").focus()
                                return false
                            }
                            M.toast({html: 'Preencha a quantidade de adultos.'})
                            document.getElementById("Campo5").focus()
                            return false
                        }
                        M.toast({html: 'Preencha a hora do embarque.'})
                        document.getElementById("Campo4").focus()
                        return false
                    }
                    M.toast({html: 'Preencha a data do embarque.'})
                    document.getElementById("Campo3").focus()
                    return false
                }
                M.toast({html: 'Preencha o destino de desembarque.'})
                document.getElementById("Campo2").focus()
                return false
            }
            M.toast({html: 'Preencha a origem do embarque.'})
            document.getElementById("Campo1").focus()
            return false
        }
        M.toast({html: 'Preencha o Email.'})
        document.getElementById("Email").focus()
        return false
    }
    M.toast({html: 'Preencha o nome.'})
    document.getElementById("Nome").focus()
    return false
}