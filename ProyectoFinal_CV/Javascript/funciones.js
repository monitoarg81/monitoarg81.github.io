
document.getElementById("bPersonales").addEventListener("click", function(){
    document.getElementById("descripcion").style.visibility='visible';
    document.getElementById("contactos").style.visibility='hidden';
    document.getElementById("formacion").style.visibility='hidden';
    document.getElementById("experiencia").style.visibility='hidden';
})
document.getElementById("bContactos").addEventListener("click", function(){
    document.getElementById("descripcion").style.visibility='hidden';
    document.getElementById("formacion").style.visibility='hidden';
    document.getElementById("experiencia").style.visibility='hidden';
    document.getElementById("contactos").style.visibility='visible';
})  

document.getElementById("foto").addEventListener("click", function(){
    document.getElementById("descripcion").style.visibility='visible';
    document.getElementById("formacion").style.visibility='hidden';
    document.getElementById("experiencia").style.visibility='hidden';
    document.getElementById("contactos").style.visibility='hidden';
})
document.getElementById("bFormacion").addEventListener("click", function(){
    document.getElementById("descripcion").style.visibility='hidden';
    document.getElementById("contactos").style.visibility='hidden';
    document.getElementById("experiencia").style.visibility='hidden';
    document.getElementById("formacion").style.visibility='visible';
})  
document.getElementById("bExperiencia").addEventListener("click", function(){
    document.getElementById("descripcion").style.visibility='hidden';
    document.getElementById("formacion").style.visibility='hidden';
    document.getElementById("contactos").style.visibility='hidden';
    document.getElementById("experiencia").style.visibility='visible';
})  
