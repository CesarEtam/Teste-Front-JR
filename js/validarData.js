function validarData() {
    var data = document.getElementById("Campo3").value
    
    if (Date.parse(new Date()) > Date.parse(data)) {
        M.toast({html: 'O embarque precisa ser superior a hoje!'})
        return false
    } else {
        return true
    }
}