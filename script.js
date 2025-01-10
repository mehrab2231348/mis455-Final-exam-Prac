const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results');
const showAllButton = document.getElementById('show-all');

let currentMeals = [];

// Trigger search when Enter is pressed
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchMeals(query);
    }
});

showAllButton.addEventListener('click', () => {
    displayMeals(currentMeals, false);
    showAllButton.classList.add('hidden');
});

