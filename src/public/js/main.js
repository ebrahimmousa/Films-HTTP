// src/public/js/main.js

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('id', 'search-input');
    searchInput.setAttribute('placeholder', 'Sök efter filmer');
    document.body.insertBefore(searchInput, document.body.firstChild);

    searchInput.addEventListener('input', function (event) {
        const searchTerm = event.target.value.toLowerCase();
        const filmListItems = document.querySelectorAll('ul li');

        filmListItems.forEach((listItem) => {
            const filmTitle = listItem.textContent.toLowerCase();
            if (filmTitle.includes(searchTerm)) {
                listItem.style.display = 'list-item';
            } else {
                listItem.style.display = 'none';
            }
        });
    });
});
