$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll>150){
            $(".navbar").css("background","#222");
            $(".navbar").css("box-shadow","rgba(0, 0, 0, 0.1) 0px 4px 12px");

        }
        else{
            $(".navbar").css("background","transparent");
            $(".navbar").css("box-shadow", "none");
        }
    })

});
var navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref = $(this).atter("href");
    $("html,body").animate({
        scrollTop: $(targetHerf).offset().top= navbarHeight
    }, 1000)
    e.preventDefault();
})
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu")

mobile.addEventListener("click", function(){
    mobile.classList.toogle("is-active");
    mobileLink.classList.toggle("active");
})
mobileLink.addEventListener("click", function(){
    const menuBars = document.queryselector(".is-active");
    if(window.innerWidth <=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }

})

var swiper= new Swiper(".mySwiper",
{   
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,

    },
    slidesPerView:1,
    spaceBetween:10,
    Pagination: {
        el:".swiper-pagination",
        clickable : true,

    },
    breakpoints:{
        640:{
            slidesPreView: 2,
            spaceBetween:20,
        },
        768:{
            slidesPreView: 3,
            spaceBetween:40,
        },
        1024:{
            slidesPreView: 3,
            spaceBetween:50,
        }
    }
})