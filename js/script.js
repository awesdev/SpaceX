$(document).ready(function () {
    new WOW().init();

    $(".burger-menu").on("click", function () {
        $(this).toggleClass("burger-menu--active");
        $(".header__menu").toggleClass("header__menu--active");
        $(".header__menu").toggleClass("wow fadeInRight");
    })
})