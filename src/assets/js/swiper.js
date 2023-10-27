initSwiper ('.swiper',8);
function initSwiper(swiper, perview) {
    let checkSwiper = document.querySelector(swiper)
    if (checkSwiper) {
        new Swiper(swiper, {
            // speed: 1000,
            // spaceBetween: 5,
            // loop: true,

            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                440: {
                    slidesPerView: 1.5,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: perview,
                }
            },
        });
    }
}

const curseSlider = new Swiper('.innovation__swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,


    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    }
})




