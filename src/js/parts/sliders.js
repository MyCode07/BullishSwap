import Swiper from 'swiper';
import { Pagination, Autoplay, Grid } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
const pagination = document.querySelector('.pagination')

if (sliders.length) {
    sliders.forEach(slider => {


        new Swiper(slider, {
            modules: [
                Pagination, Autoplay, Grid
            ],

            grid: {
                rows: 2
            },
            slidesPerView: 4,
            spaceBetween: 32,
            lazy: true,
            autoplay: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            pagination: {
                el: pagination,
                clickable: true
            },


        })
    })
}