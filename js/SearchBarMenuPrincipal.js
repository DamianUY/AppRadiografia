const searchInput = document.getElementById('searchInput');
const searchList = document.getElementById('searchList');

document.addEventListener('DOMContentLoaded', () => {
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm === '') {
            searchList.style.display = 'none';
        } else {
            searchList.style.display = 'block';
        }

        const filteredResults = autos.filter(item =>
            item.titulo.toLowerCase().includes(searchTerm)
        );

        displaySearchResults(filteredResults);
    });

    function displaySearchResults(results) {
        searchList.innerHTML = '';

        results.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.titulo}`;
            searchList.appendChild(listItem);

            // Add a click event listener to the <li> elements
            listItem.addEventListener('click', () => {
                // Redirect to another page and pass the selected item's title
                window.location.href = `index.html?selectedItem=${encodeURIComponent(item.titulo)}`;
            });
        });
    }
});
