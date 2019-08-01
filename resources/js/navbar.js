
const $window = $(window);
let $navbar = $('.navbar');

$window.scroll(()=>{
    setNavbar();
});

$('a').click(()=>{
    setNavbar();
});

function setNavbar(){
    if($navbar) {
        const top = $window.scrollTop();
        const windowHeight = window.innerHeight;
        if (top > windowHeight) {
            $navbar.addClass('navbar-fixed-top');
            $('body').addClass('padded');
        } else {
            $navbar.removeClass('navbar-fixed-top');
            $('body').removeClass('padded');
        }
    }
}
