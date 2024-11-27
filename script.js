// script.js

// Select the button and the ingredients list
const toggleButton = document.getElementById('toggle-ingredients');
const ingredientsList = document.getElementById('ingredients-list');

// Add event listener to the button
toggleButton.addEventListener('click', () => {
    // Toggle the 'hidden' class to show or hide the ingredients
    ingredientsList.classList.toggle('hidden');
    
    // Change button text based on visibility of ingredients
    if (ingredientsList.classList.contains('hidden')) {
        toggleButton.textContent = 'Show Ingredients';
    } else {
        toggleButton.textContent = 'Hide Ingredients';
    }
});
