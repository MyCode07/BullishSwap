import Swiper from 'swiper';
import { Pagination, Autoplay, Grid } from 'swiper/modules';

const sliders = document.querySelector('.swiper');
const pagination = document.querySelector('.pagination')

new Swiper(sliders, {
    modules: [
        Pagination, Autoplay, Grid
    ],
    slidesPerView: 'auto',
    spaceBetween: 32,
    lazy: true,

    pagination: {
        el: pagination,
        clickable: true
    },

    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },

    breakpoints: {
        300: {
            centeredSlides: true,
            grid: false,
            slidesPerGroup: 1,
            autoplay: {
                delay: 4000,
            },
            speed: 600,
        },
        769: {
            centeredSlides: false,
            grid: {
                rows: 2,
                fill: 'row',
                slidesPerGroup: 4,
            },
            speed: 300,
        }
    }
})
