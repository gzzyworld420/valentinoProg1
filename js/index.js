// JAVASCRIPT 


// Obtén referencias a los elementos HTML
const loader = document.getElementById('loader');
const searchResults = document.getElementById('searchResults');

// Función para mostrar el loader
function showLoader() {
  loader.style.display = 'block';
}

// Función para ocultar el loader
function hideLoader() {
  loader.style.display = 'none';
}

// Función para cargar los resultados de búsqueda (puedes modificarla según tus necesidades)
function loadSearchResults() {
  // Mostrar el loader
  showLoader();

  // Simulación de carga (puedes modificarla según tus necesidades)
  setTimeout(function() {
    // Ocultar el loader una vez que los resultados se hayan cargado
    hideLoader();

    // Agregar los resultados al contenedor de búsqueda
    searchResults.innerHTML = '¡Resultados de búsqueda!';
  }, 2000); // Tiempo simulado de carga: 2 segundos

}

// Mostrar el loader antes de cambiar de página
window.addEventListener('beforeunload', function() {
  showLoader();
});

// Ocultar el loader después de que la página se haya cargado por completo
window.addEventListener('load', function() {
  hideLoader();
});

// Llamar a la función para cargar los resultados de búsqueda
loadSearchResults();



