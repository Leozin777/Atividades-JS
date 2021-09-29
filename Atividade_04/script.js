function gerar(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('tab')
    
    if(num.value.length == 0){
        window.alert("Digite um número")
    } else{
        var n = Number(num.value)
        var nt = 1
        tab.innerHTML = ''

        for(var c = nt; c <= 10; c++){
            var op = document.createElement('option')
            op.text = `${n} x ${c} = ${n*c}`
            op.value = `tab${nt}`
            tab.appendChild(op)

        }
    }
}
