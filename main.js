let currentIndex = 0;

function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-image');
    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + images.length) % images.length;
    
    images[currentIndex].classList.add('active');
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const url = this.parentNode.href;

        document.getElementById('loading-screen').style.display = 'flex';
        setTimeout(() => {
            window.location.href = url; 
        }, 2000);
    });
});

// Add this listener for when the user navigates back
window.addEventListener('popstate', function(event) {
    // Display the loading screen
    document.getElementById('loading-screen').style.display = 'flex';
    
    // Delay the loading of the previous page
    setTimeout(() => {
        window.location.reload(); // This will reload the current page
    }, 2000);
});

// Optional: If you want to hide the loading screen after the page has loaded, you can do this:
window.addEventListener('load', function() {
    document.getElementById('loading-screen').style.display = 'none';
});

