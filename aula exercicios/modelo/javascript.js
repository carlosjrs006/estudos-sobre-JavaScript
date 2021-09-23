function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')



        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bebehomem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'hjovem.jpg')
            } else if (idade < 50) {
                //ADulto
                img.setAttribute('src', 'hadulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'hvelho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bbmulher.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mjovem.jpg')
            } else if (idade < 50) {
                //ADulto
                img.setAttribute('src', 'madulta.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'mvelha.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)




    }
}