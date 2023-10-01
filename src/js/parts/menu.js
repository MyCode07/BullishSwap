import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const multilanguage = document.querySelector('.multilanguage');
const menuLinks = document.querySelectorAll('.menu nav li a');

if (burger) {
    burger.addEventListener('click', (е) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');
        document.body.classList.toggle('_noscroll');
        multilanguage.classList.toggle('_active');

        if (menu.classList.contains('_open')) {
            lockPadding();
        }
        else {
            unLockPadding()
        }
    })
}


if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {

            if (!isMobile.any())
                if (menu.classList.contains('_open')) unLockPadding();
                else lockPadding()

            menu.classList.toggle('_open');
            burger.classList.toggle('_active');

            document.body.classList.toggle('_noscroll');
        })
    })
}





document.addEventListener('DOMContentLoaded', function (e) {
    const langsElems = document.querySelectorAll('.multilanguage');
    if (langsElems.length) {
        langsElems.forEach(elem => {
            elem.addEventListener('click', (е) => {
                elem.classList.toggle('_open');

                const langs = elem.querySelectorAll('a');
                if (langs)
                    langs.forEach(lang => {
                        lang.addEventListener('click', (e) => {
                            langs.forEach(item => {
                                item.classList.remove('_selected')
                            })

                            const label = lang.closest('.multilanguage').querySelector('label')
                            if (label) label.textContent = e.target.textContent

                            e.target.classList.add('_selected')
                        })
                    })
            })

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
        targetEl.closest('.multilanguage').classList.remove('_open')
        targetEl.closest('.multilanguage').querySelector('button label').textContent = targetEl.textContent.toLowerCase()
    }
})