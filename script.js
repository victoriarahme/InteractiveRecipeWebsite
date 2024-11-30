
document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to RecipeHub!");
});


document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from reloading the page
    const searchQuery = event.target.search.value.trim();
    if (searchQuery) {
        alert(`Searching for: ${searchQuery}`);
    } else {
        alert("Please enter a search query.");
    }
});
