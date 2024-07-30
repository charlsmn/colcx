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

        $('.certificados-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                780: {
                    items: 2,
                },
                1000: {
                    items: 3,
                    margin: 100,
                    loop: false,
                },
            },
        })

        $('.carousel-contacto').owlCarousel({
            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                },
                780: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        })

        $('.card-document-carousel').owlCarousel({
            loop: false,
            autoplay: true,
            margin: 20,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                780: {
                    items: 1,
                },
                1000: {
                    items: 4,
                },
            },
        })

        if (window.innerWidth < 768) {
            $('.comunicados-carousel').owlCarousel({
                loop: false,
                autoplay: true,
                margin: 20,
                dots: true,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0,
                    },
                },
            })
        }

        if (window.innerWidth > 768) {
            $('.comunicados-carousel-escritorio').owlCarousel({
                loop: false,
                autoplay: true,
                margin: 20,
                dots: true,
                responsive: {
                    780: {
                        items: 1,
                    },
                    1000: {
                        items: 1,
                    },
                },
            })
        }
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

const pqrAnonima = () => {
    const checkbox = document.getElementById('anonima')
    const div = document.querySelector('.anonima-nombre')

    if (checkbox && div) {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                div.style = 'display: none'
            } else {
                div.style = 'display: block'
            }
        })
    }
}

pqrAnonima()

const formTabs = () => {
    const menuFormTabs = document.querySelectorAll('.form-menu li')
    const formContainers = document.querySelectorAll('.form-content > div')

    const activateTab = (index) => {
        menuFormTabs.forEach((item) => {
            item.classList.remove('active')
        })

        formContainers.forEach((item) => {
            item.classList.remove('active')
        })

        menuFormTabs[index].classList.add('active')
        formContainers[index].classList.add('active')
    }

    const urlParams = new URLSearchParams(window.location.search)
    const tabParam = urlParams.get('tab')

    if (tabParam) {
        activateTab(1)
    }

    menuFormTabs.forEach((item, index) => {
        item.addEventListener('click', () => {
            activateTab(index)
        })
    })
}

formTabs()

const adjuntarDocumento = () => {
    const adjuntarInput = document.querySelector('.adjuntar-doc input')
    const fileName = document.querySelector('.adjuntar-doc span')

    if (adjuntarInput) {
        adjuntarInput.addEventListener('change', () => {
            fileName.textContent = adjuntarInput.files[0].name
        })
    }
}

adjuntarDocumento()
