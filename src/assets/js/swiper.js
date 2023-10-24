initSwiper ('.swiper',8);
function initSwiper(swiper, perview) {
    let checkSwiper = document.querySelector(swiper)
    if (checkSwiper) {
        new Swiper(swiper, {
            speed: 1000,
            direction: 'horizontal',
            // spaceBetween: 20,

            grabCursor: true,
            // navigation: {
            //     nextEl: ${swiper}-btn-next,
            //     prevEl: ${swiper}-btn-prev,
            // },
            breakpoints: {
                440: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 3,
                },
                1920: {
                    slidesPerView: perview,
                },
            },
        });
    }
}




