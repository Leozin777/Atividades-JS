function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')

    if(Fano.value.lenght == 0 || Number(Fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src' , 'imagens/foto-bebe-m.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src' , 'imagens/foto-jovem-m.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src' , 'imagens/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src' , 'imagens/foto-idoso-m.png')
            } 

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src' , 'imagens/foto-bebe-f.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src' , 'imagens/foto-jovem-f.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src' , 'imagens/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src' , 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você tem ${idade} anos e é ${genero}`
        res.appendChild(img)

    }
}