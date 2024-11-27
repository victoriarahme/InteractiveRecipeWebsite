// Example of simple JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to RecipeHub!");
});

// Example of a form submission handling
document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from reloading the page
    const searchQuery = event.target.search.value.trim();
    if (searchQuery) {
        alert(`Searching for: ${searchQuery}`);
    } else {
        alert("Please enter a search query.");
    }
});
