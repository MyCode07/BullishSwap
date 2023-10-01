import Swiper from 'swiper';
import { Pagination, Autoplay, Grid } from 'swiper/modules';

const sliders = document.querySelector('.swiper');
const pagination = document.querySelector('.pagination')
const slides = sliders.querySelectorAll('.swiper-slide');

let n = 0;

for (let i = 0; i < slides.length; i++) {
    const element = slides[i];

    if (i == (n * 8 + 1)) {
        slides[i].style.order = i
        console.log(i);
    }
    else if (i == (n * 8 + 2)) {
        slides[i].style.order = i + 1
    }
    n++
}

new Swiper(sliders, {
    modules: [
        Pagination, Autoplay, Grid
    ],

    slidesPerView: 'auto',
    spaceBetween: 32,
    lazy: true,
    slidesPerGroup: 8,
    speed: 300,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    pagination: {
        el: pagination,
        clickable: true
    },
    breakpoints: {
        300: {
            centeredSlides: true,
            grid: false
        },
        769: {
            centeredSlides: false,
            grid: {
                rows: 2
            },
        }
    }


})
