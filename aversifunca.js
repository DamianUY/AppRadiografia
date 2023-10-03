document.addEventListener('DOMContentLoaded', () => {
	populatemenuDesplegable(autos);
	
  });
  

  const searchInput = document.getElementById('searchInput');
  const menuDesplegable = document.getElementById('menuDesplegable');
  const infoContainer = document.getElementById('infoContainer');
  const recuadritos = document.getElementsByClassName('redirigir');
  
  // Function to populate the select box
  function populatemenuDesplegable(autos) {
	menuDesplegable.innerHTML = ''; // Clear the previous menu items
	autos.forEach(auto => {
	  const listaElement = document.createElement('li');
	  listaElement.className = 'redirigir';
	  listaElement.textContent = auto.titulo;
  
	  // Attach a click event listener to each listaElement
	  listaElement.addEventListener('click', () => {
		displayInfo(auto.titulo); // Pass the clicked item's title to the displayInfo function
	  });
  
	  menuDesplegable.appendChild(listaElement);
	});
  }
  

  // Function to filter options based on search input
  function filterOptions() {
	const searchTerm = searchInput.value.toLowerCase();
	const filteredOptions = autos.filter(auto =>
	  auto.titulo.toLowerCase().includes(searchTerm)
	);
	populatemenuDesplegable(filteredOptions);
	displayInfo(null); // Clear info when filtering options
  }
  
  // Function to display information of the selected option
  function displayInfo(selectedTitulo) {
	infoContainer.innerHTML = '';
	if (selectedTitulo) {
	  const selectedAuto = autos.find(auto => auto.titulo === selectedTitulo);
	  if (selectedAuto) {
		const infoDiv = document.createElement('div');
		infoDiv.innerHTML = `<div>
		<h1> ${selectedAuto.titulo} </h1>
	
		<h2>${selectedAuto.subtitulo}</h2>
	</div>
	
	<div class="datosprincipales"><button class="boton"><b>Posición de paciente</b></button>
		<p class="no_mostrar">${selectedAuto.posicionpac}</p>
	</div>
	
	<div class="datosprincipales"> <button class="boton"><b>Posición de la región anatómica</b></button>
		<p class="no_mostrar">
			${selectedAuto.posicionreg}</p>
	</div>
	
	<div class="datosprincipales"><button class="boton"><b>Región a incluir</b></button>
		<p class="no_mostrar">${selectedAuto.regioninclu}</p>
	</div>
	
	<div class="datosprincipales"> <button class="boton"><b>Rayo central</b></button> 
		<p class="no_mostrar">${selectedAuto.rayocen}</p>
	</div>
	
	<div class="datosprincipales">
		<button class="boton"><b>Criterios de calidad</b></button>
		<ul class= "no_mostrar">
		${selectedAuto.criteriocal}
		</ul>
	</div>
		
	<div class="datosprincipales"> 
	<button class="boton"><b>Posibles patologías</b> </button>
	<p class="no_mostrar">${selectedAuto.patologia}</p>
	
	</div>
	
	<div>
	${selectedAuto.restodedatos}
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
		infoContainer.appendChild(infoDiv);
		botoncerrar();
	  }
	}
  }



	
		  
  
  // Attach an event listener to the search input
  searchInput.addEventListener('keyup', filterOptions);
  

  function botoncerrar() {
	var boton = document.querySelectorAll(".boton");
			var mostrartexto = document.querySelectorAll(".no_mostrar")
	
		boton.forEach(function(elemento,indice){
				elemento.addEventListener("click",function(){
					mostrartexto[indice].classList.toggle("mostrar_comentario");
		});
	})
	}


  // Attach an event listener to the select box
  recuadritos = document.getElementsByClassName('redirigir');
  for (let i = 0; i < recuadritos.length; i++) {
	recuadritos[i].addEventListener('click', event => {
	  const selectedTitulo = event.target.textContent;
	  displayInfo(selectedTitulo);
	  
	});
  }

  
 

	