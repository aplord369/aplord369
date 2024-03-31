


let cardIndex = 0;
const slider = document.querySelector('.slider');

function nextCard() {
    cardIndex = (cardIndex + 1) % slider.children.length;
    updateCardPosition();
}

function updateCardPosition() {
    slider.style.transform = `translateX(${-cardIndex * 100}%)`;
}

document.querySelectorAll('.image-adjuster').forEach(input => {
    input.addEventListener('input', () => {
        const scale = input.value / 100;
        input.parentNode.querySelector('img').style.transform = `scale(${scale})`;
    });
});

setInterval(nextCard, 3000); // Change slide every 3 seconds



// image slider code 

const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

const autoSlide = () => {
    counter++;
    if (counter === slides.length) {
        counter = 0;
    }
    slideImage();
    setTimeout(autoSlide, 2000); // Change slide every 2 seconds
};

// Start automatic sliding
autoSlide();



//  JS for section2 




let CardIndex = 0;
const cards = document.querySelector('.cards');

function nextCard() {
  cardIndex = (cardIndex + 1) % cards.children.length;
  updateCardPosition();
}

function prevCard() {
  cardIndex = (cardIndex - 1 + cards.children.length) % cards.children.length;
  updateCardPosition();
}

function updateCardPosition() {
  cards.style.transform = `translateX(${-cardIndex * (300 + 20)}px)`;
}




