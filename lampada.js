"use strict"
const lampada = document.getElementById("lampada")
let idDesligar
let idLigar

function lampadaInteira(){
    return lampada.src.includes("ligada")
}


function ligarLampada(){
    if(lampadaInteira()){
    lampada.src = "img/ligada.jpg"
    }
}
function desligarLampada(){
    if(lampadaInteira()){
    lampada.src = "img/desligada.jpg"
    }
}
function quebrarLampada(){
    lampada.src = "img/quebrada.jpg"
}
function pararPiscar(){
   clearInterval(idLigar)
   clearInterval(idDesligar)
}
function piscarLampada(){
    const botaoPiscar = document.getElementById("piscar")
    if (botaoPiscar.textContent == "Piscar") {
    idDesligar = setInterval(ligarLampada, 1000)
    idLigar = setInterval(desligarLampada, 1100)
    botaoPiscar.textContent = "Parar"
    
    }else{
        pararPiscar()
        botaoPiscar.textContent = "Piscar"
    }
}

 
//eventos

document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)
lampada.addEventListener("dblclick", quebrarLampada)
document.getElementById("lampada").addEventListener("mouseover", ligarLampada)
document.getElementById("lampada").addEventListener("mouseout", desligarLampada)
document.getElementById("piscar").addEventListener("click", piscarLampada)

