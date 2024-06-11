;(function ($) {
    setTimeout(() => {
        $('.aliados-carousel').owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 2,
                },
                780: {
                    items: 3,
                },
                1000: {
                    items: 3,
                },
            },
        })

        $('.confi-carousel').owlCarousel({
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 2,
                },
                780: {
                    items: 3,
                },
                1000: {
                    items: 5,
                },
            },
        })
    }, 500)
})(jQuery)

const scrollMenu = () => {
    const menu = document.querySelector('.site-header')

    menu.classList.toggle('scrolled', window.scrollY > 0)
}

window.addEventListener('scroll', scrollMenu)
