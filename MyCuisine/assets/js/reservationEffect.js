// Form validation
        (function() {
            'use strict';
            
            const form = document.getElementById('reservationForm');
            
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                
                form.classList.add('was-validated');
                
                // If form is valid, show success message
                if (form.checkValidity()) {
                    event.preventDefault();
                    showSuccessMessage();
                }
            }, false);
        })();
        
        function showSuccessMessage() {
            const submitBtn = document.querySelector('.btn-primary');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Reservation Submitted!';
            submitBtn.classList.remove('btn-primary');
            submitBtn.classList.add('btn-success');
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.classList.remove('btn-success');
                submitBtn.classList.add('btn-primary');
                submitBtn.disabled = false;
                document.getElementById('reservationForm').reset();
                document.getElementById('reservationForm').classList.remove('was-validated');
            }, 3000);
        }
        
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', today);
        
        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });