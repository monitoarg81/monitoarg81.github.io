
var image = document.getElementById("foto");

document.getElementById("bPersonales").addEventListener("click", function(){
    document.getElementById("descripcion").style.visibility='visible';
    document.getElementById("contactos").style.visibility='hidden';
    document.getElementById("formacion").style.visibility='hidden';
    document.getElementById("experiencia").style.visibility='hidden';
    image.src= "images/dniWeb.jpg";
})
document.getElementById("bContactos").addEventListener("click", function(){
    document.getElementById("descripcion").style.visibility='hidden';
    document.getElementById("formacion").style.visibility='hidden';
    document.getElementById("experiencia").style.visibility='hidden';
    document.getElementById("contactos").style.visibility='visible';
    image.src= "images/contactos.jpg";
})  

document.getElementById("bFormacion").addEventListener("click", function(){
    document.getElementById("descripcion").style.visibility='hidden';
    document.getElementById("contactos").style.visibility='hidden';
    document.getElementById("experiencia").style.visibility='hidden';
    document.getElementById("formacion").style.visibility='visible';
    image.src= "images/formacademica.jpg";
})  
document.getElementById("bExperiencia").addEventListener("click", function(){
    document.getElementById("descripcion").style.visibility='hidden';
    document.getElementById("formacion").style.visibility='hidden';
    document.getElementById("contactos").style.visibility='hidden';
    document.getElementById("experiencia").style.visibility='visible';
    image.src= "images/explaborar.png";
})  
document.getElementById("foto").addEventListener("click", function(){
    document.getElementById("descripcion").style.visibility='hidden';
    document.getElementById("formacion").style.visibility='hidden';
    document.getElementById("experiencia").style.visibility='hidden';
    document.getElementById("contactos").style.visibility='hidden';
    image.src="images/cv.jpg";
    
})
