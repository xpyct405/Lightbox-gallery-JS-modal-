let slideIndex = 0;
// showSlides(slideIndex);

function currentSlide(n) {
    showSlides (slideIndex = n)
};

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

// Ниже функция- при клике Escape срабатывает функция closeModal()
document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){
        closeModal()
    }
});

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides'); // Slides
    let demo = document.getElementsByClassName('demo'); // Demo slides
    let dots = document.getElementsByClassName("dot"); // Pagination
    let captionText = document.getElementById('caption'); // Caption text

    //Slides
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) { slideIndex = slides.length};
    for ( i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }

    // Demo slides
    for ( i = 0; i < demo.length; i++){
        demo[i].className = demo[i].className.replace (' active', '');
    }

    // Pagination
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    
    slides[slideIndex - 1].style.display = 'block'; // Slides
    demo[slideIndex - 1].className += ' active'; // Demo slides
    dots[slideIndex-1].className += ' active'; // Pagination
    captionText.innerHTML = demo[slideIndex - 1].alt; // Caption text
}