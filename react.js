document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll to section when clicking on navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Prevent form submission and add your desired logic here
    const submitButton = document.getElementById('submit');
    const form = document.getElementById('form');
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted!');
    });
});
