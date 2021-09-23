
function carregar() {
    var mg = window.document.getElementById("msg")
    var img = window.document.getElementById("image")
    var data = new Date()
   var hora = data.getHours()
  

    mg.innerHTML = `Agora sao ${hora} horas.`
    console.log(`Agora sao ${hora} horas.`)
    if (hora >= 0 && hora < 12) {
        img.src = "fotomanha.jpg"
        document.body.style.background= '#e2cd9f'

    } else if (hora >= 12 && hora <= 18) {
        img.src = "fotonoite.jpg"

     document.body.style.background='#b9846f'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background='#515154'
    }
}