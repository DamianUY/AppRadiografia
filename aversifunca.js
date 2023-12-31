const searchInput = document.getElementById('searchInput');
const menuDesplegable = document.getElementById('menuDesplegable');
const recuadritos = document.getElementsByClassName('redirigir');

document.addEventListener('DOMContentLoaded', () => {
	const urlParams = new URLSearchParams(window.location.search);
    const selectedItem = urlParams.get('selectedItem');
	if (selectedItem) {
        // Display the information for the selected item
        displayInfo(selectedItem);
    }
	searchInput.addEventListener('input', () => {
		const searchTerm = searchInput.value.toLowerCase();
		
		if (searchTerm === '') {
			menuDesplegable.style.display = 'none';
		} else {
			menuDesplegable.style.display = 'block';
		}
		
		const filteredResults = autos.filter(item =>
			item.titulo.toLowerCase().includes(searchTerm)
		);
	
		displaySearchResults(filteredResults);
	});
	
	
	function displaySearchResults(results) {
		menuDesplegable.innerHTML = '';
	
		results.forEach(item => {
			const listItem = document.createElement('li');
			listItem.className = 'redirigir';
			listItem.textContent = `${item.titulo}`;

			listItem.addEventListener('click', () => {
				displayInfo(item.titulo);
			 });

			menuDesplegable.appendChild(listItem);
		});

	};
});

 
  const infoContainer = document.getElementById('infoContainer');
 

//////////////////////////////////DEL CARRUSEL
const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;
const photos = [];
/////////////////////////////////


  //////////////////////////////////////////////////MOSTRAR LOS DATOS BUSCADOS
  function displayInfo(selectedTitulo) {
	infoContainer.innerHTML = '';
	if (selectedTitulo) {
	  const selectedAuto = autos.find(auto => auto.titulo === selectedTitulo);
	  if (selectedAuto) {
		photos.length = 0;
		photos.push(...selectedAuto.image.map(imagePath => `img/${imagePath}`));
		showImage(currentIndex);
		const infoDiv = document.createElement('div');
		infoDiv.innerHTML = `<div>
		<h1> ${selectedAuto.titulo} </h1>
	
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
///////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////CARRUSEL
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
  

/////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////PARA CERRAR Y ABRIR LAS PESTAÑITAS
  function botoncerrar() {
	var boton = document.querySelectorAll(".boton");
			var mostrartexto = document.querySelectorAll(".no_mostrar")
	
		boton.forEach(function(elemento,indice){
				elemento.addEventListener("click",function(){
					mostrartexto[indice].classList.toggle("mostrar_comentario");
		});
	})
	}

////////////////////////////////////////////////////////////////////

  // Attach an event listener to the select box
  recuadritos = document.getElementsByClassName('redirigir');
  for (let i = 0; i < recuadritos.length; i++) {
	recuadritos[i].addEventListener('click', event => {
	  const selectedTitulo = event.target.textContent;
	  displayInfo(selectedTitulo);
	  
	});
  }
