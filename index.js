// Slider

document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2000, // milliseconds
            disableOnInteraction: false,
        },
        effect: 'slide', // Set the slide effect
        direction: 'horizontal', // Set the direction to horizontal
        speed: 1000, // Set the transition speed (adjust as needed)
    });
});




// icon

function moveIcon(icon) {
    icon.style.transition = "transform 1s ease";
    icon.style.transform = "translateY(-10px)";
}

document.addEventListener('DOMContentLoaded', function () {
    var shareIcons = document.querySelectorAll('.share a');

    shareIcons.forEach(function (icon) {
        icon.addEventListener('mouseout', function () {
            icon.style.transition = "transform 1s ease";
            icon.style.transform = "translateY(0)";
        });
    });
});

