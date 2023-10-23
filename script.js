//Navigation
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
//End Navigation

//slider
var swiper = new Swiper(".mySwiper",{
    //autoplay: {
    //     delay: 2500,
    //    disableOnInteraction: false,
    //},
    pagination: {
        el: ".swiper-pagination",
        dunamicBullets: true,
    },
});
// End Slider