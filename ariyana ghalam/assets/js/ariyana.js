$(document).ready(function(){

    // $('.search-box input').click(function(){
    //     $(this).addClass('active');
    // });

    // $('login-btn').click(function(){
    //     $('.search-box input').removeClass('active');
    // });

    new Swiper('.sw-hero-section',{
        speed:'2000',
        // autoplay:{
        //     delay:3000,
        // },
        pagination: {
            el: '.slider-pag',
            clickable: true,
        },
    });

    new Swiper('.swiper-price-card',{
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl:'.hero-next',
            prevEl:'.hero-prev'
        },
        breakpoints:{
            0:{
                slidesPerView: 1.2,
            },
            576:{
                slidesPerView: 2,
            },
            768:{
                slidesPerView: 3,
            },
            992:{
                slidesPerView: 3.5,
            },
            1200: {
                slidesPerView: 4,
            }
           },
    });

    new Swiper('.sw-category-items',{
        slidesPerView:5,
        spaceBetween: 10,
        pagination: {
            el: '.slider-pag-three',
            clickable: true,
        },
        breakpoints:{
            0:{
                slidesPerView: 2,
                
            },
            576:{
                slidesPerView: 2.5,
            },
            768:{
                slidesPerView: 3,
            },
            992:{
                slidesPerView: 3.5,
            },
            1200: {
                slidesPerView: 5,
            }
           },
    });

    new Swiper('.sw-category-product',{
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints:{
            0:{
                slidesPerView: 1.3,
            },
            576:{
                slidesPerView: 2,
            },
            768:{
                slidesPerView: 3,
            },
            992:{
                slidesPerView: 3.5,
            },
            1200: {
                slidesPerView: 4,
            }
           },
    });

    new Swiper('.sw-booksname',{
        slidesPerView:4,
        spaceBetween:32,
        grid:{
            rows: 2,
        },
        
        pagination: {
            el: '.slider-pag-tow',
            clickable: true,
        },
        breakpoints:{
            0:{
                slidesPerView: 1.2,
                spaceBetween: 12,
                
            },
            576:{
                slidesPerView: 2,
            },
            768:{
                slidesPerView: 2.5,
            },
            992:{
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
           },
    });

    new Swiper('.sw-brands',{
        slidesPerView: 4,
        spaceBetween:20,
        navigation: {
            nextEl:'.banner-next',
            prevEl:'.banner-prev'
        },
        breakpoints:{
            0:{
                slidesPerView: 2.3,
            },
            576:{
                slidesPerView: 2.5,
            },
            768:{
                slidesPerView: 3,
            },
            992:{
                slidesPerView: 3.5,
            },
            1200: {
                slidesPerView: 4,
            }
           },
    });

    new Swiper('.sw-blogg',{
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl:'.hero-next',
            prevEl:'.hero-prev'
        },
        breakpoints:{
            0:{
                slidesPerView: 1.3,
            },
            576:{
                slidesPerView: 2.5,
            },
            768:{
                slidesPerView: 3,
            },
            992:{
                slidesPerView: 3.5,
            },
            1200: {
                slidesPerView: 4,
            }
           },
    });

    $('.mobile-menu-btn').click(function(){
        $('.mobile-menu').addClass('open');
        $('#mask').fadeIn();
    });

    $('.close-menu').click(function(){
        $('.mobile-menu').removeClass('open');
        $('#mask').fadeOut();
    });

    $('#mask').click(function(){
        $(this).fadeOut();
        $('.mobile-menu').removeClass('.open');
    });


    $('.contact-info').click(function(){
        $('.contact-info').addClass('.dis-b');
    });



    $('.play-video').click(function(){
        $(this).fadeOut();
        const video = $(this).siblings('video');
        $(video).attr('controls' , 'controls');
        $(video)[0].play();
    });

    



    const targetDate = new Date("2025-02-20T00:00:00").getTime();

    const timerInterval = setInterval(function () {
        const now = new Date().getTime();
         const timeLeft = targetDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            $(".days").text(days.toString().padStart(2, '0'));
            $(".hours").text(hours.toString().padStart(2, '0'));
            $(".minutes").text(minutes.toString().padStart(2, '0'));
            $(".seconds").text(seconds.toString().padStart(2, '0'));
        } else {
            clearInterval(timerInterval);
            $("#timer").text("زمان به پایان رسید!");
        }
    }, 1000);





    // var $grid = $('.grid-iso').isotope({
    //     itemSelector: '.element-item',
    //     layoutMode: 'fitRows'
    //   });

    //   $('.three-btns').on( 'click', 'a', function(e) {
    //     e.preventDefault();
    //     var filterValue = $(this).attr('data-filter');
    //     $grid.isotope({ filter: filterValue });
    //   });

    
});