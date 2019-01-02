
const $window = $(window);
let $navbar = $('.navbar');

$window.scroll(()=>{
    console.log($navbar);
    if($navbar) {
        const top = $window.scrollTop();
        const windowHeight = window.innerHeight;
        console.log(top, windowHeight);
        if (top > windowHeight) {
            $navbar.addClass('navbar-fixed-top');
        } else {
            $navbar.removeClass('navbar-fixed-top');
        }
    }
});