var boton = document.querySelectorAll(".boton");
var mostrartexto = document.querySelectorAll(".no_mostrar")

boton.forEach(function(elemento,indice){
    elemento.addEventListener("click",function(){
        mostrartexto[indice].classList.toggle("mostrar_comentario");
    });
})
