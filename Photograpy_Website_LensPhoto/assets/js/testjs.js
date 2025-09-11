// Sticky Header Effect
window.addEventListener('scroll', function() {
    const winTop = window.scrollY;
    if (winTop >= 30) {
        document.body.classList.add('sticky-header');
    } else {
        document.body.classList.remove('sticky-header');
    }
});

// Gallery and Article functionality
let currentArticleIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');

// Gallery item click event
galleryItems.forEach((item, index) => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();
        currentArticleIndex = index;
        openArticle(item);
    });
});

function openArticle(item) {
    const articleId = item.getAttribute('data-article');
    const img = item.querySelector('img').src;
    const title = item.querySelector('.desc h4').textContent;
    const articleContent = document.querySelector(`.article-html[data-article="${articleId}"]`).innerHTML;

    // Set article content
    document.getElementById('articleHeader').style.background = `url(${img}) no-repeat center`;
    document.getElementById('articleHeader').style.backgroundSize = 'cover';
    document.getElementById('articleTitle').textContent = title;
    document.getElementById('articleContent').innerHTML = articleContent;

    // Show article
    document.body.classList.add('article-opened');
    document.getElementById('articleControls').style.display = 'flex';
    
    // Scroll to top of article
    document.getElementById('articleView').scrollTop = 0;
}

function closeArticle() {
    document.body.classList.remove('article-opened');
    document.getElementById('articleControls').style.display = 'none';
}

// Navigation controls
document.getElementById('closeBtn').addEventListener('click', closeArticle);
document.getElementById('articleOverlay').addEventListener('click', closeArticle);

document.getElementById('nextBtn').addEventListener('click', function(event) {
    event.stopPropagation();
    currentArticleIndex = (currentArticleIndex + 1) % galleryItems.length;
    openArticle(galleryItems[currentArticleIndex]);
});

document.getElementById('prevBtn').addEventListener('click', function(event) {
    event.stopPropagation();
    currentArticleIndex = currentArticleIndex === 0 ? galleryItems.length - 1 : currentArticleIndex - 1;
    openArticle(galleryItems[currentArticleIndex]);
});

// Close article on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeArticle();
    }
});

// Prevent article view from closing when clicking inside
document.getElementById('articleView').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
    // In a real application, you would send this data to a server
    alert('Thank you for your message! I will get back to you soon.');
    document.getElementById('contactForm').reset();
    } else {
    alert('Please fill in all fields.');
    }
});
