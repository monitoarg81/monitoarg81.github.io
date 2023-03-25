
document.getElementById("bPersonales").addEventListener("click", function(){
    document.getElementById("cDatos").style.visibility='visible';
    document.getElementById("cFormacion").style.visibility='hidden';
    document.getElementById("cExp").style.visibility='hidden';
    document.getElementById("cPerfil").style.color='rgb(87, 46, 12)';
})
document.getElementById("bPerfil").addEventListener("click", function(){
    document.getElementById("cDatos").style.visibility='hidden';
    document.getElementById("cFormacion").style.visibility='hidden';
    document.getElementById("cExp").style.visibility='hidden';
    document.getElementById("cPerfil").style.color='yellow';
})

document.getElementById("foto").addEventListener("click", function(){
    window.alert("Desarrollo Web by @Monitoarg81");
})

document.getElementById("bFormacion").addEventListener("click", function(){
    document.getElementById("cDatos").style.visibility='hidden';
    document.getElementById("cFormacion").style.visibility='visible';
    document.getElementById("cExp").style.visibility='hidden';
    document.getElementById("cPerfil").style.color='rgb(87, 46, 12)';
})

document.getElementById("bExp").addEventListener("click", function(){
    document.getElementById("cDatos").style.visibility='hidden';
    document.getElementById("cFormacion").style.visibility='hidden';
    document.getElementById("cExp").style.visibility='visible';
    document.getElementById("cPerfil").style.color='rgb(87, 46, 12)';
})