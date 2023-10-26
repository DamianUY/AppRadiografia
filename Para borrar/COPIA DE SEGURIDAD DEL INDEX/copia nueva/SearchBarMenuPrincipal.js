document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchList = document.getElementById('searchList');
    const dropdown = document.getElementById('dropdown');
    
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredResults = autos.filter(item =>
            item.titulo.toLowerCase().includes(searchTerm) || item.subtitulo.toLowerCase().includes(searchTerm)
        );

        
        displaySearchResults(filteredResults);

        
        if (searchTerm === '') {
            dropdown.classList.add('hidden-dropdown');
        } else if (filteredResults.length >= 1) {
            dropdown.classList.remove('hidden-dropdown');
        } else {
            dropdown.classList.add('hidden-dropdown');
        }
    });
    
    function displaySearchResults(results) {
        searchList.innerHTML = '';

        results.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.titulo} - ${item.subtitulo}`;
            searchList.appendChild(listItem);
        });
    }
});
