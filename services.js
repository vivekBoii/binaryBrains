const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
   
    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    // Call these two functions when image list scrolls
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        // handleSlideButtons();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


// video 
// const initSlidervideo = () => {
//     const imageList = document.querySelector(".slider-wrapper .video-list");
//     const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button-video");

//     // Slide images according to the slide button clicks
//     slideButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const direction = button.id === "prev-slide-video" ? -1 : 1;
//             const scrollAmount = imageList.clientWidth * direction;
//             imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//         });
//     });

//     // Call these two functions when image list scrolls
//     imageList.addEventListener("scroll", () => {
//         updateScrollThumbPosition();
//     });
// }

// window.addEventListener("resize", initSlidervideo);
// window.addEventListener("load", initSlidervideo);