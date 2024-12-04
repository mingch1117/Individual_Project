document.addEventListener("DOMContentLoaded", function () {
    const slideshowContainer = document.getElementById("slideshow-gallery");

    // Array of all the selected image in the gallery folder that I want to display
    const images = [
        "Arch509_W23_MingChen_CityxCharacter.02.300dpi.jpg", "Arch509_W23_MingChen_FinalSetUp_01.300dpi.jpg", "Arch509_W23_MingChen_FinalSetUp_02.300dpi.jpg", "DSC02938-2.jpg", "IMG_9241.jpg", "IMG_9249.jpg","DSC02955-2.jpg","DSC02982-2.jpg"
    ];

    let slideIndex = 0;
    const totalSlides = images.length;

    // a wrapper div that contain the image and buttons
    const wrapper = document.createElement("div");
    wrapper.classList.add("slideshow-wrapper");
    slideshowContainer.appendChild(wrapper);

    //image element and append it to wrapper
    const img = document.createElement("img");
    img.classList.add("slide-image");
    wrapper.appendChild(img);


     //Function to display the current slide
    function showSlide(index) {
        img.src = `image/${images[index]}`; // the path to images in the gallery folder
        img.alt = `Slide ${index + 1}`;
    }

    //give the initial display of the first slide
    showSlide(slideIndex);

    //function for next slide and previous slide
    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    //auto-play slideshow every 5 seconds
    setInterval(nextSlide, 5000);
});