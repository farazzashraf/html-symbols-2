const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = form.querySelector('form input').value;
    searchTerm.querySelector('.left-arrow');
});
