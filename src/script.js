// Slider Functionality
let currentSlideIndex = 0;

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

function currentSlide(n) {
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (n >= slides.length) {
        currentSlideIndex = 0;
    }
    if (n < 0) {
        currentSlideIndex = slides.length - 1;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Auto-advance slides every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Donation button functionality
document.querySelectorAll('.donate-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('आपल्या मिशनला समर्थन करण्यास आपली आस्था दाखवल्याबद्दल धन्यवाद! कृपया आमच्या सुरक्षित भुगतान पोर्टलवर दान प्रक्रिया पूर्ण करा.');
    });
});

// Library buttons functionality
document.querySelectorAll('.library-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('आमच्या डिजिटल ग्रंथालय संसाधनांमध्ये आपली आस्था दाखवल्याबद्दल धन्यवाद!');
    });
});