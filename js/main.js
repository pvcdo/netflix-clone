function salvarPrincipal(){
    let classes_salvar_princ = document.getElementById('salvar-principal').classList
    if(classes_salvar_princ.length === 1){
        classes_salvar_princ.remove(classes_salvar_princ[0])
    }else if(classes_salvar_princ.length === 0){
        classes_salvar_princ.add('icone-botao-salvar')
    }
}