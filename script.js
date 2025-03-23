document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transition = 'color 0.3s ease';
        link.style.color = '#c0392b';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = 'white';
    });
});

function goToRecipes() {
    window.location.href = "./RECIPES/recipe.html";
}