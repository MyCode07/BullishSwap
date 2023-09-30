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

            slidesPerView: 'auto',
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
    })
}