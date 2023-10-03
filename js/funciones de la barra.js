document.addEventListener('DOMContentLoaded', () => {
    const botonesEnrollar = document.getElementsByClassName("seleccionarbtn");
    const botonMostrar = document.querySelector(".CajaBusqueda");
  
    // Loop through each .enrollar element and add a click event listener
    for (let i = 0; i < botonesEnrollar.length; i++) {
      botonesEnrollar[i].addEventListener("click", function() {
        botonMostrar.classList.toggle("mostrar_menu");
      });
    }
  });
  