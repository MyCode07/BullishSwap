import { isMobile } from "../utils/isMobile.js";

const popup = document.querySelector('.popup');
const popupOpenButtons = document.querySelectorAll('[data-open-popup]');


if (popup) {

    if (popupOpenButtons.length)
        popupOpenButtons.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();

                popup.classList.add('_open');
                document.body.classList.add('_noscroll');

                if (!isMobile.any()) {
                    lockPadding()
                }
            })
        })

    const popupClose = popup.querySelector('.popup__close');

    popupClose.addEventListener('click', function () {
        popup.classList.remove('_open');
        document.body.classList.remove('_noscroll');

        if (!isMobile.any()) {
            unLockPadding()
        }
    })

    popup.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup')) {
            popup.classList.remove('_open')
            document.body.classList.remove('_noscroll');
            unLockPadding()
        }
    })
}