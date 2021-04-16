console.log("hello");

const toggleButton = document.getElementById('burger');
const navBarLinks = document.getElementById('navbar-links');

console.log(toggleButton);

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
    console.log("click");

    //Burger animation
    toggleButton.classList.toggle('burger-toggle');

})