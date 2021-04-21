var div = document.getElementsByClassName('fig')
function mensagem(){
    removeEventListener('mouseenter', mensagem)
    var msg = document.createElement('div')
    msg.style.opacity = 0
    msg.setAttribute("id", "msg")
    var p = document.createElement('p')
    var txt = document.createTextNode("Frete grátis e encomenda sob medida")
    setTimeout(function(){
        p.appendChild(txt)
        msg.appendChild(p)
        div[0].appendChild(msg)
    }, 1000);

   setTimeout(function(){
    msg.style.opacity = 1
   }, 2000);

     setTimeout(function() {
        msg.style.opacity = 0
    }, 7000);

    setTimeout(function() {
        msg.remove()
    }, 9000);
}


function mensagem1(){
    removeEventListener('mouseenter', mensagem)
    var msg = document.createElement('div')
    msg.style.opacity = 0
    msg.setAttribute("id", "msg")
    var p = document.createElement('p')
    var txt = document.createTextNode("Frete grátis e encomenda sob medida")
    setTimeout(function(){
        p.appendChild(txt)
        msg.appendChild(p)
        div[1].appendChild(msg)
    }, 1000);

   setTimeout(function(){
    msg.style.opacity = 1
   }, 2000);

     setTimeout(function() {
        msg.style.opacity = 0
    }, 7000);

    setTimeout(function() {
        msg.remove()
    }, 9000);
}


function mensagem2(){
    removeEventListener('mouseenter', mensagem2)
    var msg = document.createElement('div')
    msg.style.opacity = 0
    msg.setAttribute("id", "msg")
    var p = document.createElement('p')
    var txt = document.createTextNode("Frete grátis e encomenda sob medida")
    setTimeout(function(){
        p.appendChild(txt)
        msg.appendChild(p)
        div[2].appendChild(msg)
    }, 1000);

   setTimeout(function(){
    msg.style.opacity = 1
   }, 2000);

     setTimeout(function() {
        msg.style.opacity = 0
    }, 7000);

    setTimeout(function() {
        msg.remove()
    }, 9000);
}


function mensagem3(){
    removeEventListener('mouseenter', mensagem3)
    var msg = document.createElement('div')
    msg.style.opacity = 0
    msg.setAttribute("id", "msg")
    var p = document.createElement('p')
    var txt = document.createTextNode("Frete grátis e encomenda sob medida")
    setTimeout(function(){
        p.appendChild(txt)
        msg.appendChild(p)
        div[3].appendChild(msg)
    }, 1000);

   setTimeout(function(){
    msg.style.opacity = 1
   }, 2000);

     setTimeout(function() {
        msg.style.opacity = 0
    }, 7000);

    setTimeout(function() {
        msg.remove()
    }, 9000);
}


function mensagem4(){
    removeEventListener('mouseenter', mensagem4)
    var msg = document.createElement('div')
    msg.style.opacity = 0
    msg.setAttribute("id", "msg")
    var p = document.createElement('p')
    var txt = document.createTextNode("Frete grátis e encomenda sob medida")
    setTimeout(function(){
        p.appendChild(txt)
        msg.appendChild(p)
        div[4].appendChild(msg)
    }, 1000);

   setTimeout(function(){
    msg.style.opacity = 1
   }, 2000);

     setTimeout(function() {
        msg.style.opacity = 0
    }, 7000);

    setTimeout(function() {
        msg.remove()
    }, 9000);
}



