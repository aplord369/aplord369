
const slides = document.querySelectorAll(".slide")
var counter = 0
// console.log(slide)

slides.forEach(
    (slide, index) => {
        slide.style.bottom = `$(index *100)%`
    }
)



const goPre = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    slideImage()
}




const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateY(-${counter * 100}%)`
        }
    )
}




