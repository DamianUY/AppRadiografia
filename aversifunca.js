document.addEventListener('DOMContentLoaded', () => {
	populatemenuDesplegable(autos);
	
  });
  

  const searchInput = document.getElementById('searchInput');
  const menuDesplegable = document.getElementById('menuDesplegable');
  const infoContainer = document.getElementById('infoContainer');
  const recuadritos = document.getElementsByClassName('redirigir');

////////////////////
const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const photos = [];
////////////////  //
  
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
		photos.push(...selectedAuto.image.map(imagePath => `img/${imagePath}`));
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
	
	
	</div>
	
		
	   `;
		infoContainer.appendChild(infoDiv);
		botoncerrar();
	  }
	}
  }


// Function to show the current image
function showImage(index) {
	if (photos[index]) {
	  sliderImage.src = photos[index];
	} else {
	  console.error(`Image not found at index ${index}`);
	}
  }
  
  // Initial image display
  showImage(currentIndex);
  
  // Event listener for the previous button
  prevBtn.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + photos.length) % photos.length;
	showImage(currentIndex);
  });
  
  // Event listener for the next button
  nextBtn.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % photos.length;
	showImage(currentIndex);
  });
  
  // Handle window resize to keep the image responsive
  window.addEventListener('resize', () => {
	showImage(currentIndex);
  });
  




		  
  
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


