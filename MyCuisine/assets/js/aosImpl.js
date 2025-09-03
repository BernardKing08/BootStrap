// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Navbar scroll effect
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.ftco-navbar-light').addClass('scrolled awake');
    } else {
        $('.ftco-navbar-light').removeClass('scrolled awake');
    }
});

// Form validation
(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

// Reservation form handling
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Basic validation
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
    }
    
    // Show success message (you would typically send this to a server)
    alert('Thank you for your reservation request! We will contact you shortly to confirm your booking.');
    
    // Reset form
    form.reset();
    form.classList.remove('was-validated');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Refresh AOS on tab change for menu section
document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
    tab.addEventListener('shown.bs.tab', function (e) {
        AOS.refresh();
    });
});
