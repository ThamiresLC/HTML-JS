function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    if (hora >= 0 && hora < 12) { 
        msg.innerHTML = `Agora são ${hora}:${minuto}hrs, ta na hora do cafezinho!`
        img.src = 'cafe.png'
        document.body.style.background = '#6e493c'
    }else if(hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora}:${minuto} hrs, ta na hora do suquinho!`
        img.src = 'suco.png'
        document.body.style.background = '#c9c41e'
    }else{
        msg.innerHTML = `Agora são ${hora}:${minuto}hrs, ta na hora da cervejinha!`
        img.src = 'cerveja.png'
        document.body.style.background = '#041138'
    }
}