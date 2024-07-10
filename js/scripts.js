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

const toggleMenu = () => {
    const burger = document.querySelector('.burger')
    const menuMovil = document.querySelector('.header-movil__menu')

    menuMovil.classList.toggle('active')
    burger.classList.toggle('active')
}

document.querySelector('.burger').addEventListener('click', toggleMenu)

const submenuMovil = () => {
    const hasSubMenu = document.querySelectorAll('.has-submenu')

    hasSubMenu.forEach((item) => {
        const subMenuIcon = item.querySelector('svg')

        subMenuIcon.addEventListener('click', () => {
            subMenuIcon.classList.toggle('active')

            const subMenu = item.querySelector('.has-submenu ul')
            subMenu.classList.toggle('active')
        })
    })
}

submenuMovil()
