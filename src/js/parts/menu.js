import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const multilanguage = document.querySelector('.multilanguage');

if (burger) {
    burger.addEventListener('click', (е) => {
        menu.classList.toggle('_open');
        burger.classList.toggle('_active');
        multilanguage.classList.toggle('_active');
        document.body.classList.add('_noscroll');
    })


}

multilanguage.addEventListener('click', (е) => {
    multilanguage.classList.toggle('_open');

    const options = multilanguage.querySelectorAll('li');

    if (options)
        options.forEach(opt => {
            opt.addEventListener('click', (e) => {

                options.forEach(opt => {
                    opt.classList.remove('_selected')
                })

                const label = opt.closest('.multilanguage').querySelector('label')
                if (label) label.textContent = e.target.textContent

                e.target.classList.add('_selected')

            })
        })
})


document.addEventListener('DOMContentLoaded', function (e) {
    const langsElems = document.querySelectorAll('.multilanguage');
    if (langsElems.length) {
        langsElems.forEach(elem => {
            const label = elem.querySelector('button label');
            const currentLnag = elem.querySelector('.gt-current-lang');
            if (currentLnag) {
                label.textContent = currentLnag.textContent.toLowerCase()
            }
        })
    }
})

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('glink')) {
        targetEl.closest('.multilanguage').querySelector('button label').textContent = targetEl.textContent.toLowerCase()
    }
})