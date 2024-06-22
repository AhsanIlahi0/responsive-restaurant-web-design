function color(clickedId) {
    // Remove the active class from all h7 elements
    document.querySelectorAll('h7').forEach(function(element) {
        element.classList.remove('active');
    });
    // Add the active class to the clicked h7 element
    document.getElementById(clickedId).classList.add('active');
}
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { // Adjust the value as needed
        navbar.classList.add('scrolled');
        navbar.classList.add('fixed');
        navbar.classList.add('index')
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.remove('fixed');
    }
});
function openModal() {
    var modal = document.getElementById('modal');
    var modal_c = document.getElementById('modal-content');
    modal.classList.add('show');
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 100); // Slight delay to trigger CSS transition
    // modal_c.classList.add('new');
}
// Function to close the modal
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.classList.remove('show');
        modal.style.display = 'none';
    }, 200); // Timeout to match the CSS transition duration
    document.getElementById('navbar').classList.remove('new');

}
// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}

