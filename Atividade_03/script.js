function calcular(){
    var inicio = window.document.querySelector('input#txti')
    var fim = window.document.querySelector('input#txtf')
    var passos = window.document.querySelector('input#txtp')
    var res = window.document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        window.alert('[ERRO] Dados inválidos.')
    } else{
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)

        if(p <= 0){
            window.alert('[ERRO] Passo inválido, considerando PASSO 1')
            p = 1
        }

        res.innerHTML = 'Contando:'

        //contagem crescente
        if(i < f){
            for(var c = i ;c <= f;c += p){
                res.innerHTML += `${c} \u{1F449}`
            }

        //contagem decrescente    
        }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
            
        }
        
        res.innerHTML += `\u{1F3C1}`
    }


}