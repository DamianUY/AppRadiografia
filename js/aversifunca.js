document.addEventListener('DOMContentLoaded',() => {
    //mostrarAutos();
    botoncerrar();
	displayResults();

});

const searchInput = document.getElementById('inputSearch');
let resultado = document.getElementById("resultado");

function displayResults(results) {
  resultado.innerHTML = ''; //borra lo anterior creo

  if (results.length === 0) {
	resultado.innerHTML = '<p>No se han encontrado coincidencias.</p>';
	return;
  }

  results.forEach(item => {
	const resultDiv = document.createElement('div');
	resultDiv.innerHTML = `<div>
	<h1> ${auto.titulo} </h1>

	<h2>${auto.subtitulo}</h2>
</div>

<div class="datosprincipales"><button class="boton"><b>Posición de paciente</b></button>
	<p class="no_mostrar">${auto.posicionpac}</p>
</div>

<div class="datosprincipales"> <button class="boton"><b>Posición de la región anatómica</b></button>
	<p class="no_mostrar">
		${auto.posicionreg}</p>
</div>

<div class="datosprincipales"><button class="boton"><b>Región a incluir</b></button>
	<p class="no_mostrar">${auto.regioninclu}</p>
</div>

<div class="datosprincipales"> <button class="boton"><b>Rayo central</b></button> 
	<p class="no_mostrar">${auto.rayocen}</p>
</div>

<div class="datosprincipales">
	<button class="boton"><b>Criterios de calidad</b></button>
	<ul class= "no_mostrar">
	${auto.criteriocal}
	</ul>
</div>
	
<div class="datosprincipales"> 
<button class="boton"><b>Posibles patologías</b> </button>
<p class="no_mostrar">${auto.patologia}</p>

</div>

<div>
${auto.restodedatos}
</div>



<div class="flexbox2">


<div class="FotoPosicion" >

<img src="FotosPosicion/columna.png">

</div>

<div class="FotoRadio" >

<img src="FotosRadio/radio.png">

</div>

</div>

<div class="carrousel">
<div class="grande">
<img src="FotosGaleria/wallpapersden.com_nessa-pokemon-sword-and-shield_3840x2160.jpg" alt="Imagen 1" class="img">
<img src="FotosGaleria/thumb-1920-1082389.png" alt="Imagen 2" class="img">
<img src="FotosGaleria/shrek.jpg" alt="Imagen 3" class="img">
</div>
<ul class="puntos">
<li class="punto"></li>
<li class="punto"></li>
<li class="punto"></li>
</ul>
</div>

	
   `;
	resultado.appendChild(resultDiv);
  });
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredResults = autos.filter(item =>
	item.titulo.toLowerCase().includes(searchTerm)
  );

  displayResults(filteredResults);
});



function mostrarAutos() {

    for (const auto of autos) {

        resultado.innerHTML += `
        
        <div>
		<h1> ${auto.titulo} </h1>

		<h2>${auto.subtitulo}</h2>
	</div>
	
	<div class="datosprincipales"><button class="boton"><b>Posición de paciente</b></button>
		<p class="no_mostrar">${auto.posicionpac}</p>
	</div>

	<div class="datosprincipales"> <button class="boton"><b>Posición de la región anatómica</b></button>
		<p class="no_mostrar">
			${auto.posicionreg}</p>
	</div>

	<div class="datosprincipales"><button class="boton"><b>Región a incluir</b></button>
		<p class="no_mostrar">${auto.regioninclu}</p>
	</div>

	<div class="datosprincipales"> <button class="boton"><b>Rayo central</b></button> 
		<p class="no_mostrar">${auto.rayocen}</p>
	</div>

	<div class="datosprincipales">
		<button class="boton"><b>Criterios de calidad</b></button>
		<ul class= "no_mostrar">
		${auto.criteriocal}
		</ul>
	</div>
        
    <div class="datosprincipales"> 
    <button class="boton"><b>Posibles patologías</b> </button>
    <p class="no_mostrar">${auto.patologia}</p>
    
</div>

<div>
    ${auto.restodedatos}
</div>



<div class="flexbox2">


<div class="FotoPosicion" >

<img src="FotosPosicion/columna.png">

</div>

<div class="FotoRadio" >

<img src="FotosRadio/radio.png">

</div>

</div>

<div class="carrousel">
<div class="grande">
    <img src="FotosGaleria/wallpapersden.com_nessa-pokemon-sword-and-shield_3840x2160.jpg" alt="Imagen 1" class="img">
    <img src="FotosGaleria/thumb-1920-1082389.png" alt="Imagen 2" class="img">
    <img src="FotosGaleria/shrek.jpg" alt="Imagen 3" class="img">
</div>
<ul class="puntos">
    <li class="punto"></li>
    <li class="punto"></li>
    <li class="punto"></li>
</ul>
</div>
    
        
        `;

    };


}

function botoncerrar() {
var boton = document.querySelectorAll(".boton");
		var mostrartexto = document.querySelectorAll(".no_mostrar")

	boton.forEach(function(elemento,indice){
    		elemento.addEventListener("click",function(){
        		mostrartexto[indice].classList.toggle("mostrar_comentario");
    });
})
}


 