
document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to RecipeHub!");
});



document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from reloading the page

    const searchQuery = event.target.search.value.trim().toLowerCase();  // Get the search term and normalize it
    if (!searchQuery) {
        alert("Please enter a search query.");
        return; // Exit if the search query is empty
    }

    // List of recipe names and links
    const recipes = [
        { 
            name: 'Spaghetti Carbonara', 
            link: 'https://damndelicious.net/2014/03/29/spaghetti-carbonara/', 
            imageSrc: 'images/Recipe_picture2.jpg', 
            description: 'A classic Italian pasta dish with a creamy sauce.',
            dietary: ['dairy'],
            tags: ['pasta', 'italian', 'dinner']
        },
        { 
            name: 'Vegetarian Curry', 
            link: 'https://www.cookwithmanali.com/vegetable-chickpea-coconut-curry/',
            imageSrc: 'images/Image3.jpg', 
            description: 'A hearty curry loaded with vegetables and spices.',
            dietary: ['vegetarian', 'vegan', 'gluten free'],
            tags: ['curry', 'vegetables']
        },
        { 
            name: 'Chocolate Cake', 
            link: 'https://addapinch.com/the-best-chocolate-cake-recipe-ever/',
            imageSrc: 'images/Image4.jpg',
            description: 'Rich and moist chocolate cake for dessert lovers.',
            dietary: ['dairy'],
            tags: ['dessert', 'sweet']
        },
        { 
            name: 'Grilled Chicken Salad', 
            link: 'https://cafedelites.com/grilled-lemon-herb-mediterranean-chicken-salad-recipe/',
            imageSrc: 'images/griledchicken.jpg', 
            description: 'A healthy and flavorful salad with grilled chicken.',
            dietary: ['gluten free'],
            tags: ['healthy', 'salad', 'mediterranean', 'lunch']
        },
        { 
            name: 'Homemade Pizza', 
            link: 'https://www.loveandlemons.com/homemade-pizza/',
            imageSrc: 'images/pizza.jpg', 
            description: 'Easy and delicious pizza with customizable toppings.',
            dietary: ['dairy'],
            tags: ['pizza', 'italian']
        },
        { 
            name: 'Classic Pancakes', 
            link: 'https://kitchenfunwithmy3sons.com/fluffy-pancakes/',
            imageSrc: 'images/classic pancake.jpg', 
            description: 'Fluffy pancakes perfect for a delightful breakfast.',
            dietary: ['dairy'],
            tags: ['breakfast', 'sweet']
        },
        { 
            name: 'Beef Stroganoff', 
            link: 'https://www.gimmesomeoven.com/easy-beef-stroganoff-recipe/',
            imageSrc: 'images/beef-stroganoff.webp', 
            description: 'A creamy and savory beef dish served with noodles.',
            dietary: ['dairy'],
            tags: ['beef', 'meat']
        }
    ];

    const matchedRecipes = recipes.filter(recipe => {
        // Match search term in recipe name (case-insensitive)
        const matchesSearch = recipe.name.toLowerCase().includes(searchQuery);

        // Check search term matches any dietary restriction (e.g., gluten free)
        const matchesDietary = recipe.dietary.some(dietary => dietary.toLowerCase().includes(searchQuery));

        const matchesTags = recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery));


        // Return true if either search term matches the recipe name OR dietary restrictions
        return matchesSearch || matchesDietary || matchesTags;
    });

    if (matchedRecipes.length > 0) {
        // If there are matching recipes, display them as recipe cards
        let resultHtml = '';

        matchedRecipes.forEach(recipe => {
            resultHtml += `
                <div class="recipe-card">
                    <img src="${recipe.imageSrc}" alt="${recipe.name} Image"> 
                    <h3>${recipe.name}</h3> 
                    <p>${recipe.description}</p> 
                    
                    <!-- Display dietary restrictions -->
                    ${recipe.dietary.length > 0 ? `<p><strong>Dietary:</strong> ${recipe.dietary.join(', ')}</p>` : ''}
                    <a href="${recipe.link}" class="btn">View Recipe</a> 
                </div>
            `;
        });

        // Insert the result list into a section in your HTML
        const resultContainer = document.getElementById('search-results');
        resultContainer.innerHTML = resultHtml;
    } else {
        // If no match is found, show an alert
        alert("No recipe found for your search.");
    }
});