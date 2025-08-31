// Simplified and improved scroll function
        var scrollWindow = function() {
            $(window).scroll(function() {
                var $w = $(this),
                    st = $w.scrollTop(),
                    navbar = $('.ftco-navbar-light');

                // Determine if we've scrolled past the threshold
                if (st > 50) {
                    if (!navbar.hasClass('scrolled')) {
                        navbar.addClass('scrolled');
                    }
                    
                    // Further down the page
                    if (st > 550) {
                        navbar.removeClass('sleep');
                        navbar.addClass('awake');
                    } else {
                        navbar.removeClass('awake');
                        navbar.addClass('sleep');
                    }
                } else {
                    // At the top of the page
                    if (navbar.hasClass('scrolled')) {
                        navbar.removeClass('scrolled sleep awake');
                    }
                }
            });
        };
        scrollWindow();
        
        // Close navbar when clicking on a link (on mobile)
        $(document).on('click', '.navbar-collapse.show', function(e) {
            if ($(e.target).is('a')) {
                $(this).collapse('hide');
            }
        });